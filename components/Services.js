import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";
import { useNavigation } from "@react-navigation/native";

const Services = () => {
  const [services, setServices] = useState([]);
  const [dataToShow, setDataToShow] = useState([]);

  useEffect(() => {
    // Fetch services data from API
    fetch("https://bike-backend.onrender.com/products")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Failed to fetch services:", error));
  }, []);

  const navigation = useNavigation();

  const handleBookNowPress = (productId) => {
    // Navigate to the product details screen with the product ID as a parameter
    navigation.navigate("ProductDetails", { productId });
    console.log(`Book Now pressed for product with ID: ${productId}`);

    setDataToShow(services);
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
      <Text style={styles.heading}>Services for you changes...</Text>

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
        // numColumns={2}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  list: {
    paddingHorizontal: 10,
  },
});

export default Services;
