import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function ListItem({ icon, label }) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <Ionicons name={icon} size={22} color="#aaa" />
      <Text style={styles.listLabel}>{label}</Text>
      <Ionicons name="chevron-forward" size={20} color="#666" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
  },

  listLabel: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
});

export default ListItem;