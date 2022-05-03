import React from 'react'
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

const COLORS = { primary: '#1f145c', white: '#fff' }

function TextComp() {
 
  const navigation = useNavigation()

  return (
    <View>
      {/* <View style={styles.title}>
        <Icon name="arrow-left" size={20} color="grey" />
        <Text style={{ marginLeft: 10 }}>Washing</Text>
      </View> */}

      <View style={styles.header}>
        <Text>One-Time</Text>
        <Text style={{ color: 'green', fontWeight: 'bold' }}>Silver</Text>
        <Text>Gold</Text>
        <Text>Platinum</Text>
      </View>

      <View style={styles.head}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 5 }}>
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
            {' '}
            Starts from <Text style={{ color: 'red' }}>Rs. 699</Text>
          </Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemText}>Add your Car</Text>
        <View style={styles.itemRight}>
          <Button
            color={'white'}
            title={
              <Icon
                name="plus-circle"
                color={'green'}
                style={{ fontSize: '150%' }}
                onPress={() => navigation.navigate('Add')}
              />
            }
          />
        </View>
      </View>

      <Text style={styles.text}>
        Select a preferred date {'&'} time for exterior
      </Text>
      <View style={styles.cal}>
        <TextInput
          style={styles.textInput}
          placeholder="Select Date & Time"
          name="val"
          type='date'
          // value={date.val}
          // onChange={handlechange}
        />
        <View style={styles.itemRight}>
          <Icon name="calendar" color={'green'} style={{ fontSize: '150%' }} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // title: {
  //   padding: 10,
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   width: '100%',
  //   borderBottomColor: 'black',
  //   // borderStyle: "solid black",
  //   fontWeight: '900',
  //   borderBottomWidth: 1,
  //   borderColor: 'lightgrey',
  // },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
    margin: '5%',
    fontWeight: 'bold',
    marginBottom: '180%',
  },
  head: {
    position: 'absolute',
    top: '37%',
    width: '100%',
    padding: '5%',
  },
  done: {
    flexDirection: 'row',
    padding: 3,
  },
  item: {
    shadowColor: '#D3D3D3',
    shadowOpacity: 2,
    shadowRadius: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '58%',
    padding: '2%',
    marginLeft: '5%',
    width: '90%',
    height: '7%',
  },
  itemRight: {
    elevation: 30,
    height: '60%',
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 20,
  },
  cal: {
    shadowColor: '#D3D3D3',
    shadowOpacity: 2,
    shadowRadius: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '73%',
    padding: '2%',
    marginLeft: '5vw',
    width: '90%',
    height: '7vh',
  },
  text: {
    position: 'absolute',
    marginTop: '130%',
    marginLeft: '5%',
    fontWeight: '5%',
    fontSize: '5vw',
  },
})

export default TextComp
