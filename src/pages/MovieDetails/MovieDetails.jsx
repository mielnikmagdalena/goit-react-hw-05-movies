// MovieDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import {
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
} from '../../services/api';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieData = await getMovieDetails(movieId);
        const castData = await getMovieCredits(movieId);
        const reviewsData = await getMovieReviews(movieId);

        setMovie(movieData);
        setCast(castData.cast);
        setReviews(reviewsData.results);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieData();
  }, [movieId]);
  console.log(cast, reviews);

  return (
    <div className={styles.container}>
      <div className={styles.movieInfo}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={styles.poster}
        />
        <div className={styles.movieDetails}>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`reviews`}>Reviews</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetails;
