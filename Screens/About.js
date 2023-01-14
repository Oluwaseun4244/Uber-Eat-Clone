import React from 'react'
import { Text, View } from 'react-native'
import Button from '../Components/Button'
import styles from '../Styles/aboutStyles'
import { useFonts } from 'expo-font';

export default function About({navigation}) {

    const [loaded] = useFonts({
        Eczar_Medium: require('../assets/fonts/Eczar-Medium.ttf'),
      });

      if (!loaded) {
        return null;
      }
  return (
  <View style={styles.container}>
    <Text style={[styles.text, {fontFamily:  "Eczar_Medium"}]}>ABOUT!!!</Text>
    <Button bgColor="white"  title="Go Home" onPressProp={()=>navigation.navigate("Home")} />
  </View>
  )
}
