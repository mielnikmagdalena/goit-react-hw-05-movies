import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/api';
import styles from './Cast.module.css'; // Zaimportuj moduł CSS dla Cast

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    <div className={styles.cast}>
      <h2 className={styles.title}>Cast</h2>
      <ul className={styles.list}>
        {cast.map(actor => (
          <li key={actor.id} className={styles.item}>
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
