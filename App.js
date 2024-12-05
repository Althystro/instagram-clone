import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GluestackUIProvider, Icon } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

import MainNav from "./navigation/MainNav";
import Camera from "./Camera";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={MainNav}
            options={({ navigation }) => ({
              headerShown: false,

              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Camera")}
                  style={{ marginRight: 15 }}
                >
                  <Ionicons name="camera-outline" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          {/* <Stack.Screen name="Camera" component={Camera} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
