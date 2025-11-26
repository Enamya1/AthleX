import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ListItem from "./ListItem";

function SettingsSection({ settings }) {
  return (
    <View style={styles.section}>
      {settings.map((item, index) => (
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
});

export default SettingsSection;