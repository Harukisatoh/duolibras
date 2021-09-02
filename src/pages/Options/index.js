import React, { useState, useEffect, useRef } from "react";
import { View, Text, Switch } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { useAuth } from "../../contexts/auth";
import { useTheme } from "../../contexts/theme";

import styles from "./styles";
import Header from "../../components/Header";
// import Database from "../../services/Database";

function Options() {
  const { signOut, user } = useAuth();
  const { theme, toggleTheme, isDarkThemeOn } = useTheme();
  const [darkThemePurchased, setDarkThemePurchased] = useState(false);

  const componentIsMounted = useRef(true);
  useEffect(() => {
    // Database.getUserInventory(user.uid, (inventory) => {
    //   if (componentIsMounted.current) {
    //     setDarkThemePurchased(inventory["darkTheme"].purchased);
    //   }
    // });

    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  function handleSignOut() {
    signOut();
  }

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Header title="Opções" />
      <View style={styles.optionsContainer}>
        {darkThemePurchased && (
          <View style={styles.darkThemeContainer}>
            <Text
              style={[styles.darkThemeTitle, { color: theme.colors.lightText }]}
            >
              Tema escuro
            </Text>
            <Switch
              trackColor={{
                false: theme.colors.themeSwitchTrackOff,
                true: theme.colors.themeSwitchTrackOn,
              }}
              thumbColor={
                isDarkThemeOn
                  ? theme.colors.themeSwitchThumbOn
                  : theme.colors.themeSwitchThumbOff
              }
              onValueChange={toggleTheme}
              value={isDarkThemeOn}
            />
          </View>
        )}
        <View>
          <RectButton
            rippleColor={theme.colors.signOutButtonRipple}
            style={[
              styles.signOutButton,
              { backgroundColor: theme.colors.signOutButtonBackground },
            ]}
            onPress={handleSignOut}
            title="Sign Out"
          >
            <Text
              style={[
                styles.signOutText,
                { color: theme.colors.signOutButtonText },
              ]}
            >
              Logout
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default Options;
