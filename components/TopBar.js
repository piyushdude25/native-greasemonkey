import React, { useEffect, useState } from "react";
import { View,Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import { useNavigation } from "@react-navigation/native";

const TopBar = () => { 

  const navigation = useNavigation();

    const [location, setLocation] = useState(null);

    useEffect(() => {
      // Get the user's current location automatically
      getCurrentLocation();
    }, []);

    const getCurrentLocation = () => {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.log("Error getting location:", error);
        }
      );
    };

    const handleManualSelection = () => {
      // Implement your logic to open a location picker or input screen
      // and update the location state with the selected location
      // For simplicity, we'll just set a default location here
      setLocation({ latitude: 37.7749, longitude: -122.4194 });
    };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.locationPicker}>
        <Text style={styles.title}>Location</Text>

        {location ? (
          <Text>
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </Text>
        ) : (
          <Text>Loading location...</Text>
        )}

        {/* <MenuButton onPress={() => navigation.navigate("Services")} /> */}

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Manually Select Location</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Menu button on the right side */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate("ProfileList")}
      >
        <Image source={require("../assets/menuBtn.png")} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  locationPicker: {
    // Styling for the location picker container
  },
  menuButton: {
    // Styling for the menu button container
  },
  image: {
    width: 25,
    height: 25,
    margin: "5%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "yellow",
    padding: 8,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  }, 
});

export default TopBar;
