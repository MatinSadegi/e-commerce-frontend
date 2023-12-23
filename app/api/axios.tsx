import axios from "axios";
const BASE_URL = "http://localhost:5000/api";

const app = axios.create({ baseURL: BASE_URL, withCredentials: true });
app.interceptors.request.use(
  (res) => res,
//   (err) => Promise.reject(err)
  (err) => {console.log(err)}
);
app.interceptors.response.use(
  (res) => res,
  (err) => {console.log(err.config)}
);
