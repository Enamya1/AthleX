import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ListItem from "./ListItem";

function ServicesSection({ services }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>My services</Text>
      {services.map((item, index) => (
        <ListItem key={index} icon={item.icon} label={item.label} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ServicesSection;