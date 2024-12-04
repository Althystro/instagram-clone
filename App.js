import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GluestackUIProvider, Icon } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

import MainNav from "./navigation/MainNav";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
