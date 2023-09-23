import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../../services/api';
import styles from './Movies.module.css'; // Zaimportuj moduł CSS dla Movies

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      searchMovies(searchQuery).then(data => {
        setSearchResults(data.results);
      });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={styles.movies}>
      <h2 className={styles.title}>Search Movies</h2>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={handleSearchChange}
        className={styles.input}
      />
      <ul className={styles.list}>
        {searchResults.map(movie => (
          <li key={movie.id} className={styles.item}>
            <Link to={`/movies/${movie.id}`} className={styles.link}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
