import { View, Text, Image } from "react-native";
import React from "react";



export default function About({route}) {

  const { name, image, price, reviews, rating, categories } = route.params;
  
  const formatedCategories = categories.map(cat => cat.title).join(".")
  const description = `${formatedCategories}  ${price ? "." + price : ""} . ${rating} (${reviews})`
  return (
    <View>
      <RestaurantImage img={image} />
      <RestaurantTitle txt={name} />
      <RestaurantDescription desc={description} />
    </View>
  );
}

const RestaurantImage = ({ img }) => (
  <Image source={{ uri: img }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = ({ txt }) => (
  <Text
    style={{
      fontSize: 20,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {txt}
  </Text>
);

const RestaurantDescription = ({ desc }) => (
  <Text
    style={{
      fontSize: 15.5,
      fontWeight: "400",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {desc}
  </Text>
);
