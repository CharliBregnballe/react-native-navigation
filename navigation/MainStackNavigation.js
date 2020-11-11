import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

// This navigator controls all the stack screens, like movies overview, cinema overview
// Without this the navigation between the base screens do not work.


import Home from "../screens/Home";
import Movies from "../screens/Movies";
import Cinemas from "../screens/Cinemas";
import Cinema from "../screens/Cinema";

const MainStack = createStackNavigator();

function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Kino.dk" component={Home} options={{ title: 'Kino.dk', headerStyle: {
          backgroundColor: '#1d1d27',
          shadowColor: 'transparent'
        },
        headerTintColor: '#fffdfd',
        headerTitleStyle: {
          fontWeight: 'bold',
          
        },
        headerBackTitleStyle: {
          fontSize: 15,
          color: "#fffdfd"
        }, }} />
      <MainStack.Screen name="movies" component={Movies} options={{ title: 'Film',
        headerStyle: {
          backgroundColor: '#1d1d27',
          shadowColor: 'transparent'
        },
        headerTintColor: '#fffdfd',
        headerTitleStyle: {
          fontWeight: 'bold',
          
        },
        headerBackTitleStyle: {
          fontSize: 15,
          color: "#fffdfd"
        },
        
       }} 
      />
      <MainStack.Screen name="cinemas" component={Cinemas} options={{ title: 'Biografer',
        headerStyle: {
          backgroundColor: '#1d1d27',
          shadowColor: 'transparent'
        },
        headerTintColor: '#fffdfd',
        headerTitleStyle: {
          fontWeight: 'bold',
          
        },
        headerBackTitleStyle: {
          fontSize: 15,
          color: "#fffdfd"
        },
        
       }} 
      />
      <MainStack.Screen name="cinema" component={Cinema} options={{ title: '',
        headerStyle: {
          backgroundColor: '#1d1d27',
          shadowColor: 'transparent'
        },
        headerTintColor: '#fffdfd',
        headerTitleStyle: {
          fontWeight: 'bold',
          
        },
        headerBackTitleStyle: {
          fontSize: 15,
          color: "#fffdfd"
        },
        
       }} 
      />
    </MainStack.Navigator>
  )
}

export default MainStackNavigator;