import { useEffect, useState } from "react";
import gameService, {
  IFetchGamesResonse,
  IGame,
} from "../services/gameService";
import { CanceledError } from "../services/apiClient";

const useGames = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, seterror] = useState();

  useEffect(() => {
    const { request, cancel } = gameService.getAll<IFetchGamesResonse>();

    request
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        seterror(error.message);
      });

    return () => cancel();
  }, []);

  return { games, error };
};

export default useGames;
