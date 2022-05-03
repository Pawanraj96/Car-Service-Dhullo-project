import { StyleSheet } from 'react-native'
import WashingServiceScreen from './app/screens/WashingServiceScreen'
import AddComp from './app/components/AddComp'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Cart from './app/screens/Cart.js'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { useState } from 'react'

const Stack = createStackNavigator()

export default function App() {
  const [toggle, settoggle] = useState(false)
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Washing" component={WashingServiceScreen} />
          <Stack.Screen name="MyCart" component={Cart} />
          <Stack.Screen name="Add" component={AddComp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
})
