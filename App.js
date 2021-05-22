import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform , View } from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store/store';
import MainTabNavigation from './src/components/MainTabNavigation';
import { PersistGate } from 'redux-persist/integration/react';


export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <MainTabNavigation style={styles.container} />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
