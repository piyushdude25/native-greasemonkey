import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: 20,
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  bullet: {
    fontSize: 10,
    marginRight: 5,
    marginTop: 5,
  },
});

const ShortDescription = ({ short_description }) => {
  const bullet = "\u2022";

  const listItems = short_description
    .replace(/<\/?ul>/g, "")
    .split("\n")
    .map((item, index) => {
      const itemText =
        index === 0
          ? item.replace(/<\/?p>/g, "")
          : item.replace(/<\/?li>/g, "").trim();
      return (
        <View style={styles.listItem} key={index}>
          {index !== 0 ? <Text style={styles.bullet}>{bullet}</Text> : null}
          <Text>{itemText}</Text>
        </View>
      );
    });

  return <View style={styles.listContainer}>{listItems}</View>;
};

export default ShortDescription;
