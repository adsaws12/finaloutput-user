import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View, Dimensions, Platform, Alert, Text, Button, ScrollView} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DetailScreen from './components/DetailScreen';
// import ProductScreen from './components/ProductScreen';
import GotoScreen from './components/GotoScreen';
import RequestScreen from './components/RequestScreen';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import RegisterScreen from './components/RegisterScreen';

const RootStack = createStackNavigator(
    {
        Home:     HomeScreen,
        Details:  DetailScreen,
        // Products: ProductScreen,
        Goto: GotoScreen,
        Request: RequestScreen,
        Login: LoginScreen,
        Register : RegisterScreen
    },
    {
        initialRouteName: 'Login',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}

const styles = StyleSheet.create({
    container:      {
        flex:            1,
        backgroundColor: '#fff',
        padding:         10,
        justifyContent:  'center',
    },
    mapStyle:       {
        width:  Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    nameshop:       {
        color:             'black',
        fontWeight:        'bold',
        fontSize:          20,
        marginVertical:    8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    label:          {
        color:           'violet',
        fontWeight:      'bold',
        fontSize:        15,
        marginBottom:    5,
        textShadowColor: '#585858',
    },
    buttonView:     {
        flex:           1,
        flexDirection:  'row',
        justifyContent: 'space-around',
    },
    requestButton:  {
        marginLeft: 20,
    },
    pricerangeflex: {
        flex:           1,
        flexDirection:  'row',
        justifyContent: 'space-around',
    },
    lineright:      {
        borderRightWidth: 2
    },
    viewheader:     {
        backgroundColor: '#C100C1',
        height:          60,
        width:           '90%',
        marginTop:       0,
        marginRight:     'auto',
        marginBottom:    0,
        marginLeft:      'auto',
        borderRadius:    10,
    },
    textHeader:     {
        fontSize:       35,
        alignItems:     'center',
        justifyContent: 'center',
        padding:        10,
        fontWeight:     'bold',
        color:          '#fff',
    },
});



