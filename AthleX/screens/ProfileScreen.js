import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5, Entypo } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userRow}>
          <Image
            source={{ uri: "https://i.imgur.com/1Xq9BiU.png" }} // placeholder avatar
            style={styles.avatar}
          />
          <View>
            <Text style={styles.phone}>151******64</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Regular member</Text>
            </View>
          </View>
        </View>

        <View style={styles.headerIcons}>
          <Ionicons name="qr-code-outline" size={28} color="#fff" />
          <Ionicons name="chatbubble-ellipses-outline" size={28} color="#fff" />
          <Ionicons name="settings-outline" size={28} color="#fff" />
        </View>
      </View>

      {/* Quick Cards */}
      <View style={styles.row}>
        <Card icon={<Ionicons name="person-circle-outline" size={30} color="#fff" />} title="Me" subtitle="Followers, following" />
        <Card icon={<Ionicons name="people-outline" size={30} color="#fff" />} title="Family & friends" subtitle="Add family" />
      </View>

      <View style={styles.row}>
        <Card icon={<Entypo name="palette" size={30} color="#fff" />} title="Creation centre" subtitle="Discover community events" />
        <Card icon={<Ionicons name="flash-outline" size={30} color="#fff" />} title="My energy points" subtitle="40 energy points" />
      </View>

      {/* Medals */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Medals</Text>
        <View style={styles.medalsRow}>
          <View style={styles.medalCircle}></View>
          <View style={styles.medalCircle}></View>
          <View style={styles.medalCircle}></View>
          <View style={styles.medalCircle}></View>
        </View>
      </View>

      {/* Services List */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My services</Text>
        <ListItem icon="star-outline" label="My activities" />
        <ListItem icon="map-outline" label="My routes" />
        <ListItem icon="book-outline" label="My courses" />
        <ListItem icon="calendar-outline" label="My plans" />
        <ListItem icon="document-text-outline" label="My reports" />
        <ListItem icon="cube-outline" label="All data" />
        <ListItem icon="share-social-outline" label="Third-party data sharing" />
      </View>

      {/* Bottom Settings */}
      <View style={styles.section}>
        <ListItem icon="shield-outline" label="Privacy management" />
        <ListItem icon="heart-outline" label="My Honor Choice" />
        <ListItem icon="help-circle-outline" label="Help and customer service" />
      </View>

    </ScrollView>
  );
}

// ---------------- Components ----------------

function Card({ icon, title, subtitle }) {
  return (
    <TouchableOpacity style={styles.card}>
      <View>{icon}</View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSub}>{subtitle}</Text>
    </TouchableOpacity>
  );
}

function ListItem({ icon, label }) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <Ionicons name={icon} size={22} color="#aaa" />
      <Text style={styles.listLabel}>{label}</Text>
      <Ionicons name="chevron-forward" size={20} color="#666" />
    </TouchableOpacity>
  );
}

// ---------------- Styles ----------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },

  header: {
    backgroundColor: "#222",
    padding: 20,
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
    alignSelf: "flex-start",
  },

  badgeText: {
    color: "#fff",
    fontSize: 12,
  },

  headerIcons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: -40,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },

  card: {
    width: "47%",
    backgroundColor: "#1a1a1a",
    padding: 15,
    borderRadius: 15,
  },

  cardTitle: {
    color: "#fff",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },

  cardSub: {
    color: "#bbb",
    fontSize: 12,
    marginTop: 3,
  },

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
    width: 50,
    height: 50,
    backgroundColor: "#333",
    borderRadius: 25,
  },

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
