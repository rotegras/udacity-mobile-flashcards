import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, createTabNavigation, StyleSheet } from 'react-native';
import { handleReceiveAllData  } from '../redux/actions/actions';
import MainStackNavigation from './MainStackNavigation';
import AddDeck from './AddDeck';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

function Main({dispatch}) {
  useEffect(() => {
    dispatch(handleReceiveAllData());
  }, []);

  return (
    <NavigationContainer
      styles={styles.container}
    >
      <Tab.Navigator
        screenOptions={{
          initialRouteName: 'Home',
          headerShown: false,
        }}
      >
        <Tab.Screen
          name='Home'
          component={MainStackNavigation}
          style={styles.tab}
        />
        <Tab.Screen
          name='AddDeck'
          component={AddDeck}
          style={styles.tab}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    borderWidth: 1,
  }

})

export default connect()(Main);
