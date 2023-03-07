import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../Request';
import '../Styles/Main.css';
import Row from './Row';

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <>
      <div className='slideer'>
        {/* render the slider here */}
        <Row title='Trending Now' fetchURL={requests.requestTrending} rowID='5'/>
      </div>
      <header>
        <div className='header-container slideer-container'>
          <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
          <div className='more-info'>
            <div className='title-header'>
              <h1 className='title-info'>{movie?.title}</h1>
            </div>
            <div className='description-info'>{truncateString(movie?.overview, 250)}</div>
            <button className='btn btn-3'>
              <i className='fa-solid fa-play'></i>play
            </button>
            <button className='btn btn-4'>
              <i className='fa-solid fa-circle-info'></i>More informations
            </button>
          </div>
        </div>
        
      </header>
    </>
  );
};

export default Main;
