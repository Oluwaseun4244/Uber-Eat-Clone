import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ setCity }) {
  const [cityInput, SetCityInput] = useState("");

  const changeCity = (text) => {

    if (text.length > 1) {
      setCity(text);
    }
  };
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyDp1f7xeqSKgfp-5_3mhTYyWqmvi9wXLgA" }}
        // query={{ key: "AIzaSyDdMYDTLUVlLo0GxhtxNH_9vvddCjBnrZc" }}
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(",")[0];
          setCity(city);
        }}
        textInputProps={{
          onChangeText: (text) => {
            SetCityInput(text);
          },
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <TouchableOpacity onPress={() => changeCity(cityInput)}>
              <Text>Search</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
