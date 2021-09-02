import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import {
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";

import { AuthProvider } from "./src/contexts/auth";
import { ThemeProvider } from "./src/contexts/theme";

import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
