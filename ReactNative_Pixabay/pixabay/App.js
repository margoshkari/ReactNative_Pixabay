import React from "react";
import { createStackNavigator, TransitionPresets  } from "@react-navigation/stack";
import { NavigationContainer} from "@react-navigation/native";

import { Architecture } from "./pages/Architecture";
import { Motorcicle } from "./pages/Motorcicle";
import { Nature } from "./pages/Nature";
import { Space } from "./pages/Space";
import { Main } from "./pages/Main";
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen options={{ ...TransitionPresets.ModalSlideFromBottomIOS}} name='Main' component={Main}/>
            <Stack.Screen options={{ ...TransitionPresets.ModalSlideFromBottomIOS}} name='Architecture' component={Architecture}/>
            <Stack.Screen options={{ ...TransitionPresets.ModalSlideFromBottomIOS}} name='Motorcicle' component={Motorcicle}/>
            <Stack.Screen options={{ ...TransitionPresets.ModalSlideFromBottomIOS}} name='Nature' component={Nature}/>
            <Stack.Screen options={{ ...TransitionPresets.ModalSlideFromBottomIOS}} name='Space' component={Space}/>
          </Stack.Navigator>
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
