import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const API_URL = "https://bike-backend.onrender.com/products"; // Replace with your API endpoint

const Bestseller = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.box}>
      <Image source={item.images[0].src} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>₹{item.price}</Text>
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: "5%",
    backgroundColor: "#ffffff",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 5, // Optional: Add some spacing between the image and text
  },
  name: {
    fontSize: 6,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "green",
    backgroundColor: "#FFC600",
    borderRadius:"5%",
    width:"80%",
  },
});

export default Bestseller;
