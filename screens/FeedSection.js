import React from "react";
import { FlatList } from "react-native";
import { Box, VStack, HStack, Image, Text } from "@gluestack-ui/themed";

const FeedScreen = () => {
  const feedData = [
    { id: "1", username: "user1", imageUrl: "https://picsum.photos/400" },
    { id: "2", username: "user2", imageUrl: "https://picsum.photos/401" },
    { id: "3", username: "user3", imageUrl: "https://picsum.photos/402" },
    { id: "4", username: "user4", imageUrl: "https://picsum.photos/403" },
    { id: "5", username: "user5", imageUrl: "https://picsum.photos/404" },
  ];

  const renderItem = ({ item }) => (
    <Box p="$4" mb="$4">
      <HStack space="md" alignItems="center" mb="$4">
        <Box width="$12" height="$12" bg="$gray200" borderRadius="$full" />
        <Text fontWeight="$bold">{item.username}</Text>
      </HStack>
      <Image
        source={{ uri: item.imageUrl }}
        width="$full"
        height="$64"
        alt={`Post by ${item.username}`}
        borderRadius="$md"
      />
      <HStack space="md" mt="$4">
        <Box width="$6" height="$6" bg="$gray200" borderRadius="$full" />
        <Box width="$6" height="$6" bg="$gray200" borderRadius="$full" />
        <Box width="$6" height="$6" bg="$gray200" borderRadius="$full" />
      </HStack>
    </Box>
  );

  return (
    <FlatList
      data={feedData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default FeedScreen;
