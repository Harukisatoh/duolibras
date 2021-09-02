import React from "react";
import { StatusBar } from "expo-status-bar";

// Routes
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

// Contexts
import { useAuth } from "../contexts/auth";
import { useTheme } from "../contexts/theme";

function Routes() {
  const { theme } = useTheme();
  const { signed } = useAuth();

  return signed ? (
    <>
      <AppRoutes />
      <StatusBar style="auto" style={theme.colors.statusBar} />
    </>
  ) : (
    <>
      <AuthRoutes />
      <StatusBar style="light" />
    </>
  );
}

export default Routes;
