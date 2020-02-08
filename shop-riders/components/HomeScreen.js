import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View, Dimensions, Platform, Alert, Image, TouchableHighlight, Text} from 'react-native';


const LATITUDE_DELTA  = 0.01;
const LONGITUDE_DELTA = 0.01;

class HomeScreen extends React.Component {
    static navigationOptions = {  
        headerTitle:(<Image style={{width:100, height: 100, resizeMode: 'contain', marginLeft: '60%'}} source={require('../assets/img/headerlogo.png')}/>), 
        headerTitleStyle:{textAlign: 'center',alignSelf:'center'}, 
        };  
    state = {
        region: {
            latitude:       37.78825,
            longitude:      -122.4324,
            latitudeDelta:  LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        },
        ready:  false,
        marker: []
    }

    componentDidMount() {
        this.getCurrentPosition();
        this.getMarkers()
    }

    setRegion(region) {
        this.setState({region});
        this.setReady(true);

    }

    setReady(ready) {
        this.setState({ready: ready});
    }

    getMarkers() {
        fetch('https://9ec26a57.ngrok.io/api/shop/markers', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(json => {
                // console.log(json)
                let markers = [];
                for (let i = 0; i < json.length; i++) {
                    // console.log('asd')
                    markers.push({
                        shop_id:   json[i].shop_info.id,
                        latitude:  parseFloat(json[i].latitude),
                        longitude: parseFloat(json[i].longitude),
                        title:     json[i].shop_info.name,
                        subtitle:  json[i].shop_info.description,
                    })
                }
                this.setState({marker: markers});
            })
            .catch(error => {
                console.error(error);
            });
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
            let marker = this.state.marker[i];
            markers.push(<MapView.Marker
                coordinate={{
                    latitude:  marker.latitude,
                    longitude: marker.longitude
                }}
                title={marker.title}
                description={marker.subtitle}
                onCalloutPress={() => this.props.navigation.navigate('Details', {
                    shop_id: marker.shop_id,
                    currentPos: this.state.region,
                    goToPos: marker
                })}
                key={marker.shop_id}
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
                {this.markers()}
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
   
});


export default HomeScreen;

