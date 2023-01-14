import React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Pressable } from "react-native";

export default function Button({ title, onPressProp, bgColor }) {
  return (
    <View style={styles.btn_containter}>
      <Pressable
        onPress={onPressProp}
        style={[styles.btn, { backgroundColor: bgColor ? bgColor : "orange" }]}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn_containter: {
    width: "100%",
    padding: 20,
    position: "absolute",
    bottom: 20,
  },
  btn: {
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "teal",
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});
