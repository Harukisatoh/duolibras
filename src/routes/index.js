import React from "react";
import { StatusBar } from "expo-status-bar";

import AuthRoutes from "./auth.routes";

function Routes() {
  return (
    <>
      <AuthRoutes />
      <StatusBar style="light" />
    </>
  );
}

export default Routes;
