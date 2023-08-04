import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
interface IGame {
  id: number;
  name: string;
}
interface IFetchGamesResonse {
  count: number;
  results: IGame[];
}

const GameGrid = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, seterror] = useState();

  useEffect(() => {
    apiClient
      .get<IFetchGamesResonse>("/games")
      .then((response) => setGames(response.data.results))
      .catch((error) => seterror(error.message));
  }, []);
  return (
    <>
      {error && <p> {error}</p>}
      <ul>
        {games.map((game: IGame) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
