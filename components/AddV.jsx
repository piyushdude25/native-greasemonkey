import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";

const AddV = () => {
  const [formData, setFormData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [vehicle, setVehicle] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setVehicle(isChecked ? "" : "bike");
  };

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleAgeChange = (text) => {
    setAge(text);
  };

  const handleFormSubmit = () => {
    // Create a new object with form data
    const newFormData = { check: isChecked, vehicle, name, age };
    // Add the new form data to the existing form data array
    setFormData([...formData, newFormData]);
    // Reset the form fields
    setName("");
    setAge("");
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handleCheckboxChange}
        style={styles.checkboxContainer}
      >
        <View
          style={[
            styles.checkbox,
            { backgroundColor: isChecked ? "#007AFF" : "#FFFFFF" },
          ]}
        />
        <Text style={styles.label}>Bike</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleCheckboxChange}
        style={styles.checkboxContainer}
      >
        <View
          style={[
            styles.checkbox,
            { backgroundColor: !isChecked ? "#007AFF" : "#FFFFFF" },
          ]}
        />
        <Text style={styles.label}>Car</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Enter name"
        value={name}
        onChangeText={handleNameChange}
      />
      <TextInput
        placeholder="Enter age"
        value={age}
        onChangeText={handleAgeChange}
      />
      <Button title="Submit" onPress={handleFormSubmit} />

      {formData.length > 0 && (
        <View style={styles.vehicleContainer}>
          <Image
            style={styles.vehicleImage}
            source={
              vehicle === "bike"
                ? require("./bike.png") // Add bike image source
                : vehicle === "car"
                ? require("./car.png")
                : null
            }
          />
          <Text>Name: {name}</Text>
          <Text>Age: {age}</Text>
        </View>
      )}

      <FlatList
        data={formData}
        renderItem={({ item }) => (
          <Text>
            Vehicle: {item.vehicle}, Name: {item.name}, Age: {item.age}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#007AFF",
  },
  label: {
    marginLeft: 8,
  },
  vehicleContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  vehicleImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default AddV;
