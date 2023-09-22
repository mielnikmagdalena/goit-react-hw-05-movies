import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { searchMovies } from '../services/api'; // Importuj funkcję do wyszukiwania filmów
import styles from './Movies.module.css';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');
    if (query) {
      setSearchQuery(query);
    }
  }, [location]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await searchMovies(searchQuery);
        setMovies(data.results);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return (
    <div className={styles.container}>
      <h1>Search Results</h1>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <ul className={styles.movieList}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.movieCard}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={styles.poster}
              />
              <h2>{movie.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
