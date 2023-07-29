
import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyVehicleList = () => {
  const [customerIdData, setCustomerIdData] = useState("");
  console.log("customerIdData:::::", customerIdData);

  const [myVehiclesData, setMyVehiclesData] = useState([]);
  console.log("myVehiclesData::::", myVehiclesData);

  const fetchCustomerData = async () => {
    try {
      const response = await fetch(
        `https://bike-server1.onrender.com/api/customer/${customerIdData}`
      );
      const data = await response.json();
      // Check if 'vehicles' data exists before setting state
      if (data && data.vehicles && data.vehicles.length > 0) {
        setMyVehiclesData(data.vehicles);
      } else {
        setMyVehiclesData([]); // Set empty array if no data found
      }
    } catch (error) {
      console.error("Failed to fetch customer data:", error);
    }
  };

  // Retrieve data from local storage
  const getDataFromStorage = async () => {
    try {
      const dataFromStorage = await AsyncStorage.getItem("customer-user");
      if (dataFromStorage !== null) {
        const parsedData = JSON.parse(dataFromStorage);
        setCustomerIdData(parsedData._id);
      }
    } catch (error) {
      console.log("Error retrieving data from storage:", error);
    }
  };

  useEffect(() => {
    getDataFromStorage();
    fetchCustomerData();
  }, [customerIdData]);

  const renderItem = ({ item }) => (
    <View style={styles.box}>
      <View>
        <Text>Vehicle Type: {item.vehicleType}</Text>
        <Text>Make: {item.make}</Text>
        <Text>Model: {item.model}</Text>
        <Text>Year: {item.year}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {myVehiclesData.length > 0 ? (
        <FlatList
          data={myVehiclesData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()} // Use index as key
          horizontal
        />
      ) : (
        <Text>No Vehicle Add </Text>
      )}
    </View>
  );
};

export default MyVehicleList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 150,
    height: 100,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "#FFC600",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 12,
  },
});
