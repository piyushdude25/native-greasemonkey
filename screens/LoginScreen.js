// import React, { useState } from "react";
// import { View, Text, TextInput, Button } from "react-native";

// const LoginScreen = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = (e) => {
//     e.prev
//     // Implement your sign-in logic here
//     console.log(
//       "Sign In pressed with email:",
//       email,
//       "and password:",
//       password
//     );
//     navigation.navigate("Services");
//   };

//   return (
//     <View>
//       <Text>Sign In Page</Text>
//       <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
//       <TextInput
//         placeholder="Password"
//         onChangeText={setPassword}
//         value={password}
//         secureTextEntry={true}
//       />
//       <Button title="Sign In" onPress={handleSignIn} />
//       <Button
//         title="Don't have an account? Register"
//         onPress={() => navigation.navigate("RegisterScreen")}
//       />
//     </View>
//   );
// };

// export default LoginScreen;




import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignin = () => {
    // perform authentication logic here
    // ...

    // Navigate to the services page after successful authentication
    navigation.navigate("Services");
  };

  return (
    <View>
      <Text>Sign In</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignin} />
    </View>
  );
};

export default LoginScreen;
