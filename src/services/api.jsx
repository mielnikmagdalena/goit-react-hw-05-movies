const API_KEY = '904ef6f007cb228dd6ac008b3d697336';

// Funkcja do wykonania zapytania GET na podstawie podanego endpointu
const fetchData = async endpoint => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Funkcja do pobierania listy najpopularniejszych filmów
export const getTrendingMovies = async () => {
  return fetchData('/trending/movie/day');
};

// Funkcja do wyszukiwania filmów po słowie kluczowym
export const searchMovies = async query => {
  return fetchData(`/search/movie?query=${query}`);
};

// Funkcja do pobierania szczegółowych informacji o filmie na podstawie movieId
export const getMovieDetails = async movieId => {
  return fetchData(`/movie/${movieId}`);
};

// Funkcja do pobierania informacji o zespole aktorskim na podstawie movieId
export const getMovieCredits = async movieId => {
  return fetchData(`/movie/${movieId}/credits`);
};

// Funkcja do pobierania recenzji filmu na podstawie movieId
export const getMovieReviews = async movieId => {
  return fetchData(`/movie/${movieId}/reviews`);
};
