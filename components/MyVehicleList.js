// // import React, { useState, useEffect } from "react";
// // import { View, TextInput, Button ,Text} from "react-native";
// // import AsyncStorage from "@react-native-async-storage/async-storage";

// // const MyVehicleList = () => {
// //   const [customerIdData, setCustomerIdData] = useState("");
// //   console.log("customerIdData:::::", customerIdData);

// //   const [myVehiclesData, setMyVehiclesData] = useState(null);
// //   console.log("myVehiclesData::::", myVehiclesData);

// //    const fetchCustomerData = async () => {
// //      try {
// //        const response = await fetch(
// //          `http://localhost:5050/api/newCustomer/customer/${customerIdData}`
// //        );
// //        const data = await response.json();
// //        setMyVehiclesData(data.vehicles);
// //      } catch (error) {
// //        console.error("Failed to fetch customer data:", error);
// //      }
// //    };


// //   // Retrieve data from local storage
// //   const getDataFromStorage = async () => {
// //     try {
// //       const dataFromStorage = await AsyncStorage.getItem("customer-user");
// //       if (dataFromStorage !== null) {
// //         const parsedData = JSON.parse(dataFromStorage);
// //         setCustomerIdData(parsedData._id);
// //       }
// //     } catch (error) {
// //       console.log("Error retrieving data from storage:", error);
// //     }
// //   };

// //   useEffect(() => { 
// //     fetchCustomerData();
// //     getDataFromStorage();
   
// //   }, [customerIdData]);

// //   return (
// //     <View>
// //       {myVehiclesData.map((customer, index) => (
// //         <View key={index}>
// //           <Text>Customer ID: {customer._id}</Text>
// //           <Text>Name: {customer.name}</Text>
// //           <Text>Email: {customer.email}</Text>

// //           <Text>--- Vehicles ---</Text>
// //           {customer.vehicles.map((vehicle, vehicleIndex) => (
// //             <Text key={vehicleIndex}>{vehicle}</Text>
// //           ))}

// //           <Text>------------------------------</Text>
// //         </View>
// //       ))}
// //     </View>
// //   );
// // };

// // export default MyVehicleList;


// import React, { useState, useEffect } from "react";
// import {
//   View,
//   TextInput,
//   Button,
//   Text,
//   StyleSheet,
//   FlatList,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const MyVehicleList = () => {
//   const [customerIdData, setCustomerIdData] = useState("");
//   console.log("customerIdData:::::", customerIdData);

//   const [myVehiclesData, setMyVehiclesData] = useState([]);
//   console.log("myVehiclesData::::", myVehiclesData);

//   const fetchCustomerData = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5050/api/newCustomer/customer/${customerIdData}`
//       );
//       const data = await response.json();
//       setMyVehiclesData(data.vehicles);
//     } catch (error) {
//       console.error("Failed to fetch customer data:", error);
//     }
//   };

//   // Retrieve data from local storage
//   const getDataFromStorage = async () => {
//     try {
//       const dataFromStorage = await AsyncStorage.getItem("customer-user");
//       if (dataFromStorage !== null) {
//         const parsedData = JSON.parse(dataFromStorage);
//         setCustomerIdData(parsedData._id);
//       }
//     } catch (error) {
//       console.log("Error retrieving data from storage:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCustomerData();
//     getDataFromStorage();
//   }, [customerIdData]);

//   const renderItem = ({ item }) => (
//     <View key={item.id} style={styles.box}>
//       <Image source={item.images[0].src} style={styles.image} />
//       <Text style={styles.name}>{item.name}</Text>
//       <Text style={styles.price}>₹{item.price}</Text>
//     </View>
//   );

//   return (
//     // <View>
//     //   {myVehiclesData && myVehiclesData.length > 0 ? (
//     //     myVehiclesData.map((vehicle, index) => (
//     //       <View key={index}>
//     //         <Text>Vehicle Type: {vehicle.vehicleType}</Text>
//     //         <Text>Make: {vehicle.make}</Text>
//     //         <Text>Model: {vehicle.model}</Text>
//     //         <Text>Year: {vehicle.year}</Text>

//     //         <Text>------------------------------</Text>
//     //       </View>
//     //     ))
//     //   ) : (
//     //     <Text>No vehicles found</Text>
//     //   )}
//     // </View>

//     <View style={styles.container}>
//       <FlatList
//         data={myVehiclesData}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         horizontal
//       />
//     </View>
//   );
// };

// export default MyVehicleList;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderWidth: 2,
//     borderColor: "black",
//     borderRadius: "5%",
//     backgroundColor: "#ffffff",
//     margin: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   image: {
//     width: 50,
//     height: 50,
//     marginBottom: 5, // Optional: Add some spacing between the image and text
//   },
//   name: {
//     fontSize: 6,
//     fontWeight: "bold",
//   },
//   price: {
//     fontSize: 14,
//     color: "green",
//     backgroundColor: "#FFC600",
//     borderRadius: "5%",
//     width: "80%",
//   },
// });



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
        `http://localhost:5050/api/newCustomer/customer/${customerIdData}`
      );
      const data = await response.json();
      setMyVehiclesData(data.vehicles);
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
    fetchCustomerData();
    getDataFromStorage();
  }, [customerIdData]);

  const renderItem = ({ item }) => (
    <View key={item._id} style={styles.box}>
      <View>
 {myVehiclesData && myVehiclesData.length > 0 ? (
   myVehiclesData.map((vehicle, index) => (
     <View key={index}>
       <Text>Vehicle Type: {vehicle.vehicleType}</Text>
       <Text>Make: {vehicle.make}</Text>
       <Text>Model: {vehicle.model}</Text>
       <Text>Year: {vehicle.year}</Text>

       <Text>------------------------------</Text>
     </View>
   ))
 ) : (
   <Text>No vehicles found</Text>
 )}
 </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={myVehiclesData}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        horizontal
      />
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
    height: 200,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "#ffffff",
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
