import React from "react";
import { StatusBar } from "expo-status-bar";

// Routes
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

// Contexts
import { useAuth } from "../context/auth";

function Routes() {
  const { signed } = useAuth();

  return signed ? (
    <>
      <AppRoutes />
      <StatusBar style="auto" />
    </>
  ) : (
    <>
      <AuthRoutes />
      <StatusBar style="light" />
    </>
  );
}

export default Routes;
