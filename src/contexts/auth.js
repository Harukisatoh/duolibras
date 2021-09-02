import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

// Services
import AuthService from "../services/AuthService";

const AuthContext = createContext({});

const USER_INFO_STORAGE_KEY = "@user-info";
const USER_TOKENS_SECURE_STORE_KEY = "user-tokens";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentLoggedUser();
  }, []);

  async function authWithFacebook() {
    const {
      uid,
      displayName: name,
      photoURL,
      stsTokenManager: tokens, // User's firebase access token/refresh token/expiration time
    } = await AuthService.authWithFacebook().then(
      (response) => response.data.data?.user
    );

    const user = {
      uid,
      name,
      photoURL,
    };

    setUser(user);
    saveUserInAsyncStorage(user);
    saveUserTokensInSecureStore(tokens);
  }

  async function signUpWithEmail(email, password) {
    const userInfo = await AuthService.signUpWithEmail(email, password);
    setUser(userInfo);
  }

  async function signInWithEmail(email, password) {
    const userInfo = await AuthService.signInWithEmail(email, password);
    setUser(userInfo);
  }

  async function signOut() {
    await AuthService.signOut();

    setUser(null);
    await AsyncStorage.removeItem(USER_INFO_STORAGE_KEY);
    await SecureStore.deleteItemAsync(USER_TOKENS_SECURE_STORE_KEY);
  }

  async function resetEmailPassword(email) {
    await AuthService.resetEmailPassword(email);
  }

  async function getCurrentLoggedUser() {
    const loggedUser = await getUserFromAsyncStorage();

    if (loggedUser) {
      setUser(loggedUser);
    }
  }

  async function getUserFromAsyncStorage() {
    try {
      const stringifiedUser = await AsyncStorage.getItem(USER_INFO_STORAGE_KEY);

      return stringifiedUser !== null ? JSON.parse(stringifiedUser) : null;
    } catch (error) {
      console.log(error);
    }
  }

  async function saveUserInAsyncStorage(user) {
    try {
      const stringifiedUser = JSON.stringify(user);

      await AsyncStorage.setItem(USER_INFO_STORAGE_KEY, stringifiedUser);
    } catch (error) {
      console.log(error);
    }
  }

  async function saveUserTokensInSecureStore(tokens) {
    const stringifiedTokens = JSON.stringify(tokens);

    await SecureStore.setItemAsync(
      USER_TOKENS_SECURE_STORE_KEY,
      stringifiedTokens
    );
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        authWithFacebook,
        signUpWithEmail,
        signInWithEmail,
        signOut,
        resetEmailPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
