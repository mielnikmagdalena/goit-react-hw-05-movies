import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../services/api'; // Zaimportuj funkcję do wyszukiwania filmów

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      // Jeśli użytkownik wprowadził zapytanie, wykonaj wyszukiwanie
      searchMovies(searchQuery).then(data => {
        setSearchResults(data.results);
      });
    } else {
      setSearchResults([]); // Jeśli pole wyszukiwania jest puste, wyczyść wyniki
    }
  }, [searchQuery]);

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
