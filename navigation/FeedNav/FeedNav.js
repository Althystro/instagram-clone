import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import FeedSection from "../../screens/FeedSection";
import ProfileDetailScreen from "../../screens/ProfileDetailScreen";
import Camera from "../../Camera";
import { ScrollView } from "@gluestack-ui/themed";

const Stack = createNativeStackNavigator();

const FeedNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerTransparent: true,
        headerStyle: {
          shadowColor: "transparent",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Feed"
        component={FeedSection}
        options={({ navigation }) => ({
          //   headerMode: screen,
          headerShown: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Camera")}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="camera-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Profile Details" component={ProfileDetailScreen} />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: "",
        })}
      />
    </Stack.Navigator>
  );
};

export default FeedNav;

const styles = StyleSheet.create({});
