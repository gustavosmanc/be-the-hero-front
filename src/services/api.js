import axios from "axios";

const api = axios.create({
  baseURL: "https://gsmancuzo-be-the-hero.herokuapp.com"
});

export default api;
