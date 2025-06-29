import { useQuery } from '@tanstack/react-query';
import { getMovieCastAction } from '../../core/actions/movie/get-movie-cast.action';
import { getSerieByIdAction } from '../../core/actions/serie/get-serie-by-id.action';

export const useSerie = (id: number) => {
  const SerieQuery = useQuery({
    queryKey: ['serie', id],
    queryFn: () => getSerieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hrs
  });

  const castQuery = useQuery({
    queryKey: ['movie', id, 'cast'],
    queryFn: () => getMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    SerieQuery,
    castQuery,
  };
};