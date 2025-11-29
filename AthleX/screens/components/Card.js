import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../assets/colors";

function Card({ icon, title, subtitle }) {
  return (
    <TouchableOpacity style={styles.card}>
      <View>{icon}</View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSub}>{subtitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: colors.secondary,
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },

  cardTitle: {
    color: colors.text,
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },

  cardSub: {
    color: colors.lightGray,
    fontSize: 12,
    marginTop: 3,
  },
});

export default Card;