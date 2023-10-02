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
