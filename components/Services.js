import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import ProductCard from "./ProductCard";
import { useNavigation } from "@react-navigation/native";

const Services = () => {
  const [services, setServices] = useState([]);
  // console.log("services:", services.name);

  const BikeData = services.filter(
    (item) => item.categories[0].name === "Bike"
  );

  const CarData = services.filter((item) => item.categories[0].name === "Car");
  // console.log("BikeData:", );

  const [dataToShow, setDataToShow] = useState([]);
  console.log("dataToShow:", dataToShow);

  useEffect(() => {
    // Fetch services data from API
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Failed to fetch services", error));
  }, []);

  const navigation = useNavigation();

  const handleBookNowPress = (productId) => {
    // Navigate to the product details screen with the product ID as a parameter
    navigation.navigate("ProductDetails", { productId });
    console.log(`Book Now pressed for product with ID: ${productId}`);
  };

  return (
    <View>
      <Text>Services for you </Text>

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

     
      {dataToShow.map((service) => (
     
        <ProductCard
          key={service.id}
          service={service}
          onBookNowPress={() => handleBookNowPress(service)}
        />
      ))}
    </View>
  );
};

export default Services;
