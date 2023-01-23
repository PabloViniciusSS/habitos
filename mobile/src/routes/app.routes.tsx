import { createNativeStackNavigator } from "@react-navigation/native-stack";

const {Navigator, Screen} = createNativeStackNavigator();

import { Home } from "../screens/Home";
import { New } from "../screens/New";
import { Habit } from "../screens/Habit";

import React from 'react'

export default function AppRoutes() {
  return (
    
<Navigator screenOptions={{headerShown: false}}>
  <Screen
  name="home"
  component={Home}
  />
  <Screen
  name="New"
  component={New}
  />
    <Screen
  name="Habit"
  component={Habit}
  />

</Navigator>
  )
}


