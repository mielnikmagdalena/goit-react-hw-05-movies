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
// src/components/App.jsx

/*import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Movies from '../../pages/Movies/Movies';
import MovieDetails from '../../pages/MovieDetails/MovieDetails';
import Cast from '../../pages/Cast/Cast';
import Reviews from '../../pages/Reviews/Reviews';

export const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/movies/:movieId"
          element={
            <MovieDetails>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </MovieDetails>
          }
        />
      </Routes>
    </div>
  );
};*/

/*import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('../../pages/Home/Home.jsx'));
const Movies = React.lazy(() => import('../../pages/Movies/Movies.jsx'));
const MovieDetails = React.lazy(() =>
  import('../../pages/MovieDetails/MovieDetails.jsx')
);
const Cast = React.lazy(() => import('../../pages/Cast/Cast.jsx'));
const Reviews = React.lazy(() => import('../../pages/Reviews/Reviews.jsx'));

export const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movieId" element={<MovieDetails />} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};*/
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('../../pages/Home/Home.jsx'));
const Movies = React.lazy(() => import('../../pages/Movies/Movies.jsx'));
const MovieDetails = React.lazy(() =>
  import('../../pages/MovieDetails/MovieDetails.jsx')
);
const Cast = React.lazy(() => import('../../pages/Cast/Cast.jsx'));
const Reviews = React.lazy(() => import('../../pages/Reviews/Reviews.jsx'));

export const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
