import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

const AddVehicles = () => {
  const [formData, setFormData] = useState([]);

  const [isChecked, setIsChecked] = useState(true);
  const [name, setName] = useState("");
  const [detail, setdetail] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleNameChange = (text) => {
    setName(text);
  };

  const handledetailChange = (text) => {
    setdetail(text);
  };

  const handleFormSubmit = () => {
    // Create a new object with form data
    const newFormData = { check: isChecked, name, detail };
    // Add the new form data to the existing form data array
    setFormData([...formData, newFormData]);
    // Reset the form fields
    setName("");
    setdetail("");
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
        <Text style={styles.label}>My Bike</Text>
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
        <Text style={styles.label}>My Car</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Enter name"
        value={name}
        onChangeText={handleNameChange}
      />
      <TextInput
        placeholder="Enter detail"
        value={detail}
        onChangeText={handledetailChange}
      />
      <Button title="Add Vehicles" onPress={handleFormSubmit} />
      <FlatList
        data={formData}
        renderItem={({ item }) => (
          <Text>
            Vehicle: {item.check}, Name: {item.name}, detail: {item.detail}
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
});

export default AddVehicles;
