import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/Signup.css'
import {UserAuth} from '../context/AuthContext'
const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signUp} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
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
        <h1>Sign Up</h1>
        <div class='inputs-container' >
    <form onSubmit={handleSubmit}>
          <input 
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name='email'
          placeholder='email'
          autoComplete='email'
          required
          />
          
          <input 
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name='password'
          placeholder='password'
          autoComplete='password'
          minlength="8" 
          required
          />
          <button>Sign Up</button>
          </form>
        </div>
      </div>
      <div className='register'>
          <div className='remember'>
            <p><input type="checkbox"/>Remember me</p>
            <p>You need help?</p>
          </div>
        <div className='account'>
            <h5>Already subscribed to Netflix? <Link  style={{ color:'white' }}>Sign In</Link></h5>
            <p>This site uses Google reCAPTCHA to ensure that you are not a bot. Find out more.</p>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Signup