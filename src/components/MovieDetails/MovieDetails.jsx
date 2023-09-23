import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import styles from './MovieDetails.module.css'; // Zaimportuj moduł CSS dla MovieDetails

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovieDetails(data);
    });
  }, [movieId]);

  if (!movieDetails) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.movieDetails}>
      <h2 className={styles.title}>{movieDetails.title}</h2>
      <p className={styles.overview}>{movieDetails.overview}</p>
      <Link to={`/movies/${movieId}/cast`} className={styles.link}>
        Cast
      </Link>
      <Link to={`/movies/${movieId}/reviews`} className={styles.link}>
        Reviews
      </Link>
    </div>
  );
};

export default MovieDetails;
