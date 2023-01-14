import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export const restaurantArr = [
  {
    name: "Mr Biggs",
    image_url:
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg",
    price: "$$",
    reviews: "1244",
    rating: "3.5",
  },
  {
    name: "Sweeet Sensation",
    image_url:
      "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
    price: "$$",
    reviews: "1244",
    rating: "4.5",
  },
  {
    name: "Tastee Fried Chicken",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
    price: "$$",
    reviews: "1244",
    rating: "4.0",
  },
];
export default function RestaurantItems({ data, navigation }) {
  return data.map((item, i) => (
    <TouchableOpacity
      key={i}
      activeOpacity={0.5}
      onPress={() => navigation.navigate("RestaurantDetail", {
        name: item.name,
        image: item.image_url,
        price: item.price,
        reviews: item.review_count,
        rating: item.rating,
        categories: item.categories
      })}
    >
      <View
        style={{
          marginTop: 10,
          padding: 15,
          backgroundColor: "#fff",
          marginBottom: 30,
        }}
      >
        <RestaurantImage item={item} />
        <RestaurantInfo item={item} />
      </View>
    </TouchableOpacity>
  ));
}

const RestaurantImage = ({ item }) => (
  <>
    <Image
      source={{
        uri: item.image_url,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({ item }) => (
  <View
    style={{
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>35-45 . min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
      }}
    >
      <Text>{item.rating}</Text>
    </View>
  </View>
);
