import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import MainStackNavigator from "./MainStackNavigation";

import Movies from "../screens/Movies";
import Cinemas from "../screens/Cinemas";

const MoviesStack = createStackNavigator(); 

function MoviesStackScreen() {
  return (
    <MoviesStack.Navigator>
      <MoviesStack.Screen name="Movies" component={Movies} options={{ title: 'Film',
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
    </MoviesStack.Navigator>
  )
}

const CinemasStack = createStackNavigator(); 

function CinemasStackScreen() {
  return (
    <CinemasStack.Navigator>
      <CinemasStack.Screen name="Movies" component={Cinemas} options={{ title: 'Biografer',
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
    </CinemasStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

function TabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        // Somehow change icon based on label?
        const icon = options.icon

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, padding: 15, backgroundColor: "black", alignItems: "center" }}
          >
            <MaterialIcons type='feather' name={icon} color={ isFocused ? '#ff321e' : '#676d7c' } size="20" />
            <Text style={{ color: isFocused ? '#ff321e' : '#676d7c' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function BottomStackNavigator() {
  return (
    
      <Tab.Navigator initialRouteName="MainStackNavigator" backBehavior="history" tabBar={props => <TabBar {...props} />} >
        <Tab.Screen 
          name="Hjem"
          component={MainStackNavigator}
          options={{ tabBarLabel: 'Hjem', icon: "home" }}
        />
       
        <Tab.Screen 
          name="Film" 
          component={MoviesStackScreen} 
          options={{ tabBarLabel: 'Film', icon: "movie" }} 
        />
        <Tab.Screen 
          name="Biografer" 
          component={CinemasStackScreen} 
          options={{ tabBarLabel: 'Biografer', icon: "person" }} 
        />
      </Tab.Navigator>
    
  );
}

export default BottomStackNavigator;