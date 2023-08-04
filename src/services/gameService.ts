import createHTTPService from "./httpSerive";
export interface IGame {
  id: number;
  name: string;
}
export interface IFetchGamesResonse {
  count: number;
  results: IGame[];
}

const gameService = createHTTPService("/games");
export default gameService;
