import { useQuery } from '@tanstack/react-query';
import { getMovieCastAction } from '../../core/actions/movie/get-movie-cast.action';
import { getMovieByIdAction } from '../../core/actions/movie/get-movie-by-id.action';


export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hrs
  });

  const castQuery = useQuery({
    queryKey: ['movie', id, 'cast'],
    queryFn: () => getMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    movieQuery,
    castQuery,
  };
};