import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

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

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View key={item.id} style={styles.box}>
          <Text>{item.name}</Text>
        </View>
      ))}
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
    margin: 10,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Bestseller;
