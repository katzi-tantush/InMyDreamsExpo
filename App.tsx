import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CardStackScreen } from './screens/cards/CardStackScreen';
import PlayersScreen from './screens/player/PlayersScreen';
import { rootStore } from './stores/PlayerStore';

export default function App() {
  const store = rootStore;

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <CardStackScreen cardStore={ store.cardStore }></CardStackScreen>
      {/* <PlayersScreen store={ store }></PlayersScreen> */}
    </View>
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
