import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
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
        "https://bike-server1.onrender.com/api/customer/register",
        userData
      );
      console.log(response);
      alert("Sign up successful");
    } catch (err) {
      console.log(err);
      alert("Sign up failed");
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

        {/* Shortcut btn */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Services")}
        >
          <Text style={styles.buttonText}>Services</Text>
        </TouchableOpacity>

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

         <TouchableOpacity style={styles.signupButton} onPress={handleRegister}>
           <Text style={styles.signupButtonText}>Sign Up</Text>
         </TouchableOpacity>

         <Text>
           If you already have an account?{" "}
           <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
             <Text style={styles.loginLink}>Login</Text>
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
    backgroundColor: "red",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  signupButton: {
    backgroundColor: "#FEC324",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  signupButtonText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  loginLink: {
    fontWeight: "bold",
    color: "blue",
  },
});

export default RegisterScreen;
