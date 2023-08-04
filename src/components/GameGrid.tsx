import useGames from "../hooks/useGames";

import { IGame } from "./../services/gameService";

const GameGrid = () => {
  const { games, error } = useGames();

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
