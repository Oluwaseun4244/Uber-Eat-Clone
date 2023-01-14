import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import MenuItems from "../Components/restaurantDetail/MenuItems";
import firebase from "../firebase";
import { ScrollView } from "react-native-gesture-handler";

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Lasagna6",
        description: "With butter lettuce, tomato and sauce",
        price: "$93.00",
        image:
          "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg",
      },
    ],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUsd = `$${total}`;

  useEffect(() => {
    const db = firebase.firestore();
  const unSubscribe =  db.collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => setLastOrder(doc.data()))
      );

      return () => unSubscribe()
  }, []);

  return (
    <View style={styles.safeArea}>
        <View style={{margin: 15, alignItems: "center", height: "100%"}}>

        
      <LottieView
        style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        loop={false}
        speed={0.5}
      />
      <Text style={{fontSize: 20, fontWeight: "bold"}}>
        Your order at {restaurantName} has been placed for {totalUsd}{" "}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false} >

      <MenuItems hideCheckbox foods={lastOrder.items} marginLeft={10} />
      <LottieView
        style={{ height: 200, alignSelf: "center", marginBottom: 30}}
        source={require("../assets/animations/cooking.json")}
        autoPlay
        // loop={false}
        speed={0.5}
        />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    marginTop: 30,
    backgroundColor: "white",
    flex: 1,
  },
});
