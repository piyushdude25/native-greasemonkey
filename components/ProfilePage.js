// import React, { useState, useEffect } from "react";
// import { View, TextInput, Button, StyleSheet, Image, Text } from "react-native";

// const ProfilePage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [birth, setBirth] = useState("");
//   const [value, setValue] = useState("");

//   useEffect(() => {
//     // Retrieve user information from local storage
//     const userString = localStorage.getItem("user");
//     if (userString) {
//       const user = JSON.parse(userString);
//       setName(user.name);
//       setEmail(user.email);
//       setPhone(user.phone);
//       setBirth(user.birth);
//     }
//   }, []);

//   const handleNameChange = (text) => {
//     setName(text);
//   };

//   const handleEmailChange = (text) => {
//     setEmail(text);
//   };

//   const handlePhoneChange = (text) => {
//     setPhone(text);
//   };

//   const handleBirthChange = (text) => {
//     setBirth(text);
//   };

//   const handleUpdate = () => {
//     // Handle form submission here
//     // Update the user information in local storage

//     const updatedUser = {
//       name,
//       email,
//       phone,
//       birth,
//     };

//     localStorage.setItem("user", JSON.stringify(updatedUser));

//     setValue("");
//   };

//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           flexDirection: "row",
//           alignContent: "space-between",
//           margin: 5,
//         }}
//       >
//         <Image
//           style={styles.profileImage}
//           source={require("../assets/profile-user.png")}
//         />
//       </View>
//       <Text style={styles.name}>{name}</Text>
//       <Text style={styles.address}>{email}</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={handleNameChange}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={handleEmailChange}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Phone"
//         value={phone}
//         onChangeText={handlePhoneChange}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Birthday"
//         value={birth}
//         onChangeText={handleBirthChange}
//       />
//       <TextInput style={styles.input} placeholder="Date of Bike Purchase" />

//       <Image
//         source={require("../assets/Gallery.png")}
//         style={{ height: 200, width: 300 }}
//       />

//       <Button
//         value={value}
//         title="Update Profile"
//         onPress={handleUpdate}
//         style={{ backgroundColor: "#fec324" }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingHorizontal: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     backgroundColor: "#fec324",
//     borderRadius: 5,
//     width: 250,
//     height: 40,
//     margin: 10,
//   },
//   profileImage: {
//     width: 75,
//     height: 75,
//     borderRadius: 75,
//     marginBottom: 20,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   address: {
//     fontSize: 16,
//   },
// });

// export default ProfilePage;


import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Image, Text } from "react-native";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    // Retrieve user information from local storage
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setBirth(user.birth);
    }
  }, []);

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePhoneChange = (text) => {
    setPhone(text);
  };

  const handleBirthChange = (text) => {
    setBirth(text);
  };

  const handleUpdate = () => {
    // Handle form submission here
    // Update the user information in local storage

    const updatedUser = {
      name,
      email,
      phone,
      birth,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    setValue("");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignContent: "space-between",
          margin: 5,
        }}
      >
        <Image
          style={styles.profileImage}
          source={require("../assets/profile-user.png")}
        />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.address}>{email}</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        defaultValue={name}
        onChangeText={handleNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        defaultValue={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        defaultValue={phone}
        onChangeText={handlePhoneChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Birthday"
        defaultValue={birth}
        onChangeText={handleBirthChange}
      />
      <TextInput style={styles.input} placeholder="Date of Bike Purchase" />

      <Image
        source={require("../assets/Gallery.png")}
        style={{ height: 200, width: 300 }}
      />

      <Button
        value={value}
        title="Update Profile"
        onPress={handleUpdate}
        style={{ backgroundColor: "#fec324" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fec324",
    borderRadius: 5,
    width: 250,
    height: 40,
    margin: 10,
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
  },
});

export default ProfilePage;
