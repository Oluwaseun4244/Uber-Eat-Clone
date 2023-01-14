import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Button from "../Components/Button";
// import styles from '../Styles/homeStyles'
import HeaderTabs from "../Components/home/HeaderTabs";
import { StyleSheet } from "react-native";
import SearchBar from "../Components/home/SearchBar";
import Categories from "../Components/home/Categories";
import RestaurantItems, { restaurantArr } from "../Components/home/RestaurantItems";
import { Divider } from "react-native-elements";
import BottomTabs from "../Components/home/BottomTabs";

const yelp_api_key =
  "ylJWOJHCUt1wqbujqMOQMSrCo5HBR3b8tu2YvXsJOf8iJ1dolZKq2dlk6mC7LzCzdVppg14ucjMU0UcvsPX1aWVsdze1jgtjo-aba3omZEn7XdhMvCt1lTJh4vBWY3Yx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(restaurantArr);
  const [city, setCity] = useState("San Fransisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantFromYelp = () => {
    const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const options = {
      headers: {
        Authorization: `Bearer ${yelp_api_key}`,
      },
    };

    return fetch(url, options)
      .then((res) => res.json())
      .then((result) => {
        setRestaurantData(
          result.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        );
        console.log("result...", result.businesses);
      });
  };

  React.useEffect(() => {
    getRestaurantFromYelp();
  }, [city, activeTab]);

  return (
    <View style={styles.safeArea}>
      <View style={{ backgroundColor: "#ffffff", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems data={restaurantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5151ff",
    alignItems: "center",
    justifyContent: "center",
  },
  safeArea: {
    marginTop: 30,
    backgroundColor: "#eee",
    flex: 1,
  },
  text: {
    color: "#ffffff",
    fontSize: 32,
  },
});
