import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeTabs from "./homeTabs.routes";

const AppStack = createStackNavigator();

function AppRoutes() {
  return (
    <>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={HomeTabs} />
      </AppStack.Navigator>
    </>
  );
}

export default AppRoutes;
