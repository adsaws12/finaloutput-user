import React from "react";
import {Dimensions, StyleSheet, View, Image} from "react-native";
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

class GotoScreen extends React.Component {
    static navigationOptions = {  
        headerTitle:(<Image style={{width:100, height: 100, resizeMode: 'contain', marginLeft: '60%'}} source={require('../assets/img/headerlogo.png')}/>), 
        headerTitleStyle:{textAlign: 'center',alignSelf:'center'}, 
        };  
    state = {
        ready: false,
    }

    componentDidMount() {
        this.setState({ready: true})
    }

    render() {
        if (this.state.ready) {
            mapview = <MapView
                style={styles.mapStyle}
                initialRegion={this.props.navigation.state.params.currentLoc}
                showsUserLocation={true}
                followUserLocation={true}
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
});

export default GotoScreen;
