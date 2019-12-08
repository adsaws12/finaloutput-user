import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View, Dimensions, Platform, Alert} from 'react-native';

const LATITUDE_DELTA  = 0.01;
const LONGITUDE_DELTA = 0.01;

export default class App extends React.Component {
    state = {
        region: {
            latitude:       37.78825,
            longitude:      -122.4324,
            latitudeDelta:  LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        },
        ready:  false,
        marker: [
          {
            latitude: 45.65,
            longitude: -78.90,
            title: 'Foo Place',
            subtitle: '1234 Foo Drive'
          }
        ]
    }

    componentDidMount() {
        this.getCurrentPosition();
    }

    setRegion(region) {
        this.setState({region});
        this.setReady(true);

    }

    setReady(ready) {
        this.setState({ready: ready});
    }

    getCurrentPosition() {
        try {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const region = {
                        latitude:       position.coords.latitude,
                        longitude:      position.coords.longitude,
                        latitudeDelta:  LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    };
                    console.log(region);
                    this.setRegion(region) ;
                },
                (error) => {
                    console.log(error.message);
                    switch (error.code) {
                        case 1:
                            if (Platform.OS === "ios") {
                                Alert.alert("", "Error in IOS");
                            } else {
                                Alert.alert("", "ERROR in Android");
                            }
                            break;
                        default:
                            Alert.alert("", "Error al detectar tu locación");
                    }
                }
            );
        } catch (e) {
            alert(e.message || "");
        }
    };

    render() {
        if (this.state.ready) {
            mapview = <MapView
                style={styles.mapStyle}
                initialRegion={this.state.region}
                showsUserLocation={true}
            >
               <MapView.Marker
                    coordinate={{
                        latitude: 10.328142,
                        longitude: 123.9064438
                    }}
                    title={"title"}
                    description={"description"}
                 />
            </MapView>
        } else {
            mapview = null;
        }
        return (
            <View style={styles.container}>
                { mapview }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:            1,
        backgroundColor: '#fff',
        alignItems:      'center',
        justifyContent:  'center',
    },
    mapStyle:  {
        width:  Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
