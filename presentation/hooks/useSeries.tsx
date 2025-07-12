import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { nowPlayingActionSerie } from '../../core/actions/series/now-playing-serie.actions';
import { onAirActionSerie } from '../../core/actions/series/on-air-serie.actions';
import { popularActionSerie } from '../../core/actions/series/popular-serie.actions';
import { topRatedSeriesAction } from '../../core/actions/series/top-rated-serie.actions';

export const useSeries = () => {
  // Queries
  const airingTodaygQuery = useQuery({
    queryKey: ['series', 'airingToday'],
    queryFn: nowPlayingActionSerie,
    staleTime: 1000 * 60 * 60 * 24, // 24horas
  });

  const onAirQuery = useQuery({
    queryKey: ['series', 'onAir'],
    queryFn: onAirActionSerie,
    staleTime: 1000 * 60 * 60 * 24, // 24horas
  });

  const topRatedQuery = useInfiniteQuery({
    queryKey: ['series', 'top-rated'],
    queryFn: ({pageParam}) => {
      console.log(pageParam);
      
      return topRatedSeriesAction({page :pageParam})
    },
    initialPageParam : 1,
    staleTime: 1000 * 60 * 60 * 24, // 24horas
    getNextPageParam : (lastPage,pages)  => pages.length + 1
  });

  const popularQuery = useQuery({
    queryKey: ['series', 'popular'],
    queryFn: popularActionSerie,
    staleTime: 1000 * 60 * 60 * 24, // 24horas
  });

  return {
    airingTodaygQuery,
    onAirQuery,
    topRatedQuery,
    popularQuery,
  };
};