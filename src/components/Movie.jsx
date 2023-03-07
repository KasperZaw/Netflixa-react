import React from 'react'
import { useState } from 'react'
import {UserAuth} from '../context/AuthContext' 
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore' 


const Movie = ({item}) => {
    const [likes, setLikes] = useState(false);
    const [saved, setSaved] = useState(false);
    const { user } = UserAuth();

    const movieID = doc(db, 'users', `${user?.email}`)

    const saveShow = async () => {
      if(user?.email) {
        setLikes(!likes)
        setSaved(true)
        await updateDoc(movieID, {
          savedShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path
          })
        })
      } else {
        alert('Please log in to save favorite movies !')
      }
    }

    return (
    <>
       <div className='card-container' key={item.id}>
       <img
         src={
         item?.poster_path
           ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
           : require("../img/sinister.jpg").default
              }
            alt=''
/>
            <div className='inside'>
              <p onClick={saveShow}>
                {likes ? (
                  <i class="fa-solid fa-heart"></i>
                  ) : (
                    <i className="fa-regular fa-heart" ></i>
                 )
                }
                </p>
              <h3>{item.title}</h3>
            </div>
          </div>
    </>
  )
}           


export default Movie