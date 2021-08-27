import axios from "axios";

const api = axios.create({
  baseURL: "https://duolibras-backend.loca.lt",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    let errorMessage = "Algo deu errado :c";

    if (error.response) {
      // Request made and server responded
      errorMessage = error.response.data.message;
    }

    return Promise.reject(errorMessage);
  }
);

export default api;
