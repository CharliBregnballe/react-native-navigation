import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import BottomStackNavigator from "./BottomStackNavigator";

import Movie from "../screens/Movie";
import SeatSelector from "../screens/SeatSelector"
import MovieTrailer from "../screens/MovieTrailer"
import Movies from "../screens/Movies";
import Cinemas from "../screens/Cinemas"

const RootStack = createStackNavigator();

function RootStackNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none" initialRouteName="BottomStackNavigator" >
        <RootStack.Screen 
          name="BottomStackNavigator"
          component={BottomStackNavigator}
        />
        <RootStack.Screen name="movies" component={Movies} />
        <RootStack.Screen name="cinemas" component={Cinemas} />
        <RootStack.Screen name="movie" component={Movie} mode="modal" headerMode="none" />
        <RootStack.Screen name="SeatSelector" component={SeatSelector} mode="modal" headerMode="none" />
        <RootStack.Screen name="MovieTrailer" component={MovieTrailer} mode="modal" headerMode="none" />
        
      </RootStack.Navigator>
      
    </NavigationContainer>
  );
}

export default RootStackNavigator;

// Mainstacknavigation contains all the screens
// Root stack contains all modal screens
// BottomStackNavigator contains the mainstacknavigator component