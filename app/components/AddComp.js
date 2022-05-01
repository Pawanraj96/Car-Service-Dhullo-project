import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const COLORS = { primary: "#1f145c", white: "#fff" };
function AddComp({ setform, setinitialState }) {
    const hideForm = ()=>{
        setform(false)
    }
  return (
    <View style={styles.addForm}>
      <Text style={styles.header}>Add Your Car</Text>
      <Icon name="minus-circle" color={COLORS.white} size={10} onPress={hideForm} />
      <TextInput
        style={styles.textinput}
        placeholder="Vehicle Type"
        underlineColorAndroid={"transparent"}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Car Company"
        underlineColorAndroid={"transparent"}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Car Name"
        underlineColorAndroid={"transparent"}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Enter Address"
        underlineColorAndroid={"transparent"}
      />
      <Button color="orange" title="Add Car" />
    </View>
  );
}

const styles = StyleSheet.create({
  addForm: {
    alignSelf: "stretch",
  },
  header: {
    fontSize: 24,
    color: "black",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#199187",
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "black",
    borderBottomColor: "#f8f8f8",
    borderColor: "#fff",
    borderBottomWidth: 1,
  },
});

export default AddComp;
