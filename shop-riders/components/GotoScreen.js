import React from "react";
import {Button, Dimensions, StyleSheet, View, Text} from "react-native";
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

class GotoScreen extends React.Component {
    state = {
        ready: false,
    }

    componentDidMount() {
        this.setState({ready: true})
    }

    render() {
        if (this.state.ready) {
            console.log(this.props.navigation.state.params);
            mapview = <MapView
                style={styles.mapStyle}
                initialRegion={this.props.navigation.state.params.currentLoc}
                showsUserLocation={true}
            >
                <MapView.Marker
                    coordinate={{
                        latitude:  this.props.navigation.state.params.currentLoc.latitude,
                        longitude: this.props.navigation.state.params.currentLoc.longitude
                    }}
                />
                <MapView.Marker
                    coordinate={{
                        latitude:  this.props.navigation.state.params.goToLoc.latitude,
                        longitude: this.props.navigation.state.params.goToLoc.longitude
                    }}
                />
                <MapViewDirections
                    origin={{
                        latitude:  this.props.navigation.state.params.currentLoc.latitude,
                        longitude: this.props.navigation.state.params.currentLoc.longitude
                    }}
                    destination={{
                        latitude:  this.props.navigation.state.params.goToLoc.latitude,
                        longitude: this.props.navigation.state.params.goToLoc.longitude
                    }}
                    strokeWidth={4}
                    strokeColor={"blue"}
                    lineDashPattern={[15,15]}
                    apikey={'AIzaSyDYip5_J-mUcIk1hrDE0qxdz2epCYY6IQ0'}
                />
            </MapView>
        } else {
            mapview = null;
        }
        return (
            <View style={styles.container}>
                {mapview}
            </View>
        );
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

export default GotoScreen;
