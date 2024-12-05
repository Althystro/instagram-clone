import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { Button } from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons"; // Importing icons

const Camera = () => {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  function capturePhoto() {
    // Implement capture functionality here
    console.log("Capture photo");
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <TouchableOpacity
          style={styles.flipButton}
          onPress={toggleCameraFacing}
        >
          <Ionicons name="camera-reverse-outline" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.captureButtonContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={capturePhoto}>
            <View style={styles.innerCaptureButton} />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
    color: "white",
  },
  camera: {
    flex: 1,
    justifyContent: "space-between",
  },
  flipButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1,
    paddingTop: 15,
  },
  captureButtonContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },
  captureButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 7,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
  },
  //   innerCaptureButton: {
  //     width: 90,
  //     height: 90,
  //     borderRadius: 45,
  //     backgroundColor: "rgba(255,0,0,0.5)", // Transparent red center
  //   },
});
