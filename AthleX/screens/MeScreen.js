import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import ProfileHeader from "./components/ProfileHeader";
import QuickCardsSection from "./components/QuickCardsSection";
import MedalsSection from "./components/MedalsSection";
import ServicesSection from "./components/ServicesSection";
import SettingsSection from "./components/SettingsSection";

// ------------------ JSON DATA (You can replace this with API data later) ------------------
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
// ------------------------------------------------------------------------------------------

export default function MeScreen() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate loading JSON into state
    setData(profileJSON);
  }, []);

  if (!data) {
    return <Text style={{ color: "#fff", marginTop: 40, textAlign: "center" }}>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <ProfileHeader phone={data.phone} memberType={data.memberType} />
      <QuickCardsSection quickCards={data.quickCards} />
      <MedalsSection medals={data.medals} />
      <ServicesSection services={data.services} />
      <SettingsSection settings={data.settings} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
});