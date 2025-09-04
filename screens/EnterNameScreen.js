import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function EnterNameScreen({ navigation }) {
  const [name, setName] = useState("");

  const continueToHome = () => {
    if (!name.trim()) return alert("Enter your name!");
    navigation.replace("Home", { userName: name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Name</Text>
      <TextInput
        placeholder="Your Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity style={styles.btn} onPress={continueToHome}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  input: { width: "100%", borderWidth: 1, borderColor: "#ccc", borderRadius: 10, padding: 15, marginBottom: 20 },
  btn: { width: "100%", backgroundColor: "#6200ee", padding: 15, borderRadius: 10, alignItems: "center" },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
