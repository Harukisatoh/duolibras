import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "../pages/Profile";

const AppTabs = createBottomTabNavigator();

function HomeTabs() {
  return (
    <AppTabs.Navigator>
      <AppTabs.Screen name="Profile" component={Profile} />
    </AppTabs.Navigator>
  );
}

export default HomeTabs;
