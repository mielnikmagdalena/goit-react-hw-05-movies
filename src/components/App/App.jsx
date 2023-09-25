/*import React from 'react';
import { Routes } from 'react-router-dom';
import AppRoutes from './utils/routes.jsx';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <AppRoutes />
      </Routes>
    </div>
  );
};*/
import React from 'react';
import Home from '../../pages/Home/Home.jsx';
import Movies from '../../pages/Movies/Movies.jsx';
import MovieDetails from '../../pages/MovieDetails/MovieDetails.jsx';
import Cast from '../../pages/Cast/Cast.jsx';
import Reviews from '../../pages/Reviews/Reviews.jsx';
import { Routes, Route } from 'react-router-dom';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />} />
      <Route path="/movies/:movieId/cast" element={<Cast />} />
      <Route path="/movies/:movieId/reviews" element={<Reviews />} />
    </Routes>
  );
};
