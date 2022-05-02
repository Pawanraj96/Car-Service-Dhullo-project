import React from "react";
import {
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  Button,
  View,
} from "react-native";
import { SafeAreaView } from "react-native";
import ImageComp from "../components/ImageComp";
import TextComp from "../components/TextComp";
import { useState } from "react";


const COLORS = { primary: "#1f145c", white: "#fff" };

function WashingServiceScreen(props) {
  const [toggle, settoggle] = useState(true);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ImageComp />
      <TextComp />
      <View style={styles.butt}>
        <Button  title="Add to Cart" color={"orange"} disabled={toggle}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  butt: {
    position: "absolute",
    top: '80%',
    width:"100%",
    padding:20,
   
  },
});

export default WashingServiceScreen;
