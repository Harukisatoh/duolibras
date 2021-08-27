import ApiService from "../services/ApiService";

export default class AuthService {
  static async loginWithEmail(email, password) {
    return ApiService.post("/login/email", {
      email,
      password,
    });
  }
}
