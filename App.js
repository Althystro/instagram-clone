import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GluestackUIProvider, Icon } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Ionicons } from "@expo/vector-icons";
import FeedScreen from "./screens/FeedSection";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Feed") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person-outline";
              }

              return (
                <Icon as={Ionicons} name={iconName} size={size} color={color} />
              );
            },
          })}
        >
          <Tab.Screen name="Feed" component={FeedScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
