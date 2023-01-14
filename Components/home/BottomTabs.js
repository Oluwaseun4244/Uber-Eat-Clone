import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon iconName="home" text="Home" />
      <Icon iconName="search" text="Browse" />
      <Icon iconName="shopping-bag" text="Grocery" />
      <Icon iconName="receipt" text="Orders" />
      <Icon iconName="user" text="Account" />
    </View>
  );
}

const Icon = ({ iconName, text }) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={iconName}
        size={25}
        style={{ marginBottom: 3, alignSelf: "center" }}
      />
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);
