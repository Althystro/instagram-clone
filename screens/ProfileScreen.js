import React from "react";
import { ScrollView, FlatList } from "react-native";
import {
  Box,
  VStack,
  HStack,
  Text,
  Image,
  Pressable,
} from "@gluestack-ui/themed";

const ProfileScreen = () => {
  const profileData = {
    username: "johndoe",
    fullName: "John Doe",
    bio: "Photography enthusiast | Travel lover",
    postsCount: 42,
    followersCount: 1337,
    followingCount: 420,
    posts: [
      { id: "1", imageUrl: "https://picsum.photos/200?random=1" },
      { id: "2", imageUrl: "https://picsum.photos/200?random=2" },
      { id: "3", imageUrl: "https://picsum.photos/200?random=3" },
      { id: "4", imageUrl: "https://picsum.photos/200?random=4" },
      { id: "5", imageUrl: "https://picsum.photos/200?random=5" },
      { id: "6", imageUrl: "https://picsum.photos/200?random=6" },
      { id: "7", imageUrl: "https://picsum.photos/200?random=7" },
      { id: "8", imageUrl: "https://picsum.photos/200?random=8" },
      { id: "9", imageUrl: "https://picsum.photos/200?random=9" },
    ],
  };

  const renderPostItem = ({ item }) => (
    <Image
      source={{ uri: item.imageUrl }}
      width="$1/3"
      height="$32"
      alt={`Post ${item.id}`}
      borderWidth={1}
      borderColor="$gray200"
    />
  );

  return (
    <ScrollView>
      <VStack space="md" p="$4">
        <HStack space="md" alignItems="center">
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            width="$24"
            height="$24"
            borderRadius="$full"
            alt="Profile picture"
          />
          <VStack flex={1}>
            <Text fontSize="$xl" fontWeight="$bold">
              {profileData.username}
            </Text>
            <Text fontSize="$sm" color="$gray600">
              {profileData.fullName}
            </Text>
          </VStack>
        </HStack>

        <Text>{profileData.bio}</Text>

        <HStack justifyContent="space-around">
          <VStack alignItems="center">
            <Text fontWeight="$bold">{profileData.postsCount}</Text>
            <Text color="$gray600">Posts</Text>
          </VStack>
          <VStack alignItems="center">
            <Text fontWeight="$bold">{profileData.followersCount}</Text>
            <Text color="$gray600">Followers</Text>
          </VStack>
          <VStack alignItems="center">
            <Text fontWeight="$bold">{profileData.followingCount}</Text>
            <Text color="$gray600">Following</Text>
          </VStack>
        </HStack>

        <Pressable bg="$blue500" py="$2" borderRadius="$md" alignItems="center">
          <Text color="$white" fontWeight="$bold">
            Edit Profile
          </Text>
        </Pressable>

        <FlatList
          data={profileData.posts}
          renderItem={renderPostItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          scrollEnabled={false}
        />
      </VStack>
    </ScrollView>
  );
};

export default ProfileScreen;
