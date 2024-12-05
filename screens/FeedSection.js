import React from "react";
import { FlatList, TouchableOpacity, View, StyleSheet } from "react-native";
import { VStack, HStack, Text, Image } from "@gluestack-ui/themed";
import Icon from "react-native-vector-icons/Ionicons"; // Import Ionicons
import profiles from "../data/profiles";

const FeedScreen = ({ navigation }) => {
  const renderPostItem = ({ item }) => (
    <VStack space="md">
      <HStack alignItems="center" justifyContent="space-between">
        <HStack alignItems="center" pl="$2">
          <Image
            source={
              item?.profilePicture
                ? { uri: item.profilePicture }
                : require("../assets/placeholder.png")
            }
            style={{ width: 40, height: 40, borderRadius: 20 }}
            alt="User Avatar"
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Profile Details", {
                username: item.username,
              })
            }
          >
            <Text fontSize="$lg" fontWeight="$bold" ml="$2">
              {item.username}
            </Text>
          </TouchableOpacity>
        </HStack>
        <Icon
          name="ellipsis-horizontal"
          size={24}
          color="black"
          style={{ paddingRight: 15 }}
        />
      </HStack>

      <Image
        source={
          item?.firstPost?.imageUrl
            ? { uri: item.firstPost.imageUrl }
            : require("../assets/placeholder.png")
        }
        style={{ width: "100%", height: 200 }}
        alt={`Post by ${item.username}`}
      />

      <HStack justifyContent="space-between" mt="$2">
        <HStack space="$2" alignItems="center">
          <TouchableOpacity>
            <Icon
              name="heart-outline"
              size={24}
              color="black"
              style={{ paddingLeft: 10 }}
            />
          </TouchableOpacity>
          <Text>{item.firstPost.likes}</Text>
          <TouchableOpacity>
            <Icon
              name="chatbubble-outline"
              size={24}
              color="black"
              style={{ paddingLeft: 10 }}
            />
          </TouchableOpacity>
          <Text>{item.firstPost.comments}</Text>
          <TouchableOpacity>
            <Icon
              name="paper-plane-outline"
              size={24}
              color="black"
              style={{ paddingLeft: 10 }}
            />
          </TouchableOpacity>
        </HStack>
        <TouchableOpacity>
          <Icon
            name="bookmark-outline"
            size={24}
            color="black"
            style={{ paddingRight: 10 }}
          />
        </TouchableOpacity>
      </HStack>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Profile Details", { username: item.username })
        }
      >
        <Text fontSize="$lg" fontWeight="$bold" ml="$2">
          {item.username}: <Text> {item.firstPost.caption}</Text>
        </Text>
      </TouchableOpacity>
    </VStack>
  );

  const firstPosts = profiles.map((profile) => ({
    username: profile.username,
    profilePicture: profile.profilePicture,
    firstPost: profile.posts[0],
  }));

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        <Icon name="camera-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Instagram</Text>
      <Text style={{ paddingRight: 20 }}></Text>
    </View>
  );

  return (
    <FlatList
      data={firstPosts}
      renderItem={renderPostItem}
      keyExtractor={(item) => item.username}
      ListHeaderComponent={renderHeader} // Add custom header here
    />
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
    paddingTop: 65,
    backgroundColor: "transparent", // Make header transparent
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
