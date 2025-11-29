import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../assets/colors";

function ProfileHeader({ phone, memberType, avatarSize, nameTranslateY, badgeOpacity, badgeSize, phoneTextTranslateY }) {
  return (
    <View style={styles.header}>

      <View style={styles.userRow}>

        {/* ⭐ Animated Avatar */}
        <Animated.Image
          source={{
            uri:
              "https://ts2.tc.mm.bing.net/th/id/OIP-C.jnzkyf0v_NtkuAqWfbd6JgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
          }}
          style={[
            styles.avatar,
            {
              width: avatarSize,
              height: avatarSize,
              borderRadius: 100,
            },
          ]}
        />

        {/* ⭐ Animated Name Position */}
        <Animated.View style={{ transform: [{ translateY: nameTranslateY }] }}>
          <Animated.Text style={[styles.phone, { transform: [{ translateY: phoneTextTranslateY }] }]}>{phone}</Animated.Text>

          <Animated.View style={[styles.badge, { opacity: badgeOpacity, transform: [{ scale: badgeSize }] }]}>
            <Text style={styles.badgeText}>{memberType}</Text>
          </Animated.View>
        </Animated.View>

      </View>

      {/* Icons always stay aligned to the top-right */}
      <View style={styles.headerIcons}>
        <Ionicons name="qr-code-outline" size={28} color={colors.text} style={styles.iconBtn} />
        <Ionicons name="chatbubble-ellipses-outline" size={28} color={colors.text} style={styles.iconBtn} />
        <Ionicons name="settings-outline" size={28} color={colors.text} style={styles.iconBtn} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: "transparent",
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    backgroundColor: colors.gray,
    marginRight: 15,
  },

  phone: {
    color: colors.text,
    fontSize: 18,
    marginRight:50,
    fontWeight: "bold",
  },

  badge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 5,
    marginRight:70
  },

  badgeText: {
    color: colors.text,
    fontSize: 12,
  },

  headerIcons: {
    position: "absolute",
    right: 20,
    top: 45,
    flexDirection: "row",
  },

  iconBtn: {
    marginLeft: 15,
  },
});

export default ProfileHeader;
