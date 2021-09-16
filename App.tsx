import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { rootStore } from './stores/domain-stores/PlayerStore';
import { StoreProvider } from './context/StoreProvider';
import screenNavigations from './navigation/screenNavigation';

export default function App() {
  const Stack = createNativeStackNavigator();

  const {
    homeNav,
    gameInitNav,
    gameRoundNav,
    playersRoleNav,
    cardStackNav
  } = screenNavigations;
  
  return (
    <StoreProvider store={rootStore}>

      <NavigationContainer>
        <Stack.Navigator>
          {
            Object.values(screenNavigations).map(screenNav => <Stack.Screen
              key={screenNav.name}
              name={screenNav.name}
              component={screenNav.component}
            />)
          }
          {/* <Stack.Screen
            name={homeNav.name}
            component={homeNav.component}
          />
          <Stack.Screen
            name={gameInitNav.name}
            component={gameInitNav.component}
          />
          <Stack.Screen
            name={gameRoundNav.name}
            component={gameRoundNav.component}
          />
          <Stack.Screen
            name={playersRoleNav.name}
            
            component={playersRoleNav.component}
          />
          <Stack.Screen
            name={cardStackNav.name}

            component={cardStackNav.component}
          /> */}
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
