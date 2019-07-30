
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DrawerNavigator from './navigation/DrawerNavigator'
import { Header, createStackNavigator } from 'react-navigation';

import LoginScreen2 from './screens/LoginScreen2';
import HomeScreen from './screens/HomeScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen2,
  },
)


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        
        <DrawerNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});