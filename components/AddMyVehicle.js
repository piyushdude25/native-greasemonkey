// import React, { useState, useEffect } from "react";
// import { View, TextInput, Button } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const AddMyVehicle = () => {
//   const [customerId, setCustomerId] = useState("");

//   const [customerIdData, setCustomerIdData] = useState("");
// console.log("customerIdData:", customerIdData);

//   const [vehicleType, setVehicleType] = useState("");
//   const [make, setMake] = useState("");
//   const [model, setModel] = useState("");
//   const [year, setYear] = useState("");

//   const handleCustomerIdChange = (text) => {
//     setCustomerId(text);
//   };

//   const handleVehicleTypeChange = (text) => {
//     setVehicleType(text);
//   };

//   const handleMakeChange = (text) => {
//     setMake(text);
//   };

//   const handleModelChange = (text) => {
//     setModel(text);
//   };

//   const handleYearChange = (text) => {
//     setYear(text);
//   };

//   const handleUpdate = () => {
//     const vehicleData = {
//       vehicleType,
//       make,
//       model,
//       year,
//     };

//     const requestData = {
//       vehicles: vehicleData,
//     };

//     fetch(
//       `https://bike-server1.onrender.com/api/newCustomer/addvehicle/${customerIdData}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(requestData),
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Updated customer:", data.customer);
//         // Handle the updated customer data as needed
//       })
//       .catch((error) => {
//         console.log("Error:", error);
//         // Handle the error appropriately
//       });

//     setVehicleType("");
//     setMake("");
//     setModel("");
//     setYear("");
//   };
//  useEffect(() => {
//    // Retrieve data from local storage
//    const getDataFromStorage = async () => {
//      try {
//        const dataFromStorage = await AsyncStorage.getItem("customer-user");
//        if (dataFromStorage !== null) {
//          const parsedData = JSON.parse(dataFromStorage);
//          setCustomerIdData(parsedData._id);
//        }
//      } catch (error) {
//        console.log("Error retrieving data from storage:", error);
//      }
//    };

//    getDataFromStorage();
//  }, []);

//   return (
//     <View>
//       {/* <TextInput
//         placeholder="Customer ID"
//         value={customerId }
//         onChangeText={handleCustomerIdChange}
//       /> */}
//       <TextInput
//         placeholder="Vehicle Type"
//         value={vehicleType}
//         onChangeText={handleVehicleTypeChange}
//       />
//       <TextInput
//         placeholder="Make"
//         value={make}
//         onChangeText={handleMakeChange}
//       />
//       <TextInput
//         placeholder="Model"
//         value={model}
//         onChangeText={handleModelChange}
//       />
//       <TextInput
//         placeholder="Year"
//         value={year}
//         onChangeText={handleYearChange}
//       />
//       <Button title="Update Vehicle" onPress={handleUpdate} />
//     </View>
//   );
// };

// export default AddMyVehicle;

import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddMyVehicle = () => {
  const [customerIdData, setCustomerIdData] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

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
      vehicles: vehicleData,
    };

    fetch(
      `https://bike-server1.onrender.com/api/customer/addvehicle/${customerIdData}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      }
    )
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

  useEffect(() => {
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

    getDataFromStorage();
  }, []);

  return (
    <View style={styles.component}>
      <TextInput
        placeholder="Vehicle Type"
        style={styles.input}
        value={vehicleType}
        onChangeText={handleVehicleTypeChange}
      />
      <TextInput
        placeholder="Make"
        style={styles.input}
        value={make}
        onChangeText={handleMakeChange}
      />
      <TextInput
        placeholder="Model"
        style={styles.input}
        value={model}
        onChangeText={handleModelChange}
      />
      <TextInput
        placeholder="Year"
        style={styles.input}
        value={year}
        onChangeText={handleYearChange}
      />
      <Button
        style={styles.addButton}
        title="Add Vehicle"
        onPress={handleUpdate}
        color="#FFC600"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    margin: "5%",
  },
  addButton: {
    borderRadius: "5%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFC600",
    marginBottom: 10,
    padding: 10,
  },
});

export default AddMyVehicle;
