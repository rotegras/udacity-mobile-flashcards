import React from 'react';
import { StyleSheet  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Decks from './Decks';
import SingleDeck from './SingleDeck';
import AddQuestion from './AddQuestion';
import Quiz from './Quiz';
import Stats from './Stats';

const Stack = createStackNavigator();

function MainStackNavigation ({ navigation }) {
  return (
    <Stack.Navigator
      style={[styles.container, {alignItems: 'center'}]}
      screenOptions={{
        initialRouteName: 'Quiz',
        headerShown: true,
        headerMode: 'none',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name='Decks'
        showHeader={false}
        component={Decks}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name='DeckDetails'
        showHeader={false}
        component={SingleDeck}
        options={({ route }) => ({ title: route.params.deckName })}
      />
      <Stack.Screen
        name='AddQuestion'
        showHeader={false}
        component={AddQuestion}
        options={{
          title: 'Add Question'
        }}
      />
      <Stack.Screen
        name='Quiz'
        showHeader={false}
        component={Quiz}
      />
      <Stack.Screen
        name='Stats'
        showHeader={false}
        component={Stats}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default MainStackNavigation;
