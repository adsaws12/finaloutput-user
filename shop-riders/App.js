import React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import {StyleSheet, View, Dimensions, Platform, Alert, Text, Button,ScrollView} from 'react-native';
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
                latitude:  10.323945,
                longitude: 123.883606,
                title:     'sample 1',
                subtitle:  'Balay ni Tope'
            },
            {
                id: 2,
                latitude:  10.323946,
                longitude: 123.888636,
                title:     'Sample 2',
                subtitle:  'Balay ni Mayang'
            },
            {
                id: 3,
                latitude:  10.326342,
                longitude: 123.883606,
                title:     'Sample 3',
                subtitle:  'Balay ni jabo'
            },
            {
                id: 4,
                latitude:  10.326342,
                longitude: 123.871606,
                title:     'Sample 4',
                subtitle:  'Balay ni jay'
            },
           

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
        <ScrollView>  
        <View style={styles.viewheader}>
            <Text style={styles.textHeader}>VRSHOPLOCATOR</Text>
        </View> 
        <View style={styles.container}>
            <Text style={styles.label}>Name of the Shop:</Text>
            <Text style={styles.nameshop}>drex</Text>
            <Text style={styles.label}>Types of Service:</Text>
            <Text style={styles.nameshop}>Vulcanizing</Text>
            <Text style={styles.label}>Contact Number:</Text>
            <Text style={styles.nameshop}>123123</Text>
            <Text style={styles.label}>Opening time and closing:</Text>
            <Text style={styles.nameshop}>123123/12312321</Text>
            <Text style={styles.label}>Number of personel:</Text>
            <Text style={styles.nameshop}>123123</Text>
            <Text style={styles.label}>Price range of Repair and Vulcanizing in Car:</Text>
            <View style={styles.pricerangeflex}>
                <View>
                    <Text style={styles.nameshop}>12312</Text>
                </View>  
                <Text style={styles.lineright}></Text>
                <View>
                    <Text style={styles.nameshop}>12312</Text>
                </View> 
            </View>  
            <Text style={styles.label}>Price range of Repair and Vulcanizing in MotorBike:</Text>
            <View style={styles.pricerangeflex}>
                <View>
                    <Text style={styles.nameshop}>12312</Text>
                </View>  
                <Text style={styles.lineright}></Text>
                <View>
                    <Text style={styles.nameshop}>12312</Text>
                </View> 
            </View> 
        </View>
        <View style={styles.buttonView}>
        <Button
          title="Request"
          onPress={() => Alert.alert('Request')}
        />
         <Button
          style={styles.requestButton}
          title="Products"
          color="red"
          onPress={() => this.props.navigation.navigate('Products')}
        />
        <Button
          style={styles.requestButton}
          title="GoTo"
          color="green"
          onPress={() => Alert.alert('Direction')}
        />
        </View>
      </ScrollView>
      );
    }
  }
 
  class ProductsScreen extends React.Component {
    render() {
        const { navigation } = this.props;
            return (
                <ScrollView>   
                <View style={{padding: 10}}>
                <Text style={styles.label}>Name of Accessories in Cars and MotorBike</Text>
                <Text style={styles.nameshop}>Decals</Text>
                <Text style={styles.nameshop}>sidemirror</Text>
                <Text style={styles.nameshop}>Ligid</Text>
                <Text style={styles.nameshop}>sidemirror</Text>
                <Text style={styles.nameshop}>tambotso</Text>
                </View>
            </ScrollView>
            );
        }
    }
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Products :ProductsScreen,
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
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        justifyContent:  'center',
    },
    mapStyle:  {
        width:  Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    nameshop: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20, 
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      label: {
        color: 'violet',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
        textShadowColor:'#585858',        
      },
      buttonView:{
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      requestButton:{
        marginLeft:20,
      },
      pricerangeflex: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      lineright: {
        borderRightWidth: 2
      },
      viewheader:{
        backgroundColor: '#C100C1',
        height: 60,
        width: '90%',
        marginTop: 0,
        marginRight: 'auto',
        marginBottom: 0,
        marginLeft: 'auto',
        borderRadius: 10,
      },
      textHeader: {
        fontSize: 35,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        fontWeight: 'bold',
        color: '#fff',
      },
});



