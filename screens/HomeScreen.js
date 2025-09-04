import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const games = [
  "AirBorneDash",
  "BubbleMerge",
  "ColorDashUp",
  "CrossyBridge",
  "DownHillRide",
  "ElementalHelix",
  "Ludo",
  "NeonBallHop",
  "RiverRunChicken",
  "SkylineCube",
  "ZigZag",
];

export default function HomeScreen({ navigation, route }) {
  const { userName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 Welcome, {userName}</Text>
      <FlatList
        data={games}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("GameScreen", { gameName: item })}
          >
            <Text style={styles.btnText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  btn: { padding: 15, backgroundColor: "#6200ee", borderRadius: 10, marginVertical: 5 },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
