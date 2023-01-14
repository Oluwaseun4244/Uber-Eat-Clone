import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs({activeTab, setActiveTab}) {

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}


//sub component in a component
const HeaderButton = ({ text, btnColor, textColor, activeTab, setActiveTab}) => (
  <TouchableOpacity
    style={{
      backgroundColor: activeTab == text ? 'black' : 'white',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
      
    }}
    onPress={()=> setActiveTab(text)}
  >
    <Text style={{ color: activeTab == text ? "white" : "black", fontSize: 15, fontWeight: "900" }}>
      {text}
    </Text>
  </TouchableOpacity>
);
