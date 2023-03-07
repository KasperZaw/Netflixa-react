import React from 'react'
import '../Styles/account.css'
import { useState, useEffect } from 'react'
const Account = () => {
  useEffect(() => {
     const closeBtn = document.getElementById('close-btn');
     const iconsContainer = document.querySelector('.icons')
     closeBtn.addEventListener('click', () => {
        iconsContainer.style.display = 'none'
     })
  }, []);

  useEffect(() => {
    const mainImg = document.getElementById('main-img');
    const iconsContainer = document.querySelector('.icons')
    mainImg.addEventListener('click', () => {
      iconsContainer.style.display = 'block'
    })
  }, [])
  
  useEffect(() => {
    const avatars = document.querySelectorAll('#avatar');
    const avatarContainer = document.getElementById('avatar-container');
  
   
  }, []);
  
   


  
  return (
    <div className='main'>
        <div className='icons'>
        <i className="fa-sharp fa-regular fa-circle-xmark" id='close-btn'></i>
        <div className='icons-container'>
          <img src={require("../img/Netflix-avatar-2.png" )}alt="profile" id='avatar'/>
          <img src={require("../img/Netflix-avatar-3.png" )}alt="profile" id='avatar'/>
          <img src={require("../img/Netflix-avatar-4.png" )}alt="profile" id='avatar'/>
          <img src={require("../img/Netflix-avatar-5.png" )}alt="profile" id='avatar'/>
          <img src={require("../img/Netflix-avatar-6.png" )}alt="profile" id='avatar'/>
        </div>
        </div>
      <div className='img-wrapper' id='main-img'>
        <img src={require("../img/Netflix-avatar.png")} alt="profile" id='avatar-container'/>
        <i className="fa-solid fa-pen"></i>
        </div>

    </div>
  )
}

export default Account