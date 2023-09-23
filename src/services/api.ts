import axios from "axios";

const apiCaller = axios.create({
  baseURL: "http://localhost:3003/api",
});

export default apiCaller;
