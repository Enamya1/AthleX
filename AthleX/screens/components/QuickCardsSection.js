import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "./Card";

function QuickCardsSection({ quickCards }) {
  return (
    <View style={styles.rowWrap}>
      {quickCards.map((item, index) => (
        <Card
          key={index}
          icon={<Ionicons name={item.icon} size={28} color="#fff" />}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  rowWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 15,
  },
});

export default QuickCardsSection;