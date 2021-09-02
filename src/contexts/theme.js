import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Styles
import * as themes from "../themes";

const THEME_STORAGE_KEY = "@theme";
const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    loadThemeFromAsyncStorage();
  }, []);

  async function loadThemeFromAsyncStorage() {
    try {
      const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);

      if (savedTheme !== null) {
        setTheme(getThemeFromThemeName(savedTheme));
      }
    } catch (e) {
      console.log("Error loading theme: ", e);
    }
  }

  function getThemeFromThemeName() {
    if (theme === "dark") {
      return themes.dark;
    } else {
      return themes.light;
    }
  }

  function toggleTheme() {
    setTheme((theme) => {
      if (theme === themes.dark) {
        return themes.light;
      } else {
        return themes.dark;
      }
    });
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDarkThemeOn: theme === "dark",
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}
