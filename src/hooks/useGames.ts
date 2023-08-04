import { useEffect, useState } from "react";
import gameService, {
  IFetchGamesResonse,
  IGame,
} from "../services/gameService";

const useGames = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, seterror] = useState();

  useEffect(() => {
    const { request, cancel } = gameService.getAll<IFetchGamesResonse>();

    request
      .then((response) => setGames(response.data.results))
      .catch((error) => seterror(error.message));

    return () => cancel();
  }, []);

  return { games, error };
};

export default useGames;
