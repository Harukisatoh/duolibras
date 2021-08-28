import React, { createContext, useState, useContext } from "react";

import AuthService from "../services/Auth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function signUpWithEmail(email, password) {
    const userInfo = await AuthService.signUpWithEmail(email, password);
    setUser(userInfo);
  }

  async function signInWithEmail(email, password) {
    const userInfo = await AuthService.signInWithEmail(email, password);
    setUser(userInfo);
  }

  async function resetEmailPassword(email) {
    await AuthService.resetEmailPassword(email);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signUpWithEmail,
        signInWithEmail,
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
