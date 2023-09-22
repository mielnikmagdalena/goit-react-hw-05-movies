import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../services/api'; // Zaimportuj funkcję do pobierania informacji o zespole aktorskim

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // Pobierz informacje o zespole aktorskim na podstawie movieId
    getMovieCredits(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
