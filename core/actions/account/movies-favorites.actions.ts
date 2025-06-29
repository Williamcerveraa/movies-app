import { Movie } from "../../../infrastructure/interfaces/movie.interface";
import { MoviesFavoritesResponse, Result } from "../../../infrastructure/interfaces/moviedb-favorites-movies.response";
import { MoviesFavoritesMapper } from "../../../infrastructure/mappers/movies-favorites.mappers";
import { favoritesMovieApi } from "../../api/movie-api";

interface AccountDetails {
  username: string;
  password: string;
  request_token: string;
}
export const createRequestToken = async () => {
  const response = await favoritesMovieApi.get<any>(
    "/authentication/token/new"
  );
  return response.data.request_token;
};

export const validateWithLogin = async ({
  username,
  password,
  request_token,
}: AccountDetails) => {
  const response = await favoritesMovieApi.post(
    "/authentication/token/validate_with_login",
    {
      username,
      password,
      request_token,
    }
  );
  return response.data.request_token;
};

export const createSession = async (validatedToken : string) => {
  const response = await favoritesMovieApi.post("/authentication/session/new", {
    request_token: validatedToken,
  });
  return response.data.session_id;
};

export const getAccountDetails = async (session_id : string) => {
  const response = await favoritesMovieApi.get("/account", {
    params: { session_id },
  });
  return response.data.id;
};

export const favoritesMoviesAction = async (
  account_id : string,
  session_id : string
) : Promise<Movie[]> => {
  try {
    const { data } = await favoritesMovieApi.get<MoviesFavoritesResponse>(
      `/account/${account_id}/favorite/movies`,
      {
        params: { session_id },
      }
    );

    // console.log(JSON.stringify(data, null, 2));
    const movies = data.results.map(
      MoviesFavoritesMapper.fromTheMovieDBToMoviesFavorites
    );

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};

export const favoritesSeriesAction = async (
  account_id : string,
  session_id : string
) : Promise<Movie[]> => {
  try {
    const { data } = await favoritesMovieApi.get<MoviesFavoritesResponse>(
      `/account/${account_id}/favorite/tv`,
      {
        params: { session_id },
      }
    );

    // console.log(JSON.stringify(data, null, 2));
    const movies = data.results.map(
      MoviesFavoritesMapper.fromTheMovieDBToMoviesFavorites
    );

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};

export const loginAndFetchFavorites = async (
  username: string,
  password: string
): Promise<{ session_id: string; account_id: number; favorites: Movie[], favoritesSeries: Movie[] }> => {
  const token = await createRequestToken();
  const validatedToken = await validateWithLogin({ username, password, request_token: token });
  const session_id = await createSession(validatedToken);
  const account_id = await getAccountDetails(session_id);
  const favorites = await favoritesMoviesAction(account_id, session_id);
  const favoritesSeries = await favoritesSeriesAction(account_id, session_id);

  return { session_id, account_id, favorites,favoritesSeries  };
};