import React from 'react'
import '../Styles/Navbar.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
const Navbar = () =>{
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const {user, logOut} = UserAuth();
  const navigate = useNavigate();
  
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  const handleLogout = async () => {
    try {
      await logOut()
      navigate('login')
    } catch(error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchButtonClick = async () => {
    // fetch movies data based on the search query
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=0cbff6ee7af9c9e655659e7dcdc0dcef&query=${searchQuery}`);
    const data = await response.json();
    // navigate to the search results page
    navigate(`/search/${searchQuery}`, { state: { movies: data.results } });
  };
  
  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
        <Link to='/' style={{ textDecoration: 'none' }}> 
        <h1>Netflix</h1>
        </Link>
       {user?.email ? ( 
         <div className='buttons-container'>
         <div className='search-container'>
            <input
            className='search'
            type="text" 
            value={searchQuery}
            onChange={handleSearchQueryChange}
            />
            <i className="fa-sharp fa-solid fa-magnifying-glass"  onClick={handleSearchButtonClick}></i>
         </div>
            <Link to='account'><img src={require("../img/Netflix-avatar.png")} alt="" /></Link>
            <button className='btn-2' onClick={handleLogout}>Logout</button>
        </div>) : (
           <div>
           <Link to='/login'>
             <button className='btn-1'>Sign in</button>
           </Link>
 
           <Link to='/signup'>
             <button className='btn-2'>Sign Up</button>
           </Link>
         </div>
        )} 
    </nav>
  )
}

export default Navbar