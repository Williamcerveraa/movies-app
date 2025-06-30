import { useQuery } from '@tanstack/react-query';
import { getSerieByIdAction } from '../../core/actions/serie/get-serie-by-id.action';
import { getSerieCastAction } from '../../core/actions/serie/get-serie-cast.action';

export const useSerie = (id: number) => {
  const SerieQuery = useQuery({
    queryKey: ['serie', id],
    queryFn: () => getSerieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hrs
  });

  const castSerieQuery = useQuery({
    queryKey: ['serie', id, 'cast'],
    queryFn: () => getSerieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    SerieQuery,
    castSerieQuery,
  };
};