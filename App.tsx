/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/home';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeView}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  view: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default App;
