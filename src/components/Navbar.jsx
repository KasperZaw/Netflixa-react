import React from 'react'
import '../Styles/Navbar.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
const Navbar = () =>{

  const [isScrolled, setIsScrolled] = useState(false);
  const {user, logOut} = UserAuth();
  const navigate = useNavigate();
  

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


  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
        <Link to='/' style={{ textDecoration: 'none' }}> 
        <h1>Netflix</h1>
        </Link>
       {user?.email ? ( 
         <div className='buttons-container'>
        
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