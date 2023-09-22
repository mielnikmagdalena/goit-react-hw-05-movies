import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../services/api'; // Zaimportuj funkcję do pobierania popularnych filmów

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    // Pobierz listę popularnych filmów przy użyciu funkcji getTrendingMovies
    getTrendingMovies().then(data => {
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
