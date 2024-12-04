import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { VStack, HStack, Text, Image } from "@gluestack-ui/themed";
import Icon from "react-native-vector-icons/Ionicons"; // Import Ionicons
import profiles from "../data/profiles";

const FeedScreen = ({ navigation }) => {
  const renderPostItem = ({ item }) => (
    <VStack space="md" p="$4">
      <HStack alignItems="center" justifyContent="space-between">
        <HStack alignItems="center">
          <Image
            source={{ uri: item.profilePicture }}
            width="$8"
            height="$8"
            borderRadius="$full"
            alt="User Avatar"
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProfileDetails", { username: item.username })
            }
          >
            <Text fontSize="$lg" fontWeight="$bold" ml="$2">
              {item.username}
            </Text>
          </TouchableOpacity>
        </HStack>
        <Icon name="ellipsis-horizontal" size={24} color="black" />
      </HStack>

      <Image
        source={{ uri: item.firstPost.imageUrl }}
        width="100%"
        height="$64"
        alt={`First post of ${item.username}`}
      />

      <HStack justifyContent="space-between" mt="$2">
        <HStack space="$2" alignItems="center">
          <TouchableOpacity>
            <Icon name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text>{item.firstPost.likes}</Text>
          <TouchableOpacity>
            <Icon name="chatbubble-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text>{item.firstPost.comments}</Text>
          <TouchableOpacity>
            <Icon name="paper-plane-outline" size={24} color="black" />
          </TouchableOpacity>
        </HStack>
        <TouchableOpacity>
          <Icon name="bookmark-outline" size={24} color="black" />
        </TouchableOpacity>
      </HStack>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProfileDetails", { username: item.username })
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
    firstPost: profile.posts[0],
  }));

  return (
    <FlatList
      data={firstPosts}
      renderItem={renderPostItem}
      keyExtractor={(item) => item.username}
    />
  );
};

export default FeedScreen;
