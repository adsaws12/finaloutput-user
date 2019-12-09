import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View, Dimensions, Platform, Alert, Text, Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const LATITUDE_DELTA  = 0.01;
const LONGITUDE_DELTA = 0.01;

class HomeScreen extends React.Component {
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
                id: 1,
                latitude:  10.328142,
                longitude: 123.9064438,
                title:     'Foo Place',
                subtitle:  '1234 Foo Drive'
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
                    this.setRegion(region);
                },
                (error) => {
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
    }

    markers() {
         let markers = [];
         for (i = 0; i < this.state.marker.length; i++) {
             console.log(this.state.marker[i])
             let marker = this.state.marker[i];
             markers.push(<MapView.Marker
                coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude
                }}
                title={marker.title}
                description={marker.subtitle}
                onCalloutPress={() => this.props.navigation.navigate('Details', {
                    shop_id: marker.id
                })}
             />)
         }
         return markers;
    }

    render() {
        if (this.state.ready) {
            mapview = <MapView
                style={styles.mapStyle}
                initialRegion={this.state.region}
                showsUserLocation={true}
            >
                { this.markers() }
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

class DetailsScreen extends React.Component {
  render() {
      const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
          <Text>SHOP ID: { navigation.getParam('shop_id') }</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
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
