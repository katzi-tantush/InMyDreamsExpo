import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { NewGameInitScreen } from './screens/game-init/NewGameInitScreen';
import { rootStore } from './stores/PlayerStore';

export default function App() {
  const Stack = createNativeStackNavigator();

  const store = rootStore;
  const { cardStore, gameStore } = store;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='home'
          component={HomeScreen}
        />
        <Stack.Screen
          name='new game init'
        >
          {props => <NewGameInitScreen store={ store }/>}
        </Stack.Screen>
        

            {/* <CardStackScreen cardStore={ cardStore } gameStore={ gameStore }></CardStackScreen> */}
            {/* <HomeScreen></HomeScreen> */}
            {/* <PlayersScreen store={ store }></PlayersScreen> */}
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
