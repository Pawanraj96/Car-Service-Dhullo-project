import React from 'react'
import { Image, StyleSheet, Button, View } from 'react-native'
import TextComp from '../components/TextComp'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const COLORS = { primary: '#1f145c', white: '#fff' }

function WashingServiceScreen() {
  const { toggle } = useSelector((state) => state)

  const navigation = useNavigation()

  const navigateToCart = () => {
    navigation.navigate('MyCart')
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View>
        <Image
          source={require('../assets/carwashing.jpg')}
          style={styles.img}
        />
      </View>
      <TextComp />
      <View style={styles.butt}>
        {toggle ? (
          <Button
            title="Add to Cart"
            color={'orange'}
            onPress={navigateToCart}
          />
        ) : (
          <Button
            title="Add to Cart"
            color={'orange'}
            disabled
            onPress={navigateToCart}
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  butt: {
    position: 'absolute',
    top: '85%',
    width: '100%',
    padding: '2%',
  },
  img: {
    width: '90%',
    height: '25vh',
    margin: '5%',
    position: 'absolute',
    marginTop: '15%',
  },
})

export default WashingServiceScreen
