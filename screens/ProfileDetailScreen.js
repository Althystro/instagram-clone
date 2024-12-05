import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import profiles from "../data/profiles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ProfileDetailScreen = ({ route }) => {
  const { username } = route.params;
  const myProfile = profiles.find((profile) => profile.username === username);
  const [activeTab, setActiveTab] = useState("grid");

  const renderPostItem = ({ item }) => (
    <TouchableOpacity style={styles.touchable}>
      <Image
        source={
          item?.imageUrl
            ? { uri: item.imageUrl }
            : require("../assets/placeholder.png")
        }
        style={styles.postImage}
      />
    </TouchableOpacity>
  );

  const renderHighlight = ({ item }) => (
    <View style={styles.highlightContainer}>
      <View style={styles.highlightImageContainer}>
        <Image source={{ uri: item.image }} style={styles.highlightImage} />
      </View>
      <Text style={styles.highlightTitle}>{item.title}</Text>
    </View>
  );

  const TabButton = ({ isActive, onPress, children }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.tabButton, isActive && styles.activeTabButton]}
    >
      <Text
        style={[styles.tabButtonText, isActive && styles.activeTabButtonText]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <ScrollView>
        <View style={styles.content}>
          {/* Profile Info */}
          <View style={styles.profileInfo}>
            <Image
              source={
                myProfile?.profilePicture
                  ? { uri: myProfile.profilePicture }
                  : require("../assets/placeholder.png")
              }
              style={styles.profilePicture}
            />
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{myProfile.postsCount}</Text>
                <Text style={styles.statLabel}>posts</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>
                  {myProfile.followersCount}
                </Text>
                <Text style={styles.statLabel}>followers</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>
                  {myProfile.followingCount}
                </Text>
                <Text style={styles.statLabel}>following</Text>
              </View>
            </View>
          </View>

          {/* Bio */}
          <View style={styles.bioContainer}>
            <Text style={styles.bioName}>{myProfile.fullName}</Text>
            <Text style={styles.bioText}>{myProfile.bio}</Text>
          </View>
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>
                Following
                <FontAwesome name="check" size={14} color="black" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Message</Text>
            </TouchableOpacity>
          </View>
          {/* Action Buttons */}

          {/* Story Highlights */}
          {myProfile.highlights && (
            <FlatList
              horizontal
              data={myProfile.highlights}
              renderItem={renderHighlight}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.highlightsList}
            />
          )}

          {/* Tabs */}
          <View style={styles.tabContainer}>
            <TabButton
              isActive={activeTab === "grid"}
              onPress={() => setActiveTab("grid")}
            >
              ▦
            </TabButton>
            {/* Add more tabs if needed */}
          </View>

          {/* Posts Grid */}
          {activeTab === "grid" && (
            <FlatList
              data={myProfile.posts}
              renderItem={renderPostItem}
              keyExtractor={(item) => item.id}
              numColumns={3}
              scrollEnabled={false}
              contentContainerStyle={styles.postsGrid}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 75,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    padding: 1,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
  profilePicture: {
    width: 86,
    height: 86,
    borderRadius: 43,
    borderWidth: 1,
    borderColor: "#dbdbdb",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 16,
    flexGrow: 1,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  bioContainer: {
    marginBottom: 16,
  },
  bioName: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  bioText: {
    marginBottom: 2,
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  actionButton: {
    flexGrow: 1,
    backgroundColor: "#efefef",
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
    marginHorizontal: 4,
  },
  actionButton: {
    fontWeight: "600",
  },
  highlightsList: {
    marginBottom: 16,
  },
  highlightContainer: {
    alignItems: "center",
    marginRight: 16,
  },
  highlightImageContainer: {
    borderWidth: 1,
    borderColor: "#dbdbdb",
    borderRadius: 60,
    padding: 3,
    marginBottom: 4,
  },
  highlightImage: {
    width: 65,
    height: 65,
    borderRadius: 35,
  },
  highlightTitle: {
    fontSize: 12,
  },
  newHighlightContainer: {
    alignItems: "center",
    marginRight: 16,
  },
  newHighlightButton: {
    width: 65,
    height: 65,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#dbdbdb",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  newHighlightButtonText: {
    fontSize: 24,
  },
  newHighlightText: {
    fontSize: 12,
  },
  tabContainer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#dbdbdb",
    marginTop: 16,
  },
  tabButton: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  activeTabButton: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  tabButtonText: {
    fontSize: 24,
    color: "#999",
  },
  activeTabButtonText: {
    color: "black",
  },
  postsGrid: {
    // marginHorizontal:, // width:"100%",
  },
  postImage: {
    width: "100%",
    aspectRatio: 1,
    margin: 1,
  },
  touchable: {
    flex: 1,
    margin: 1,
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  actionButton: {
    flex: 1,
    backgroundColor: "#efefef",
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
    marginHorizontal: 4,
  },
  actionButtonText: {
    fontWeight: "600",
  },
});
