import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "830864e5b7f84081b2f577f0171833c9",
    // key:process.env.REACT_APP_API_KEY
  },
});

export { CanceledError };
