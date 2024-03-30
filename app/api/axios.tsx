import axios from "axios";
const BASE_URL = "https://e-commerce-backend-cdwe.onrender.com/api";

export const app = axios.create({ baseURL: BASE_URL, withCredentials: true });


app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);
app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err?.config;
    if (err.response?.status === 401 && !originalConfig?._retry) {
      originalConfig._retry = true;
      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh`, {
          withCredentials: true,
        }); 
     
        if (data) return axios(originalConfig);
      } catch (error) {
      return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);
