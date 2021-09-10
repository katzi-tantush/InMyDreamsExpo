import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { rootStore } from './stores/domain-stores/PlayerStore';
import { StoreProvider } from './context/StoreProvider';
import NewGameInitScreen from './screens/game-init/NewGameInitScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  const store = rootStore;
  const { cardStore, gameStore } = store;

  return (
    <StoreProvider store={rootStore}>

      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name='home'
            component={HomeScreen}
          />
          <Stack.Screen
            name='new game init'
            component={NewGameInitScreen}
          />

        </Stack.Navigator>
      </NavigationContainer>
      
    </StoreProvider>
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
