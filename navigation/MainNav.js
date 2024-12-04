import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons";
import FeedNav from "./FeedNav/FeedNav";
import ProfileNav from "./ProfileNav/ProfileNav";
const Tab = createBottomTabNavigator();

const MainNav = () => {
  return (
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
      <Tab.Screen name="Feed" component={FeedNav} />
      <Tab.Screen name="Profile" component={ProfileNav} />
    </Tab.Navigator>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
