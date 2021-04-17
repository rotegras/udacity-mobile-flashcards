import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import MainTabNavigation from './src/components/MainTabNavigation';
import Dummy from './src/components/Dummy';
import DecksCollection from './src/components/DecksCollection';


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <MainTabNavigation style={styles.container} />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#999',
    // alignItems: 'center',
    alignSelf: 'stretch',
    // justifyContent: 'center',
    // borderColor: 'yellow',
    // borderWidth: 4,
    // borderStyle: 'dashed'
  },
});
