import { MovieDBSerieResponse } from "../../../infrastructure/interfaces/moviedb-serie.response";
import { CompleteSerie } from "../../../infrastructure/interfaces/serie.interface";
import { SerieMapper } from "../../../infrastructure/mappers/serie.mapper";
import { serieApi } from "../../api/serie-api";


export const getSerieByIdAction = async (
  id: number | string
) : Promise <CompleteSerie> => {
  try {
    const { data } = await serieApi.get<MovieDBSerieResponse>(`/${id}`);

    console.log('Película - HTTP cargada');
    console.log(data);
    

    return SerieMapper.fromTheMovieDBToCompleteSerie(data)
  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
};