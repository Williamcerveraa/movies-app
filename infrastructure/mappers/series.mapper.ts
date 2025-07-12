
import { MovieDBSeriesResponse, Result } from '../interfaces/moviedb-series.response';
import { CompleteSerie, Serie } from '../interfaces/serie.interface';

export class SeriesMapper {
  static fromTheMovieDBToSeries = (series: Result): Serie => {
    return {
  id: series.id,
  name: series.name,
  description: series.overview,
  releaseDate: series.first_air_date,
  rating: series.vote_average,
  poster: `https://image.tmdb.org/t/p/w500${series.poster_path}`,
  backdrop: `https://image.tmdb.org/t/p/w500${series.poster_path}`
};
  };

//   static fromTheMovieDBToCompleteSeries = (
//     series: MovieDBSeriesResponse
//   ): CompleteSerie => {
//     return {
//   genres: [],
//   duration: series.,
//   budget: 0,
//   originalTitle: '',
//   productionCompanies: [],
//   last_air_date: undefined,
//   id: 0,
//   name: '',
//   description: '',
//   releaseDate: undefined,
//   rating: 0,
//   poster: '',
//   backdrop: ''
// };
//   };
}