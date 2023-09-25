import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/api'; // Importuj funkcję do pobierania informacji o zespole aktorskim
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const castData = await getMovieCredits(movieId);
        setCast(castData.cast);
      } catch (error) {
        console.error('Error fetching cast details:', error);
      }
    };

    fetchCastData();
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h1>Cast</h1>
      <ul className={styles.castList}>
        {cast.map(actor => (
          <li key={actor.id} className={styles.actorCard}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              className={styles.actorImage}
            />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
