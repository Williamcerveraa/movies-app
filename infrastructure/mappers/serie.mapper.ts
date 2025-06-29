import { Result } from '../interfaces/moviedb-favorites-movies.response';
import { MovieDBSerieResponse } from '../interfaces/moviedb-serie.response';
import { CompleteSerie, Serie } from '../interfaces/serie.interface';

export class SerieMapper {
  static fromTheMovieDBToSerie = (serie: Result): Serie => {
    return {
      id: serie.id,
      title: serie.title,
      name: serie.name,
      description: serie.overview,
      releaseDate: new Date(serie.release_date),
      poster: `https://image.tmdb.org/t/p/w500${serie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${serie.backdrop_path}`,
      rating: serie.vote_average,
    };
  };

  static fromTheMovieDBToCompleteSerie = (
    serie: MovieDBSerieResponse
  ): CompleteSerie => {
    return {
    id: serie.id,
    description: serie.overview,
    poster: `https://image.tmdb.org/t/p/w500${serie.poster_path}`,
    backdrop: `https://image.tmdb.org/t/p/w500${serie.backdrop_path}`,
    rating: serie.vote_average,
    genres: serie.genres.map((g) => g.name),
    originalTitle: serie.original_name,
    productionCompanies: serie.production_companies.map((c) => c.name),
    duration: 0,
    budget: 0,
    last_air_date: serie.last_air_date,
    name: serie.name,
    releaseDate: serie.first_air_date,
};
  };
}