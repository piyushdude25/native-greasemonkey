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
import axios from "axios";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignin = async () => {
    const userData = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:5050/api/newCustomer/customerlogin",
        userData
      );
      console.log(response);
      // Check the HTTP status code for authentication success
      if (response.status === 200) {
        setEmail("");
        setPassword("");

        // Save user information in local storage
        localStorage.setItem("customer-user", JSON.stringify(response.data));

        navigation.navigate("Services");
      } else {
        console.log("Authentication failed");
        // Display an error message or take appropriate action
      }
    } catch (err) {
      console.log(err);
    }
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
          <Text style={styles.heading}>
            SERVICE YOUR BIKE/CAR AT NEAR LOCATION
          </Text>
          <Text style={styles.subheading}>
            20+ Certified workshop near your location
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Login</Text>
          <View style={styles.inputWrapper}>
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
              onPress={handleSignin}
              color="#FEC324"
              style={styles.button}
              title="Login"
            />
            <Text>
              If You have not account?{" "}
              <TouchableOpacity
                onPress={() => navigation.navigate("RegisterScreen")}
              >
                <Text style={{ fontWeight: "bold" }}>Sign Up</Text>
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
  },
  textContainer: {
    margin: 20,
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
    // borderWidth: 1,
    borderRadius: 7,
    alignItems: "center",
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
    width: "80%",
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

export default LoginScreen;
