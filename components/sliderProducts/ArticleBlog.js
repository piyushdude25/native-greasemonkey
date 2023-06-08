import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const ArticleBlog = () => {
  const data = [
    {
      id: 1,
      name: "10 key Tips For Motorbike Care",
      image: require("../../assets/machanicThumsUp.png"),
    },
    {
      id: 2,
      name: "What does a bike service include",
      image: require("../../assets/machanicThumsUp.png"),
    },
    {
      id: 3,
      name: "Item 3",
      image: require("../../assets/machanicThumsUp.png"),
    },
    {
      id: 4,
      name: "Item 1",
      image: require("../../assets/machanicThumsUp.png"),
    },
    {
      id: 5,
      name: "Item 2",
      image: require("../../assets/machanicThumsUp.png"),
    },
    {
      id: 6,
      name: "Item 3",
      image: require("../../assets/machanicThumsUp.png"),
    },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.box}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 150,
    height: 100,
    backgroundColor: "#FFC600",
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
    padding: "2%",
  },
  image: {
    width: 50,
    height: 100,
    // borderRadius: 25,
  },
  name: {
    flex: 1,
    marginLeft: 10,
    fontSize: "75%",
    fontWeight: "bold",
  },
});

export default ArticleBlog;
