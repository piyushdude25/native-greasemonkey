
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
    marginTop: 3,
    fontWeight:"bold"
  },
});

const ShortDescription = ({ description }) => {
  const bullet = "";

  const listItems = description
    .replace(/<\/?p>/g, "")
    .replace(/<\/?ul>/g, "")
    .replace(/<\/?li>/g, "")
    .replace(/&#x2705; /g, "")
    .split("\n")
    .map((item, index) => {
      const itemText = item.trim();
      if (itemText) {
        return (
          <View style={styles.listItem} key={index}>
            {/* <Text style={styles.bullet}>{bullet} &gt; </Text> */}
            <Text style={{ fontSize: 15, marginTop:"-1%" }}>&gt;</Text>
            {/* <Text>{"⚫"}</Text> */}
            <Text>{itemText}</Text>
          </View>
        );
      }
      return null;
    });

  return <View style={styles.listContainer}>{listItems}</View>;
};

export default ShortDescription;
