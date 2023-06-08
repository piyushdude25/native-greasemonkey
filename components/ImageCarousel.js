import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image paths
  const carouselImages = [
    require("../assets/bike.png"),
    require("../assets/car1.png"),
    require("../assets/car2.png"),
    // Add more images as needed
  ];
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Auto-slide every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.carouselContainer}>
      <TouchableOpacity style={styles.button} onPress={handlePrev}>
        {/* <Text style={styles.buttonText}>Prev</Text> */}
      </TouchableOpacity>

      <Image
        source={carouselImages[currentIndex]}
        style={styles.image}
        resizeMode="cover"
      />

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        {/* <Text style={styles.buttonText}>Next</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: "5%",
    // height: 100,
  },
  image: { height: 150, width: 300, borderRadius: 10 },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
  },
});

export default ImageCarousel;
