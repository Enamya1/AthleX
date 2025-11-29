import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

import ProfileHeader from "./components/ProfileHeader";
import QuickCardsSection from "./components/QuickCardsSection";
import MedalsSection from "./components/MedalsSection";
import ServicesSection from "./components/ServicesSection";
import SettingsSection from "./components/SettingsSection";
import { colors } from "../assets/colors";

// ------------------ JSON DATA ------------------
const profileJSON = {
  phone: "151******64",
  memberType: "Regular member",
  energyPoints: 40,

  medals: ["100km", "42km", "21km", "10km"],

  quickCards: [
    { icon: "person-circle-outline", title: "Me", subtitle: "Followers, following" },
    { icon: "people-outline", title: "Family & friends", subtitle: "Add family and friends" },
    { icon: "color-palette-outline", title: "Creation centre", subtitle: "Discover community events" },
    { icon: "flash-outline", title: "My energy points", subtitle: "40 energy points" }
  ],

  services: [
    { icon: "star-outline", label: "My activities" },
    { icon: "map-outline", label: "My routes" },
    { icon: "book-outline", label: "My courses" },
    { icon: "calendar-outline", label: "My plans" },
    { icon: "document-text-outline", label: "My reports" },
    { icon: "cube-outline", label: "All data" },
    { icon: "share-social-outline", label: "Third-party data sharing" }
  ],

  settings: [
    { icon: "shield-outline", label: "Privacy management" },
    { icon: "heart-outline", label: "My Honor Choice" },
    { icon: "help-circle-outline", label: "Help and customer service" }
  ]
};
// -------------------------------------------------


const HEADER_MAX = 130;
const HEADER_MIN = 70;
const AVATAR_MAX = 60;
const AVATAR_MIN = 32;

export default function MeScreen() {
  const [data, setData] = useState(null);
  const scrollY = new Animated.Value(0);

  useEffect(() => {
    setData(profileJSON);
  }, []);

  if (!data) {
    return (
      <Text style={{ color: colors.text, marginTop: 40, textAlign: "center" }}>
        Loading...
      </Text>
    );
  }

  // HEADER HEIGHT (shrinks)
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [HEADER_MAX, HEADER_MIN+25],
    extrapolate: "clamp",
  });

  // AVATAR SIZE
  const avatarSize = scrollY.interpolate({
    inputRange: [10, 80],
    outputRange: [AVATAR_MAX, AVATAR_MIN+10],
    extrapolate: "clamp",
  });

  // NAME Y POSITION (moves up)
  const nameTranslateY = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -10],
    extrapolate: "clamp",
  });

  // BADGE OPACITY (fades out)
  const badgeOpacity = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  // BADGE SIZE (shrinks)
  const badgeSize = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  // PHONE TEXT Y POSITION (moves up)
  const phoneTextTranslateY = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, 25],
    extrapolate: "clamp",
  });


  return (
    <View style={styles.container}>

      {/* ⭐ Animated Sticky Header */}
      <Animated.View style={[styles.animatedHeader, { height: headerHeight }]}>
        <ProfileHeader
          phone={data.phone}
          memberType={data.memberType}
          avatarSize={avatarSize}
          nameTranslateY={nameTranslateY}
          badgeOpacity={badgeOpacity}
          badgeSize={badgeSize}
          phoneTextTranslateY={phoneTextTranslateY}
        />
      </Animated.View>

      {/* CONTENT SCROLL */}
      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: HEADER_MAX }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        <QuickCardsSection quickCards={data.quickCards} />
        <MedalsSection medals={data.medals} />
        <ServicesSection services={data.services} />
        <SettingsSection settings={data.settings} />
      </Animated.ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  animatedHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
    backgroundColor: colors.secondary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
});