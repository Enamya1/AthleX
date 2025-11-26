import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MedalsSection({ medals }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Medals</Text>
      <View style={styles.medalsRow}>
        {medals.map((medal, index) => (
          <View key={index} style={styles.medalCircle}>
            <Text style={{ color: "#fff", fontSize: 10 }}>{medal}</Text>
          </View>
        ))}
      </View>
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

  medalsRow: {
    flexDirection: "row",
    gap: 15,
  },

  medalCircle: {
    width: 55,
    height: 55,
    borderRadius: 27,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MedalsSection;