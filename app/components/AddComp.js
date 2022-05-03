import React from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  setAddress,
  setCarCompany,
  setCarName,
  setToggle,
  setVehicleType,
} from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const COLORS = { primary: '#1f145c', white: '#fff' }

function AddComp() {

  const navigation = useNavigation()
 
  const { vehicleType, carName, address, carCompany } = useSelector(
    (state) => state,
  )
  const dispatch = useDispatch()

  const handleSubmit = () => {
    setVehicleType(vehicleType)
    setCarCompany(carCompany)
    setCarName(carName)
    setAddress(address)
    navigation.navigate('Washing')
    dispatch(setToggle(true))
  }
  return (
    <View style={styles.addForm}>
      <View>
        <Text style={styles.header}>Add Your Car</Text>
        <View style={styles.itemRight}>
          <Button
            color={'white'}
            title={
              <Icon
                name="minus-circle"
                color={'green'}
                style={{ fontSize: '150%' }}
                onPress={() => navigation.navigate('Washing')}
              />
            }
          />
        </View>
      </View>
      <View style={{ marginTop: '5%' }}>
        <TextInput
          style={styles.textinput}
          placeholder="Vehicle Type"
          underlineColorAndroid={'transparent'}
          name="vehicleType"
          onChangeText={(val) => dispatch(setVehicleType(val))}
          value={vehicleType}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Car Company"
          underlineColorAndroid={'transparent'}
          name="carCompany"
          onChangeText={(val) => dispatch(setCarCompany(val))}
          value={carCompany}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Car Name"
          underlineColorAndroid={'transparent'}
          name="carName"
          onChangeText={(val) => dispatch(setCarName(val))}
          value={carName}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Enter Address"
          underlineColorAndroid={'transparent'}
          name="address"
          onChangeText={(val) => dispatch(setAddress(val))}
          value={address}
        />
        <Button
          color="orange"
          title="Add Car"
          type="submit"
          onPress={handleSubmit}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  addForm: {
    alignSelf: 'stretch',
    padding: '5%',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: '105%',
    color: 'black',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: '5%',
    color: 'black',
    borderBottomColor: '#f8f8f8',
    borderColor: '#fff',
    borderBottomWidth: 1,
  },
  itemRight: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: '-25%',
  },
})

export default AddComp
