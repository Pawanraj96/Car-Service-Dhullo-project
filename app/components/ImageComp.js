import React from "react";
import { Image, StyleSheet, ImageBackground, View, Text } from "react-native";

function ImageComp(props) {
  return (
    <View>
      <ImageBackground style={styles.background}>
        <Image style={styles.image} source={require("../assets/carwashing.png")} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: "300%",
    position: "absolute",
    top: "280%",
  },
 
});

export default ImageComp;
