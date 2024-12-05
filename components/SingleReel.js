import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { Ionicons } from "@expo/vector-icons";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export default function SingleReel({ item }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const player = useVideoPlayer(item.video, (player) => {
    player.loop = true;
    player.play();
  });

  useEffect(() => {
    player.muted = isMuted;
  }, [isMuted]);

  const togglePlayPause = () => {
    if (player.playing) {
      player.pause();
    } else {
      player.play();
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.videoContainer} onPress={togglePlayPause}>
        <VideoView style={styles.video} player={player} resizeMode="cover" />
      </Pressable>
      <View style={styles.overlay}>
        <View style={styles.rightControls}>
          <TouchableOpacity style={styles.controlButton} onPress={toggleLike}>
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={28}
              color={isLiked ? "red" : "white"}
            />
            <Text style={styles.controlText}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Ionicons name="chatbubble-outline" size={28} color="white" />
            <Text style={styles.controlText}>{item.comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Ionicons name="paper-plane-outline" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomControls}>
          <View style={styles.userInfo}>
            <Image source={{ uri: item.userAvatar }} style={styles.avatar} />
            <Text style={styles.username}>{item.username}</Text>
          </View>
          <Text style={styles.caption}>{item.caption}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.muteButton} onPress={toggleMute}>
        <Ionicons
          name={isMuted ? "volume-mute" : "volume-medium"}
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  },
  videoContainer: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-between",
    padding: 20,
  },
  rightControls: {
    position: "absolute",
    right: 10,
    bottom: 100,
    alignItems: "center",
  },
  controlButton: {
    alignItems: "center",
    marginBottom: 50,
  },
  controlText: {
    color: "white",
    marginTop: 5,
  },
  bottomControls: {
    position: "absolute",
    left: 10,
    bottom: 20,
    right: 60,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    color: "white",
    fontWeight: "bold",
  },
  caption: {
    color: "white",
  },
  muteButton: {
    position: "absolute",
    top: 40,
    right: 20,
  },
});
