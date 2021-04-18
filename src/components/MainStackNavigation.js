import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Decks from './Decks';
import SingleDeck from './SingleDeck';
import AddQuestion from './AddQuestion';
import Quiz from './Quiz';

const Stack = createStackNavigator();

function MainStackNavigation ({ navigation }) {
  return (
    <Stack.Navigator
      style={[styles.container, {flex: 1}]}
      screenOptions={{
        initialRouteName: 'Decks',
        headerShown: true,
      }}
    >
      <Stack.Screen
        name='Decks'
        showHeader={false}
        component={Decks}
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
      <Stack.Screen
        name='Quiz'
        showHeader={false}
        component={Quiz}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 500,
    // margin: '0 auto',
  },
})

export default MainStackNavigation;