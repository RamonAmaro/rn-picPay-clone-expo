import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const SkillCard = ({ card }) => {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}> {card} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 10,
  },
  textSkill: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
