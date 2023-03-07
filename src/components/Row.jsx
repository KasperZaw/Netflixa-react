import React from 'react'
import '../Styles/Row.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title, fetchURL, rowID}) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
        setMovies(response.data.results)
    })
  }, [fetchURL])  
 console.log(movies)
   
 const slideLeft = () => {
  var slider = document.getElementById('slider' + rowID);
  slider.scrollLeft = (slider.scrollLeft - 500);
};
const slideRight = () => {
  var slider = document.getElementById('slider' + rowID);
  slider.scrollLeft = (slider.scrollLeft + 500);
};
return (
  <>
    <h2>{title}</h2>
    <div className='container'>
      <MdChevronLeft className='bttn bttn-left' onClick={slideLeft} />
      <div id={'slider' + rowID} className='slider'>
        {movies.map((item, id) => (
          <Movie key={id} item={item} />
        ))}
      </div>
      <MdChevronRight className='bttn bttn-right' onClick={slideRight} />
    </div>
  </>
)
}

export default Row