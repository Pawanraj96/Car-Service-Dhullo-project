import React from "react";
import {
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  Button,
  View,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
import AddComp from "./AddComp";

const COLORS = { primary: "#1f145c", white: "#fff" };

function TextComp(props) {
  const [form, setform] = useState(false);
  
  return (
    <View>
      <View style={styles.title}>
        <Icon name="arrow-left" size={20} color="grey" />
        <Text style={{ marginLeft: 10 }}>Washing</Text>
      </View>

      <View style={styles.header}>
        <Text>One-Time</Text>
        <Text style={{ color: "green", fontWeight: "bold" }}>Silver</Text>
        <Text>Gold</Text>
        <Text>Platinum</Text>
      </View>

      <View style={styles.head}>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 5 }}>
          What do you get
        </Text>

        <View style={styles.done}>
          <Icon name="check-circle" color="green" />
          <Text> Thrice a week outer wash</Text>
        </View>

        <View style={styles.done}>
          <Icon name="check-circle" color="green" />
          <Text> Twice a month basic interior cleaning</Text>
        </View>

        <View style={styles.done}>
          <Icon name="check-circle" color="green" />
          <Text>
            {" "}
            Starts from <Text style={{ color: "red" }}>Rs. 699</Text>
          </Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemText}>Add your Car</Text>
        <View style={styles.itemRight}>
          <Icon name="add" color={COLORS.white} size={15}  />
        </View>
      </View>

      <View style={styles.cal}>
        <Text>Select Date & Time</Text>
        <View style={styles.itemRight}>
          <Icon name="insert-invitation" color={COLORS.white} size={20} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    borderBottomColor: "black",
    // borderStyle: "solid black",
    fontWeight: "900",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "grey",
    margin: 20,
    fontWeight: "bold",
    marginBottom: "180%",
  },
  head: {
    position: "absolute",
    top: "37%",
    width: "100%",
    padding: "5%",
  },
  done: {
    flexDirection: "row",
    padding: 3,
  },
  item: {
    backgroundColor: "lightblue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: "55%",
    padding: 5,
    marginLeft: "5%",
    width: "90%",
    height: "8%",
  },
  itemRight: {
    backgroundColor: "blue",
    borderRadius: 25,
    elevation: 30,
    height: "60%",
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 20,
  },
  cal: {
    backgroundColor: "lightblue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: "65%",
    padding: "1.5%",
    marginLeft: 20,
    width: "90%",
    height: 60,
  },
});

export default TextComp;
