
import { MovieDBSeriesResponse } from '../../../infrastructure/interfaces/moviedb-series.response';
import { SeriesMapper } from '../../../infrastructure/mappers/series.mapper';
import { serieApi } from '../../api/serie-api';

export const onAirActionSerie = async () => {
  try {
    const { data } = await serieApi.get<MovieDBSeriesResponse>('/on_the_air');

    // console.log(JSON.stringify(data, null, 2));
    const series = data.results.map(SeriesMapper.fromTheMovieDBToSeries);

    return series;
  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
};