import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import WashingServiceScreen from "./app/screens/WashingServiceScreen";
import AddComp from "./app/components/AddComp";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();
export default function App() { 
  return (
    <View style={styles.container}>
      <WashingServiceScreen />
    </View>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="washingServiceScreen" component={WashingServiceScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  main: {
    backgroundColor: "#696969",
  },
});
