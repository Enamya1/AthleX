import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function ProfileHeader({ phone, memberType }) {
  return (
    <View style={styles.header}>
      <View style={styles.userRow}>
        <Image
          source={{ uri: "https://i.imgur.com/1Xq9BiU.png" }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.phone}>{phone}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{memberType}</Text>
          </View>
        </View>
      </View>

      <View style={styles.headerIcons}>
        <Ionicons name="qr-code-outline" size={28} color="#fff" style={styles.iconBtn} />
        <Ionicons name="chatbubble-ellipses-outline" size={28} color="#fff" style={styles.iconBtn} />
        <Ionicons name="settings-outline" size={28} color="#fff" style={styles.iconBtn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#222",
    padding: 20,
    paddingTop:100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#555",
    marginRight: 15,
  },

  phone: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  badge: {
    backgroundColor: "#4fc3f7",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 5,
  },

  badgeText: {
    color: "#fff",
    fontSize: 12,
  },

  headerIcons: {
    flexDirection: "row",
    position: "absolute",
    right: 20,
    top: 20,
  },

  iconBtn: {
    marginLeft: 15,
    paddingTop:20
  },
});

export default ProfileHeader;