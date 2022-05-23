import axios from "axios";

const instance = axios.create({
  baseURL: "http://54.167.53.18:9001/"
  // baseURL: "http://192.168.43.15:9001/"
});

export default instance;