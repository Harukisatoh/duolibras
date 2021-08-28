import axios from "axios";

const api = axios.create({
  baseURL: "https://duolibras-backend.loca.lt",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    let errorObject = { code: "unknown-error", message: "Algo deu errado :c" };

    if (error.response) {
      // Request made and server responded
      errorObject = error.response.data.data;
    }

    return Promise.reject(errorObject);
  }
);

export default api;
