import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native';


const BottomNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.BottomNavigationContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('home')} >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('movies')} >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Film</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('cinemas')} >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Biografer</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  BottomNavigationContainer: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: "space-around",
    position: 'absolute', //Makes footer stick to the bottom
    bottom: 0, //Makes footer stick to the bottom
    flexDirection: "row",
  },
  button: {
  
  },
  buttonText: {
    color: "#676d7c"
  }
})

export default BottomNavigation