import {useQuery } from "@tanstack/react-query";
import { favoritesMoviesAction, favoritesSeriesAction } from "../../core/actions/account/movies-favorites.actions";

export const useFavoritesMovies = ({
  session_id,
  account_id,
}: {
  session_id: string | null;
  account_id: string | null;
}) => {
  // Queries
  const moviesFavoritesQuery = useQuery({
    queryKey: ["movies-favorites", account_id],
    queryFn: () => favoritesMoviesAction(account_id!, session_id!),
    enabled: !!session_id && !!account_id,
    staleTime: 1000 * 60, // 24horas
    //refetchOnWindowFocus: true
  });

  const seriesFavoritesQuery = useQuery({
    queryKey: ["series-favorites", account_id],
    queryFn: () => favoritesSeriesAction(account_id!, session_id!),
    enabled: !!session_id && !!account_id,
    staleTime: 1000 * 60 * 60 * 24, // 24horas
  });


  return {
    moviesFavoritesQuery,
    seriesFavoritesQuery
  };
};
