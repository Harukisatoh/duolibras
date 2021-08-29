import * as Facebook from "expo-facebook";

// Services
import ApiService from "../services/ApiService";

// Configs
import configs from "../configs";

export default class AuthService {
  static async authWithFacebook() {
    try {
      const { type, token } = await this.getFacebookToken();

      if (type === "success" && token) {
        return ApiService.post("/auth/facebook", { token });
      }
    } catch (error) {
      throw error.message;
    }
  }

  static async getFacebookToken() {
    try {
      await Facebook.initializeAsync({
        appId: configs.facebook.appId,
      });

      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });

      return { type, token };
    } catch (error) {
      throw error.message;
    }
  }

  static async signUpWithEmail(email, password) {
    return ApiService.post("/auth/email/sign-up", { email, password });
  }

  static async signInWithEmail(email, password) {
    return ApiService.post("/auth/email/sign-in", {
      email,
      password,
    });
  }

  static async resetEmailPassword(email) {
    return ApiService.post("/auth/email/reset-password", { email });
  }
}
