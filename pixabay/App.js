import React, { useState } from "react";
import { TransitionPresets  } from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import { Architecture } from "./pages/Architecture";
import { Motorcicle } from "./pages/Motorcicle";
import { Nature } from "./pages/Nature";
import { Space } from "./pages/Space";
import { Main } from "./pages/Main";
import { StyleSheet } from 'react-native';

export default function App() {
  const [token, setToken] = useState('');
  return (
    <NavigationContainer>
          <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen options={{ ...TransitionPresets.ModalSlideFromBottomIOS}} name='Main' component={Main}/>
            <Tab.Screen options={{ ...TransitionPresets.ModalSlideFromBottomIOS}} name='Architecture' component={Architecture}/>
            <Tab.Screen options={{ ...TransitionPresets.ModalSlideFromBottomIOS}} name='Motorcicle' component={Motorcicle}/>
            <Tab.Screen options={{ ...TransitionPresets.ModalSlideFromBottomIOS}} name='Nature' component={Nature}/>
            <Tab.Screen options={{ ...TransitionPresets.ModalSlideFromBottomIOS}} name='Space' component={Space}/>
          </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
