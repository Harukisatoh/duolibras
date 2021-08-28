import React, { createContext, useState, useContext } from "react";

import AuthService from "../services/Auth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function signInWithEmail(email, password) {
    const userInfo = await AuthService.loginWithEmail(email, password);
    setUser(userInfo);
  }

  async function resetPassword(email) {
    await AuthService.resetPassword(email);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signInWithEmail,
        resetPassword,
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
