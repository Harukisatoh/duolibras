import ApiService from "../services/ApiService";

export default class AuthService {
  static async signUpWithEmail(email, password) {
    return ApiService.post("/auth/sign-up/email", { email, password });
  }

  static async signInWithEmail(email, password) {
    return ApiService.post("/auth/sign-in/email", {
      email,
      password,
    });
  }

  static async resetEmailPassword(email) {
    return ApiService.post("/auth/reset-password", { email });
  }
}
