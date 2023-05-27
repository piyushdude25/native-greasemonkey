import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";
import { useNavigation } from "@react-navigation/native";

const Services = () => {
  const [services, setServices] = useState([]);
  var [dataToShow, setDataToShow] = useState([]);

  useEffect(() => {
    // Fetch services data from API
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Failed to fetch services::", error));
  }, []);

  const navigation = useNavigation();

  const handleBookNowPress = (productId) => {
    // Navigate to the product details screen with the product ID as a parameter
    navigation.navigate("ProductDetails", { productId: productId });
    console.log(`Book Now pressed for product with ID: ${productId}`);

    setDataToShow(BikeData);
  };

  const BikeData = services.filter(
    (item) => item.categories[0].name === "Bike"
  );

  const CarData = services.filter((item) => item.categories[0].name === "Car");

  const renderItem = ({ item }) => (
    <ProductCard
      service={item}
      onBookNowPress={() => handleBookNowPress(item)}
    />
  );

  return (
    <View>
      <Text>Services for you chages</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Bike"
          onPress={() => {
            setDataToShow(BikeData);
          }}
        />
        <Button
          title="Car"
          onPress={() => {
            setDataToShow(CarData);
          }}
        />
      </View>

      <FlatList
        data={dataToShow.length !== 0 ? dataToShow : services}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  list: {
    padding: 10,
  },
});

export default Services;

// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, FlatList } from "react-native";

// const Services = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/products")
//       .then((response) => response.json())
//       .then((users) => setData(users))
//       .catch((error) => console.error("Failed to fetch services::", error));
//   }, []);

//   return (
//     <FlatList
//       data={data}
//       keyExtractor={(user) => user.id}
//       renderItem={({ item }) => <Text>{item.name}</Text>}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default Services;
