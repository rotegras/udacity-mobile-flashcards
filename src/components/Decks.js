import React from 'react';
import SingleDeck from './SingleDeck';
import DecksCollection from './DecksCollection';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AddQuestion from './AddQuestion';

const Stack = createStackNavigator();

function Decks ({ navigation }) {
  return (
    <Stack.Navigator
      style={[styles.container, {flex: 1, border: '1px solid black'}]}
      screenOptions={{
        initialRouteName: 'DecksCollection',
        headerShown: true,
      }}
    >
      <Stack.Screen
        name='DecksCollection'
        showHeader={false}
        component={DecksCollection}
      />
      <Stack.Screen
        name='SingleDeck'
        showHeader={false}
        component={SingleDeck}
      />
      <Stack.Screen
        name='AddQuestion'
        showHeader={false}
        component={AddQuestion}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 500,
    margin: '0 auto',
    borderWidth: 3,
    borderStyle: 'dashed',
  },
})

export default Decks;
