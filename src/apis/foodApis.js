import axios from "axios";

export default axios.create({
  baseURL: "https://menu-assistant-api.herokuapp.com/dish/match",
});
