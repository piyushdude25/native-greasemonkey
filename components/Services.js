import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, Image } from "react-native";
import ProductCard from "./ProductCard";
import { useNavigation } from "@react-navigation/native";
import ImageCarousel from "./ImageCarousel";
import Services2 from "./Services2";

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

  const BikeData = services.filter((item) =>
    item.categories.some((category) =>
      ["Bike", "Breakdown"].includes(category.name)
    )
  );

  const CarData = services.filter((item) =>
    item.categories.some((category) =>
      ["Car", "Breakdown"].includes(category.name)
    )
  );

  const renderItem = ({ item }) => (
    <ProductCard
      service={item}
      onBookNowPress={() => handleBookNowPress(item)}
    />
  );

  return (
    <View>
      <ImageCarousel />
      <Text style={styles.textStyle}>Registered Vehicle</Text>

      <Text style={styles.heading}>Services for you</Text>

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

      <View>
        <Services2 />
      </View>
      <View>
        <Text>
          {" "}
          sdfsfsdf dfsdfsd fontSizefs fontSizefs fontSizefs falsesf fgj fdj
          dfsdfsdjf h fetchfgh fg handleBookNowPressfgh fgh falsehf
          handleBookNowPressfghfh fh f handleBookNowPressfghfh f
          handleBookNowPressfghfh fetchfghf handleBookNowPressfghfhfh fh f
          handleBookNowPressfghfhfh h fd handleBookNowPressfghfhfh fh
          dodfsdfsdjf h fetchfgh fg handleBookNowPressfgh fgh falsehf
          handleBookNowPressfghfh fh f handleBookNowPressfghfh f
          handleBookNowPressfghfh fetchfghf handleBookNowPressfghfhfh fh f
          handleBookNowPressfghfhfh h fd handleBookNowPressfghfhfh fh
          dodfsdfsdjf h fetchfgh fg handleBookNowPressfgh fgh falsehf
          handleBookNowPressfghfh fh f handleBookNowPressfghfh f
          handleBookNowPressfghfh fetchfghf handleBookNowPressfghfhfh fh f
          handleBookNowPressfghfhfh h fd handleBookNowPressfghfhfh fh
          dodfsdfsdjf h fetchfgh fg handleBookNowPressfgh fgh falsehf
          handleBookNowPressfghfh fh f handleBookNowPressfghfh f
          handleBookNowPressfghfh fetchfghf handleBookNowPressfghfhfh fh f
          handleBookNowPressfghfhfh h fd handleBookNowPressfghfhfh fh do
        </Text>
      </View>
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
