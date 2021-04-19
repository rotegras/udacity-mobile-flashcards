import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, createTabNavigation, StyleSheet } from 'react-native';
import { handleReceiveAllData  } from '../redux/actions/actions';
import MainStackNavigation from './MainStackNavigation';
import AddDeck from './AddDeck';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


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
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color={'#999'} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name='AddDeck'
          icon='plus-thick'
          component={AddDeck}
          style={styles.tab}
          options={{
            tabBarLabel: 'Add Deck',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="plus" color={'#999'} size={24} />
            ),
          }}
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
  }

})

export default connect()(Main);
