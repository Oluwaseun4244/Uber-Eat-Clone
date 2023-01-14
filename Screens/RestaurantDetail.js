import { View, Text } from "react-native";
import React from "react";
import About from "../Components/restaurantDetail/About";
import { Divider } from "react-native-elements";
import MenuItems from "../Components/restaurantDetail/MenuItems";
import ViewCart from "../Components/restaurantDetail/ViewCart";

export default function RestaurantDetail({route, navigation}) {
  const foods = [
    {
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce",
      price: "$13.50",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg",
    },
    {
      title: "Lasagna2",
      description: "With butter lettuce, tomato and sauce",
      price: "$9.90",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg",
    },
    {
      title: "Lasagna3",
      description: "With butter lettuce, tomato and sauce",
      price: "$33.00",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg",
    },
    {
      title: "Lasagna4",
      description: "With butter lettuce, tomato and sauce",
      price: "$93.00",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg",
    },
    {
      title: "Lasagna5",
      description: "With butter lettuce, tomato and sauce",
      price: "$93.00",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg",
    },
    {
      title: "Lasagna6",
      description: "With butter lettuce, tomato and sauce",
      price: "$93.00",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg",
    },
    {
      title: "Lasagna7",
      description: "With butter lettuce, tomato and sauce",
      price: "$93.00",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg",
    },
    {
      title: "Lasagna99",
      description: "With butter lettuce, tomato and sauce",
      price: "$93.00",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg",
    },
  ];
  return (
    <View style={{flex: 1}}>
      <About route={route}  />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems RestaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
