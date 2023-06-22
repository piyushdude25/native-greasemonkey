
import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const AddMyVehicle = () => {
  const [customerId, setCustomerId] = useState("");

  const [vehicleType, setVehicleType] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const handleCustomerIdChange = (text) => {
    setCustomerId(text);
  };

  const handleVehicleTypeChange = (text) => {
    setVehicleType(text);
  };

  const handleMakeChange = (text) => {
    setMake(text);
  };

  const handleModelChange = (text) => {
    setModel(text);
  };

  const handleYearChange = (text) => {
    setYear(text);
  };

  const handleUpdate = () => {
    const vehicleData = {
      vehicleType,
      make,
      model,
      year,
    };

    const requestData = {
      vehicles: [vehicleData],
    };

    fetch(`http://localhost:5050/api/newCustomer/addvehicle/${customerId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Updated customer:", data.customer);
        // Handle the updated customer data as needed
      })
      .catch((error) => {
        console.log("Error:", error);
        // Handle the error appropriately
      });

    setVehicleType("");
    setMake("");
    setModel("");
    setYear("");
  };

  return (
    <View>
      <TextInput
        placeholder="Customer ID"
        value={customerId}
        onChangeText={handleCustomerIdChange}
      />
      <TextInput
        placeholder="Vehicle Type"
        value={vehicleType}
        onChangeText={handleVehicleTypeChange}
      />
      <TextInput
        placeholder="Make"
        value={make}
        onChangeText={handleMakeChange}
      />
      <TextInput
        placeholder="Model"
        value={model}
        onChangeText={handleModelChange}
      />
      <TextInput
        placeholder="Year"
        value={year}
        onChangeText={handleYearChange}
      />
      <Button title="Update Vehicle" onPress={handleUpdate} />
    </View>
  );
};

export default AddMyVehicle;
