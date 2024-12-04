import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileScreen from "../../screens/ProfileScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ProfileNav = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNav;

const styles = StyleSheet.create({});
