import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FeedSection from "../../screens/FeedSection";
import ProfileDetailScreen from "../../screens/ProfileDetailScreen";

const Stack = createNativeStackNavigator();

const FeedNav = () => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={FeedSection}
        title=""
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileDetails"
        component={ProfileDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FeedNav;

const styles = StyleSheet.create({});
