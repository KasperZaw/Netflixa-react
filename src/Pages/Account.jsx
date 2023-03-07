import React from 'react'
import '../Styles/account.css'
import { useState, useEffect } from 'react'
const Account = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
  };

  
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
  
    avatars.forEach((avatar) => {
      avatar.addEventListener('click', () => {
        avatarContainer.innerHTML = avatar.outerHTML;
      });
    });
  }, []);
   


  
  return (
    <div className='main'>
      <div className='icons'>
        <i className="fa-sharp fa-regular fa-circle-xmark" id='close-btn'></i>
        <div className='icons-container'>
          <img
            src={require("../img/Netflix-avatar-2.png")}
            alt="profile"
            onClick={() => handleAvatarClick("Netflix-avatar-2.png")}
          />
          <img
            src={require("../img/Netflix-avatar-3.png")}
            alt="profile"
            onClick={() => handleAvatarClick("Netflix-avatar-3.png")}
          />
          <img
            src={require("../img/Netflix-avatar-4.png")}
            alt="profile"
            onClick={() => handleAvatarClick("Netflix-avatar-4.png")}
          />
          <img
            src={require("../img/Netflix-avatar-5.png")}
            alt="profile"
            onClick={() => handleAvatarClick("Netflix-avatar-5.png")}
          />
          <img
            src={require("../img/Netflix-avatar-6.png")}
            alt="profile"
            onClick={() => handleAvatarClick("Netflix-avatar-6.png")}
          />
        </div>
      </div>
      <div className='img-wrapper' id='main-img'>
        {selectedAvatar ? (
          <img src={require(`../img/${selectedAvatar}`)} alt="profile" />
        ) : (
          <img src={require("../img/Netflix-avatar.png")} alt="profile" />
        )}
        <i className="fa-solid fa-pen"></i>
      </div>
    </div>
  );
}

export default Account