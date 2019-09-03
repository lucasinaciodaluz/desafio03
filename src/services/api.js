import axios from "axios";

const api = axios.create({
  baseURL: "https://fresh-falcon-12.localtunnel.me"
});

export default api;
