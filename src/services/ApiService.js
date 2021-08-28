import axios from "axios";

// Utils
import getUserFriendlyFirebaseErrorMessage from "../utils/getUserFriendlyFirebaseErrorMessage";

const api = axios.create({
  baseURL: "https://duolibras-backend.loca.lt",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    let errorObject;

    if (error.response) {
      // Request made and server responded
      const firebaseError = error.response.data.data;
      errorObject = {
        code: firebaseError.code || "unknown-error",
        message: getUserFriendlyFirebaseErrorMessage(firebaseError),
      };
    }

    return Promise.reject(errorObject);
  }
);

export default api;
