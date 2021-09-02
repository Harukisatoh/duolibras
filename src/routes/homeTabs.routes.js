import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Routes
import Profile from "../pages/Profile";
import Options from "../pages/Options";

// Contexts
import { useTheme } from "../contexts/theme";

// Styles
import { SimpleLineIcons, Feather } from "@expo/vector-icons";

const AppTabs = createBottomTabNavigator();

function HomeTabs() {
  const { theme } = useTheme();

  return (
    <AppTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.tabIconActive,
        tabBarInactiveTintColor: theme.colors.tabIconInactive,
        tabBarActiveBackgroundColor: theme.colors.tabButtonActiveBackground,
        tabBarInactiveBackgroundColor: theme.colors.tabButtonInactiveBackground,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: theme.colors.tabButtonDivision,
          borderTopWidth: 2,
        },
      }}
    >
      <AppTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Feather name="user" size={focused ? 25 : 20} color={color} />
          ),
        }}
      />
      <AppTabs.Screen
        name="Options"
        component={Options}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <SimpleLineIcons
              name="options"
              size={focused ? 25 : 20}
              color={color}
            />
          ),
        }}
      />
    </AppTabs.Navigator>
  );
}

export default HomeTabs;
