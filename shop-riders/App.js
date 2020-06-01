import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DetailScreen from './components/DetailScreen';
import GotoScreen from './components/GotoScreen';
import RequestScreen from './components/RequestScreen';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import RegisterScreen from './components/RegisterScreen';

const RootStack = createStackNavigator(
    {  
        Login: LoginScreen,
        Home:     HomeScreen,
        Details:  DetailScreen,
        Goto: GotoScreen,
        Request: RequestScreen,
        Register : RegisterScreen
    },

);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}




