import { MovieDBCreditsSeriesResponse } from "../../../infrastructure/interfaces/moviedb-credits-series.response";
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";
import { serieApi } from "../../api/serie-api";


export const getSerieCastAction = async (serieId: number) => {
  try {
    const { data } = await serieApi.get<MovieDBCreditsSeriesResponse>(
      `/${serieId}/credits`
    );

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw 'Cant load cast by id';
  }
};