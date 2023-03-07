import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Signup.css'
import { UserAuth } from '../context/AuthContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, logIn} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await logIn(email, password)
      navigate('/')
    } catch(error) {
        console.log(error)
    }
  } 


  return (
    <main>
    <div class='background'>
      <img src={require("../img/netflix-library-photo-scaled-1.jpg")} alt="background-img" />
    </div>
    <div class='login-container'>
      <div>
          <h1>Sign In</h1>
          <div className='inputs-container'>
        <form onSubmit={handleSubmit}>
            <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name='email'
            placeholder='email'
            autoComplete='email'
            />
          
            <input 
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name='password'
            placeholder='password'
            autoComplete='password'
            />
            <button>Sign In</button>
        </form>
        </div>
      </div>
      <div className='register'>
          <div className='remember'>
            <p><input type="checkbox"/>Remember me</p>
            <p>You need help?</p>
          </div>
        <div className='account'>
            <h5>Don't have a Netflix account yet? <Link  style={{ color:'white' }}>Register</Link></h5>
            <p>This site uses Google reCAPTCHA to ensure that you are not a bot. Find out more.</p>
        </div>
      </div>
    </div>
  </main>
  )
}
export default Login