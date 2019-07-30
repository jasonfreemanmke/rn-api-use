import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CleaningScreen from '../screens/CleaningScreen';
import DailyLog from '../screens/DailyLog';
import HeaderScreen from '../components/Header';
import LoginScreen from '../screens/LoginScreen';
import LoginScreen2 from '../screens/LoginScreen2';
import test1 from '../screens/test1';
import SplashSreenA from '../screens/SplashScreenA';

import MenuDrawer from '../components/MenuDrawer';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerWidth: WIDTH*0.83,
	contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation} />)
	}
}

const DrawerNavigator =  createDrawerNavigator(
	{
		Home: {
			screen: HomeScreen
		},
		Cleaning: { 
			screen: CleaningScreen
		},
		Daily: {
			screen: DailyLog
		},
		Header:{
			screen: HeaderScreen

		},
		Login:{
			screen: LoginScreen
		},
		 Login2:{
		 	screen: LoginScreen2
		 },
		 test1:{
			screen: test1
		 },
		 
		 SplashA:{
			 screen: SplashSreenA
		 },
	},
	DrawerConfig
);

export default createAppContainer(DrawerNavigator);