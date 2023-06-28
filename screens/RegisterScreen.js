// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import MenuButton from "../components/MenuButton";
// import axios from "axios";

// const RegisterScreen = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigation = useNavigation();

//   const handleRegister = async () => {
//     const userData = {
//       name,
//       email,
//       password,
//     };
//     try {
//       const response = await axios.post(
//         "http://localhost:5050/api/newCustomer/customerregister",
//         userData
//       );
//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//     setEmail("");
//     setName("");
//     setPassword("");
//   };

//   return (

//     <View>
//       <View
//         style={{
//           width: "100%",
//           height: "45%",
//           margin: 0,
//         }}
//       >
//         <Image
//           style={{
//             width: "100%",
//             height: "100%",
//             resizeMode: "stretch",
//           }}
//           source={require("../assets/signupBike.jpg")}
//         />
//       </View>

//       <View
//         style={{
//           width: "100%",
//           height: "55%",
//           margin: 0,
//         }}
//       >
//         <View style={{ margin: 20 }}>
//           <View>
//             <Text
//               style={{
//                 fontSize: 33,
//                 color: "#39588f",
//                 fontWeight: 800,
//                 padding: 5,
//                 textAlign: "center",
//               }}
//             >
//               FAST & EASY BOOKING
//             </Text>
//             <Text
//               style={{
//                 fontSize: 20,
//                 color: "#39588f",
//                 fontWeight: 600,
//                 textAlign: "center",
//               }}
//             >
//               Services, Repair,Replacement, AMC
//             </Text>
//           </View>

//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               gap: 5,
//             }}
//           >
//             <View
//               style={{
//                 flex: 2,
//                 width: "100%",
//                 // height:'1%',
//                 borderWidth: 0.5,

//                 alignItems: "center",
//               }}
//             >
//               <View>
//                 <Text style={{ fontSize: 17, fontWeight: 700, color: "black" }}>
//                   Sign Up
//                 </Text>
//               </View>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   gap: 10,
//                   paddingTop: 10,
//                   paddingBottom: 10,
//                   alignItems: "center",
//                 }}
//               >
//                 <View
//                   style={{
//                     flex: 2,
//                     flexDirection: "column",
//                     // borderWidth: 1,
//                     alignItems: "center",
//                     borderRadius: 7,
//                     width: 100,
//                   }}
//                 >
//                   <TextInput
//                     style={{
//                       color: "grey",
//                       fontWeight: "bold",
//                       width: "200%",
//                       borderWidth: 1,
//                       marginBottom: 5,
//                       borderRadius: 5,
//                       padding: 10,
//                     }}
//                     placeholder="Full Name"
//                     value={name}
//                     onChangeText={(text) => setName(text)}
//                   />
//                   <TextInput
//                     style={{
//                       color: "grey",
//                       fontWeight: "bold",
//                       width: "100%",
//                       borderWidth: 1,
//                       marginBottom: 5,
//                       borderRadius: 5,
//                       padding: 10,
//                     }}
//                     placeholder="Email Id:"
//                     value={email}
//                     onChangeText={(text) => setEmail(text)}
//                   />
//                   <TextInput
//                     style={{
//                       color: "grey",
//                       fontWeight: "bold",
//                       width: "100%",
//                       borderWidth: 1,
//                       marginBottom: 5,
//                       borderRadius: 5,
//                       padding: 10,
//                     }}
//                     placeholder="Password :"
//                     value={password}
//                     onChangeText={(text) => setPassword(text)}
//                     secureTextEntry={true}
//                   />

//                   <View style={{ paddingTop: 2, paddingBottom: 2 }}>
//                     <Button
//                       onPress={handleRegister}
//                       color="#FEC324"
//                       style={{ color: "#E8E2E2" }}
//                       title="Sign Up"
//                     ></Button>
//                   </View>

//                   <View>
//                     <Text>
//                       If You have Already account?{" "}
//                       <TouchableOpacity
//                         onPress={() => navigation.navigate("LoginScreen")}
//                       >
//                         <Text style={{ fontWeight: "bold" }}>Login</Text>
//                       </TouchableOpacity>
//                     </Text>
//                   </View>

//                   <Button
//                     title="go to AddMyVehicle"
//                     onPress={() => navigation.navigate("AddVehicle")}
//                   />
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default RegisterScreen;

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuButton from "../components/MenuButton";
import axios from "axios";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = async () => {
    const userData = {
      name,
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:5050/api/newCustomer/customerregister",
        userData
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/signupBike.jpg")}
        />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>FAST & EASY BOOKING</Text>
          <Text style={styles.subheading}>
            Services, Repair, Replacement, AMC
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Sign Up</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Email Id:"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password :"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
            <Button
              onPress={handleRegister}
              color="#FEC324"
              style={styles.button}
              title="Sign Up"
            />
            <Text>
              If You already have an account?{" "}
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <Text style={{ fontWeight: "bold" }}>Login</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: "45%",
    margin: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  formContainer: {
    width: "100%",
    height: "55%",
    margin: 0,
    padding: 20,
  },
  textContainer: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 33,
    color: "#39588f",
    fontWeight: "800",
    padding: 5,
    textAlign: "center",
  },
  subheading: {
    fontSize: 20,
    color: "#39588f",
    fontWeight: "600",
    textAlign: "center",
  },
  inputContainer: {
    flex: 2,
    width: "100%",
    // borderWidth: 0.5,
    alignItems: "center",
    borderRadius: 7,
  },
  label: {
    fontSize: 17,
    fontWeight: "700",
    color: "black",
    paddingBottom: 10,
  },
  inputWrapper: {
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 7,
    width: "100%",
  },
  input: {
    color: "grey",
    fontWeight: "bold",
    width: "100%",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    paddingTop: 2,
    paddingBottom: 2,
  },
});

export default RegisterScreen;
