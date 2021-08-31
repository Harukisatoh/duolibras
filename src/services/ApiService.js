import axios from "axios";

// Env vars
import { API_HOST, API_PORT } from "@env";

// Utils
import getUserFriendlyFirebaseErrorMessage from "../utils/getUserFriendlyFirebaseErrorMessage";

const api = axios.create({
  baseURL: `${API_HOST}:${API_PORT}`,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const firebaseError = error?.response?.data?.data;
    const errorObject = {
      code: firebaseError?.code || "unknown-error",
      message: getUserFriendlyFirebaseErrorMessage(firebaseError),
    };

    return Promise.reject(errorObject);
  }
);

export default api;
