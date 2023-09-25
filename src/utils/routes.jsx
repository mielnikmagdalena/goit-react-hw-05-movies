import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import Cast from './components/Cast';
import Reviews from './components/Reviews';
import { Routes, Route } from 'react-router-dom';
const AppRoutes = () => {
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

export default AppRoutes;
