import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Button = ({ addSkill }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={addSkill}
    >
      <Text style={styles.titleButton}>Add</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a370f7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  titleButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
