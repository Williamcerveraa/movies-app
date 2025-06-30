import { Cast } from '../interfaces/cast';
import { MovieDBSerieCast } from '../interfaces/moviedb-credits-series.response';

export class CastSerieMapper {
  static fromMovieDBCastToEntity(actor: MovieDBSerieCast): Cast {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? 'No character',
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png', // esto en caso de no tener imagen
    };
  }
}