/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchMoviesApi } from '../../api/omdbApi';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ searchTerm, page }, { rejectWithValue }) => {
    try {
      const data = await searchMoviesApi(searchTerm, page);

      if (data.Response === 'False') {
        return rejectWithValue(data.Error || 'No movies found');
      }

      return {
        movies: data.Search || [],
        totalResults: Number(data.totalResults) || 0,
        page,
      };
    } catch (error) {
      return rejectWithValue('Failed to fetch movies');
    }
  }
);

const initialState = {
  movies: [],
  loading: false,
  error: null,
  searchTerm: '',
  page: 1,
  totalResults: 0,
  watchlist: [],
  hasMore: true,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,

  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.page = 1;
      state.movies = [];

      state.hasMore = true;
    },
    addToWatchlist(state, action) {
      const exists = state.watchlist.find(
        (m) => m.imdbID === action.payload.imdbID
      );

      if (!exists) {
        state.watchlist.push({
          ...action.payload,
          watched: false,
        });
      }
    },
    removeFromWatchlist(state, action) {
      state.watchlist = state.watchlist.filter(
        (movie) => movie.imdbID !== action.payload
      );
    },
    toggleWatched(state, action) {
      const movie = state.watchlist.find((m) => m.imdbID === action.payload);

      if (movie) {
        movie.watched = !movie.watched;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;

        const newMovies = action.payload.movies;

        if (action.payload.page === 1) {
          state.movies = newMovies;
        } else {
          state.movies = [...state.movies, ...newMovies];
        }

        state.page = action.payload.page;
        state.totalResults = action.payload.totalResults;

        state.hasMore = state.movies.length < state.totalResults;
      })

      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const {
  setSearchTerm,
  addToWatchlist,
  removeFromWatchlist,
  toggleWatched,
} = moviesSlice.actions;

export default moviesSlice.reducer;
