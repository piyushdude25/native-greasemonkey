import React, { useState, useEffect } from "react";
import { View, Text, Slider } from "react-native";

const MySlider = () => {
  const [value, setValue] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://bike-backend.onrender.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const renderSlide = (item) => {
    return (
      <View key={item.id}>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </View>
    );
  };

  return (
    <View>
      <Slider value={value} max={items.length - 1} onValueChange={setValue}>
        {items.map((item, index) => (
          <View key={index} style={{ width: 200 }}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        ))}
      </Slider>
    </View>
  );
};

export default MySlider;
