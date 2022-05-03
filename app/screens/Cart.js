import { StyleSheet, Text, View, Button, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux'

const arrowdown = <Icon name="arrow-down" color={'green'} />
export default function Cart(props) {
  const { vehicleType, carName, carCompany } = useSelector((state) => state)

  return (
    <View>
      
      <View style={{ display: 'flex', flexDirection: 'row', margin: 20 }}>
        <Image
          source={require('../assets/carwashing.jpg')}
          style={{ width: '15%', height: 50 }}
        />
        <View style={{ padding: 10 }}>
          <Text>Waterless Car Wash</Text>
          <Text>
            {vehicleType} {carName} {carCompany} {`$999`}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          borderStyle: 'solid',
          borderColor: '#D3D3D3',
          borderWidth: 1,
          padding: 10,
          shadowColor: '#D3D3D3',
          shadowOpacity: 2,
          shadowRadius: 4,
          shadowOffset: {
            height: 1,
            width: 1,
          },
        }}
      >
        <Text>Subscription Package : Silver</Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
        }}
      >
        <Text style={styles.text}>Date {arrowdown}</Text>
        <Text style={styles.text}>Time {arrowdown}</Text>
        <Text style={styles.text}>Duration {arrowdown}</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
          marginTop: -5,
        }}
      >
        <Text>Price</Text>
        <Text>999</Text>
      </View>
      <View style={styles.view}>
        <Text>Add Address</Text>
        <Icon name="plus-circle" color={'green'} style={{ fontSize: '100%' }} />
      </View>
      <View style={styles.view}><Text>Apply Coupon</Text></View>
      <View style={styles.money}><Text>Use Money From Wallet</Text></View>
      <View style={{ margin: 20, marginTop: -5 }}>
        <table>
          <tbody>
            <tr>
              <td>Washing</td>
              <td>299</td>
            </tr>
            <tr>
              <td>GST</td>
              <td>299</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>299</td>
            </tr>
            <tr>
              <td>Wallet</td>
              <td>299</td>
            </tr>
          </tbody>
        </table>
      </View>
      <Button title="Go TO Checkout" color={'orange'} />
    </View>
  )
}

const styles = StyleSheet.create({
 
  text: {
    borderStyle: 'solid',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    padding: 10,
    shadowColor: '#D3D3D3',
    shadowOpacity: 2,
    shadowRadius: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    color:"green",
    marginTop: -5,
    borderStyle: 'solid',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    padding: 10,
    shadowColor: '#D3D3D3',
    shadowOpacity: 2,
    shadowRadius: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  money: {
    borderStyle: 'solid',
    borderColor: 'orange',
    borderWidth: 1,
    padding: 10,
    margin: 20,
    marginTop: -5,
    borderStartColor: 'orange',
    backgroundColor: 'orange',
    color: 'white',
  },
})
