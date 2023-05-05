import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

const MenuButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    justifyContent: "space-between",
  },
  line: {
    width: "100%",
    height: 3,
    backgroundColor: "black",
    borderRadius: 3,
  },
});

export default MenuButton;
