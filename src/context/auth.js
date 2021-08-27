import React, { createContext, useState, useContext } from "react";

import AuthService from "../services/Auth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function signInWithEmail(email, password) {
    setLoading(true);

    const userInfo = await AuthService.loginWithEmail(email, password);

    setUser(userInfo);
    setLoading(false);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signInWithEmail,
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
