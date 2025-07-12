import { MovieDBSeriesResponse } from "../../../infrastructure/interfaces/moviedb-series.response";
import { SeriesMapper } from "../../../infrastructure/mappers/series.mapper";
import { serieApi } from "../../api/serie-api";

interface Options {
  page?: number;
  limit?: number;
}


export const topRatedSeriesAction = async ({page = 1,limit = 10}: Options) => {
  try {
    const { data } = await serieApi.get<MovieDBSeriesResponse>('/top_rated',{
      params :{
        page : page,
      }
    });

    // console.log(JSON.stringify(data, null, 2));
     const series = data.results.map(SeriesMapper.fromTheMovieDBToSeries);

    return series;
  } catch (error) {
    console.log(error);
    throw 'Cannot load top_rated movies';
  }
};