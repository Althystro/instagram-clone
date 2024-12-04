import React from "react";
import { FlatList } from "react-native";
import { Box, VStack, HStack, Center } from "@gluestack-ui/themed";

const FeedScreen = () => {
  const renderItem = () => (
    <Box p="$4" mb="$4">
      <HStack space="md" alignItems="center" mb="$4">
        <Box width="$12" height="$12" bg="$gray200" borderRadius="$full" />
        <Box width="40%" height="$4" bg="$gray200" borderRadius="$full" />
      </HStack>
      <Box width="$full" height="$48" bg="$gray200" borderRadius="$md" />
      <HStack space="md" mt="$4">
        <Box width="$6" height="$6" bg="$gray200" borderRadius="$full" />
        <Box width="$6" height="$6" bg="$gray200" borderRadius="$full" />
        <Box width="$6" height="$6" bg="$gray200" borderRadius="$full" />
      </HStack>
    </Box>
  );

  return (
    <FlatList
      data={[1, 2, 3, 4, 5]}
      renderItem={renderItem}
      keyExtractor={(item) => item.toString()}
    />
  );
};

export default FeedScreen;
