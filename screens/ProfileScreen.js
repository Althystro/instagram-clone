import React from "react";
import { ScrollView } from "react-native";
import { Box, VStack, HStack, Center, Text } from "@gluestack-ui/themed";

const ProfileScreen = () => {
  return (
    <ScrollView>
      <VStack space="md" p="$4">
        <HStack space="md" alignItems="center">
          <Box width="$24" height="$24" bg="$gray200" borderRadius="$full" />
          <VStack space="sm" flex={1}>
            <Text fontSize="$lg" fontWeight="$bold">
              Username
            </Text>
            <Text>Bio goes here</Text>
          </VStack>
        </HStack>
        <Text>Full Name</Text>
        <HStack space="md" justifyContent="space-around">
          <Text>Posts</Text>
          <Text>Followers</Text>
          <Text>Following</Text>
        </HStack>
        <HStack flexWrap="wrap" justifyContent="space-between">
          {[...Array(9)].map((_, index) => (
            <Box
              key={index}
              width="$24"
              height="$24"
              bg="$gray200"
              mb="$1"
              borderRadius="$sm"
            />
          ))}
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default ProfileScreen;
