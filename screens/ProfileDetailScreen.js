import React from "react";
import { ScrollView, FlatList } from "react-native";
import { VStack, HStack, Text, Image } from "@gluestack-ui/themed";
import profiles from "../data/profiles";

const ProfileDetailScreen = ({ route }) => {
  const { username } = route.params;
  const myProfile = profiles.find((profile) => profile.username === username);

  const renderPostItem = ({ item }) => (
    <Image
      source={{ uri: item.imageUrl }}
      width="$1/3"
      height="$32"
      alt={`Post ${item.id}`}
    />
  );

  return (
    <ScrollView>
      <VStack space="md" p="$4">
        <HStack space="md" alignItems="center">
          {/* Assuming you have a profile picture URL */}
          <Image
            source={{
              uri: myProfile.profilePicture || "https://picsum.photos/200",
            }}
            width="$24"
            height="$24"
            borderRadius="$full"
            alt="Profile picture"
          />
          <VStack flex={1}>
            <Text fontSize="$xl" fontWeight="$bold">
              {myProfile.username}
            </Text>
            <Text fontSize="$sm" color="$gray600">
              {myProfile.fullName}
            </Text>
          </VStack>
        </HStack>
        <Text>{myProfile.bio}</Text>
        <HStack justifyContent="space-around">
          <VStack alignItems="center">
            <Text fontWeight="$bold">{myProfile.postsCount}</Text>
            <Text color="$gray600">Posts</Text>
          </VStack>
          <VStack alignItems="center">
            <Text fontWeight="$bold">{myProfile.followersCount}</Text>
            <Text color="$gray600">Followers</Text>
          </VStack>
          <VStack alignItems="center">
            <Text fontWeight="$bold">{myProfile.followingCount}</Text>
            <Text color="$gray600">Following</Text>
          </VStack>
        </HStack>

        {/* Render all posts */}
        <FlatList
          data={myProfile.posts}
          renderItem={renderPostItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
        />
      </VStack>
    </ScrollView>
  );
};

export default ProfileDetailScreen;
