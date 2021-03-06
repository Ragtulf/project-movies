import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { BackButton } from '../BackButton'

import 'pages/movieDetails.css'
import '../backButton.css'

export const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ce155d55b3ce81f17dbaf865fc989515&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
      })
  }, [movieId])

  return (
    <div className='backdrop' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
      <div className='backdrop-gradient'>
        <div className='content-container'>
          <img className='details-poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <div className='title-and-rating'>
            <h1>{movie.title}</h1>
            <h3 className='rating'>{movie.vote_average}/10</h3>
            <p className='overview'>{movie.overview}</p>
          </div>
        </div>
      </div>
      <Link to='/'>
        <div className='back-section'>
          <BackButton />
          <h4 className='hvr-forward'>Back</h4>
        </div>
      </Link>
      
      

    </div>
  )
}