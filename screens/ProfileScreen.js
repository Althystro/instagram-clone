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

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("grid");
  const myProfile = profiles[0];

  const highlights = [
    {
      id: "1",
      title: "Alabama",
      image:
        "https://www.cbs42.com/wp-content/uploads/sites/81/2019/10/Sweet-Home-Alabama.jpg?w=876&h=493&crop=1",
    },
    {
      id: "2",
      title: "Chicago",
      image:
        "https://afar.brightspotcdn.com/dims4/default/53cac3e/2147483647/strip/true/crop/800x424+0+57/resize/1440x764!/format/webp/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fd8%2F85%2F07db0fa926da4ada94519300f70c%2Foriginal-open-uri20170420-13263-gkh5e",
    },
    {
      id: "3",
      title: "Seattle",
      image:
        "https://i.natgeofe.com/n/0652a07e-42ed-4f3d-b2ea-0538de0c5ba3/seattle-travel_16x9.jpg",
    },
  ];

  const renderPostItem = ({ item }) => (
    <Image
      source={
        item?.imageUrl
          ? { uri: item.imageUrl }
          : require("../assets/placeholder.png")
      }
      style={styles.postImage}
    />
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
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerIcon}>🔒</Text>
          <Text style={styles.headerText}>Hamad</Text>
        </View>
      </View>

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
                <Text style={styles.statNumber}>15</Text>
                <Text style={styles.statLabel}>posts</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>1,799</Text>
                <Text style={styles.statLabel}>followers</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>220</Text>
                <Text style={styles.statLabel}>following</Text>
              </View>
            </View>
          </View>

          {/* Bio */}
          <View style={styles.bioContainer}>
            <Text style={styles.bioName}>Eng.hamad 😊</Text>
            <Text style={styles.bioText}>Kuwait 🇰🇼</Text>
            <Text style={styles.bioText}>
              Computer Engineer | @lifeatpurdue 👨🏻‍💻
            </Text>
            <Text style={styles.bioText}>Computer Networking | PAAET 👨🏻‍💼</Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Share profile</Text>
            </TouchableOpacity>
          </View>

          {/* Story Highlights */}
          <FlatList
            horizontal
            data={highlights}
            renderItem={renderHighlight}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            style={styles.highlightsList}
            ListFooterComponent={
              <View style={styles.newHighlightContainer}>
                <View style={styles.newHighlightButton}>
                  <Text style={styles.newHighlightButtonText}>➕</Text>
                </View>
                <Text style={styles.newHighlightText}>New</Text>
              </View>
            }
          />

          {/* Tabs */}
          <View style={styles.tabContainer}>
            <TabButton
              isActive={activeTab === "grid"}
              onPress={() => setActiveTab("grid")}
            >
              ▦
            </TabButton>
            <TabButton
              isActive={activeTab === "reels"}
              onPress={() => setActiveTab("reels")}
            >
              ▶
            </TabButton>
            <TabButton
              isActive={activeTab === "tagged"}
              onPress={() => setActiveTab("tagged")}
            >
              👤
            </TabButton>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
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
    padding: 16,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  profilePicture: {
    width: 86,
    height: 86,
    borderRadius: 43,
    borderWidth: 1,
    borderColor: "#dbdbdb",
  },
  statsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 16,
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
    flex: 1,
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
    // marginHorizontal: ,
    // width: "100%",
  },
  postImage: {
    width: "33.3%",
    aspectRatio: 1,
    margin: 1,
  },
});

export default ProfileScreen;
