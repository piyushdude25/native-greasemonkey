// // import React, { useEffect, useState } from "react";
// // import { View, Text, Button } from "react-native";
// // import ProductCard from "./ProductCard";
// // import { useNavigation } from "@react-navigation/native";

// // const Services = () => {
// //   const [services, setServices] = useState([]);
// //   // console.log("services:", services.name);

// //   const BikeData = services.filter(
// //     (item) => item.categories[0].name === "Bike"
// //   );

// //   const CarData = services.filter((item) => item.categories[0].name === "Car");
// //   // console.log("BikeData:", );

// //   const [dataToShow, setDataToShow] = useState([]);
// //   console.log("dataToShow:", dataToShow);

// //   useEffect(() => {
// //     // Fetch services data from API
// //     fetch("http://localhost:8080/products")
// //       .then((response) => response.json())
// //       .then((data) => setServices(data))
// //       .catch((error) => console.error("Failed to fetch services", error));
// //   }, []);

// //   const navigation = useNavigation();

// //   const handleBookNowPress = (productId) => {
// //     // Navigate to the product details screen with the product ID as a parameter
// //     navigation.navigate("ProductDetails", { productId });
// //     console.log(`Book Now pressed for product with ID: ${productId}`);
// //   };

// //   return (
// //     <View>
// //       <Text>Services for you chages</Text>

// //       <Button
// //         title="Bike"
// //         onPress={() => {
// //           setDataToShow(BikeData);
// //         }}
// //       />
// //       <Button
// //         title="Car"
// //         onPress={() => {
// //           setDataToShow(CarData);
// //         }}
// //       />

// //       {dataToShow.map((service) => (
// //         <ProductCard
// //           key={service.id}
// //           service={service}
// //           onBookNowPress={() => handleBookNowPress(service)}
// //         />
// //       ))}
// //     </View>
// //   );
// // };

// // export default Services;

//  import React, { useEffect, useState } from "react";
//  import { View, Text, Button, StyleSheet } from "react-native";
//  import ProductCard from "./ProductCard";
//  import { useNavigation } from "@react-navigation/native";

//  const Services = () => {
//    const [services, setServices] = useState([]);

//    const BikeData = services.filter(
//      (item) => item.categories[0].name === "Bike"
//    );

//    const CarData = services.filter((item) => item.categories[0].name === "Car");

//    const [dataToShow, setDataToShow] = useState([]);

//    useEffect(() => {
//      // Fetch services data from API
//      fetch("http://localhost:8080/products")
//        .then((response) => response.json())
//        .then((data) => setServices(data))
//        .catch((error) => console.error("Failed to fetch services", error));
//    }, []);

//    const navigation = useNavigation();

//    const handleBookNowPress = (productId) => {
//      // Navigate to the product details screen with the product ID as a parameter
//      navigation.navigate("ProductDetails", { productId });
//      console.log(`Book Now pressed for product with ID: ${productId}`);
//    };

//    return (
//      <View style={styles.container}>
//        <Text style={styles.title}>Services for you chages</Text>

//        <View style={styles.buttonsContainer}>
//          <Button
//            title="Bike"
//            onPress={() => {
//              setDataToShow(BikeData);
//            }}
//          />
//          <Button
//            title="Car"
//            onPress={() => {
//              setDataToShow(CarData);
//            }}
//          />
//        </View>

//        <View style={styles.productsContainer}>
//          {dataToShow.map((service) => (
//            <ProductCard
//              key={service.id}
//              service={service}
//              onBookNowPress={() => handleBookNowPress(service)}
//            />
//          ))}
//        </View>
//      </View>
//    );
//  };

//  const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      padding: 10,
//    },
//    title: {
//      fontSize: 18,
//      fontWeight: "bold",
//      marginBottom: 10,
//    },
//    buttonsContainer: {
//      flexDirection: "row",
//      justifyContent: "space-between",
//      marginBottom: 10,
//    },
//    productsContainer: {
//      flexDirection: "row",
//      justifyContent: "space-between",
//      flexWrap: "wrap",
//    },
//  });

//  export default Services;

import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";
import { useNavigation } from "@react-navigation/native";

const Services = () => {
  const [services, setServices] = useState([]);
  const [dataToShow, setDataToShow] = useState([]);

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
        data={dataToShow}
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
