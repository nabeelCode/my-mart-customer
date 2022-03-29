import axios from "axios";

const instance = axios.create({
  baseURL: "http://54.167.53.18:9001/"
});

export default instance;