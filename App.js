// // import { StatusBar } from "expo-status-bar";
// // import { StyleSheet, Text, View } from "react-native";
// // // import NotificationComponent from "./components/NotificationComponent";
// // import AddVehicles from "./components/AddVehicles";
// // import PaytmIntegration from "./components/PaytmIntegration";

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Open up App.js to start working on your app!</Text>
// //       {/* <StatusBar style="auto" /> */}
// //       {/* <NotificationComponent /> */}
// //       <AddVehicles />
// //       <PaytmIntegration/>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// // });

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import AddVehicles from "./components/AddVehicles";
// import PaytmIntegration from "./components/PaytmIntegration";
// import AddV from "./components/AddV";
// import Services from "./components/Services";

// const Stack = createStackNavigator();

// const App = () => (
// //   <NavigationContainer>
// //     <Stack.Navigator>
// //       <Stack.Screen name="AddVehicles" component={AddVehicles} />
// //       <Stack.Screen name="PaytmIntegration" component={PaytmIntegration} />
// //     </Stack.Navigator>
// //   </NavigationContainer>

// <>
// {/* <AddV/> */}
// <Services/>
// </>

// );

// export default App;

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Services from "./components/Services";
import ProductDetailsScreen from "./components/ProductDetailsScreen";
import PaymentPage from "./components/PaymentPage ";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="PaymentPage" component={PaymentPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



// import React, { useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// // import HomeScreen from "./screens/HomeScreen";
// import Services from "./components/Services";
// // import ProtectedScreen from "./screens/ProtectedScreen";
// import RegisterScreen from "./screens/RegisterScreen";

// const Stack = createStackNavigator();

// const App = () => {
//   // Step 1: Define state for user authentication
//   const [userToken, setUserToken] = useState(null);

//   // Step 2: Implement the sign in functionality
//   const signIn = (token) => {
//     // You can implement the sign in logic here
//     // For example, you can call an API to authenticate the user
//     // and update the userToken state with the token received
//     setUserToken(token);
//   };

//   // Step 3: Implement the sign out functionality
//   const signOut = () => {
//     // You can implement the sign out logic here
//     // For example, you can clear the user token, reset user state, etc.
//     setUserToken(null);
//   };

//   // Step 4: Render the screens conditionally based on authentication state
//   return (
//     <NavigationContainer>
//       {userToken ? (
//         // If user is authenticated, render the HomeScreen
//         <Stack.Navigator>
//           <Stack.Screen name="Services" component={Services} />
//           {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
//           {/* ... Add more screens as needed */}
//           <Stack.Screen name="Protected" component={ProtectedScreen} />
//         </Stack.Navigator>
//       ) : (
//         // If user is not authenticated, render the SignInScreen
//         <RegisterScreen onSignIn={signIn} />
//       )}
//     </NavigationContainer>
//   );
// };

// export default App;
