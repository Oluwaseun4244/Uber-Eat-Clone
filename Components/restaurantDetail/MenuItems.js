import { View, Text, StyleSheet, Image, ScrollView,  } from "react-native";
import React, {useState} from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";



export default function MenuItems({ RestaurantName, foods, hideCheckbox, marginLeft= 0 }) {

  const dispatch = useDispatch();

  const selectItem = (item, checkBoxValue) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: RestaurantName,
        checkBoxValue: checkBoxValue,
      },
    });
  };

  const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);

  const isFoodInCart = (food, cartItems) => Boolean(cartItems.find(item => item.title == food.title))
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {foods.map((food, i) => (
          <View key={i}>
            <View style={styles.menuItemStyle}>
              {
                !hideCheckbox ?   <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                fillColor="green"
                onPress={(checkBoxValue) => selectItem(food, checkBoxValue)}
                isChecked={isFoodInCart(food, cartItems)}
              /> : <></>
              }
            
              <FoodInfo food={food} />
              <FoodImage food={food} marginLeft={marginLeft} />
            </View>
            <Divider
              width={0.5}
              orientation={"vertical"}
              style={{ marginHorizontal: 20 }}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

const FoodInfo = ({ food }) => (
  <View style={{ width: 220, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{food.title}</Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
);
const FoodImage = ({ food, marginLeft }) => (
  <View>
    <Image
      source={{ uri: food.image }}
      style={{ width: 100, height: 100, borderRadius: 8, marginLeft: marginLeft  }}
    />
  </View>
);
