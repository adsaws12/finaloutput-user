import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';

// class Blink extends Component {
//
//   componentDidMount(){
//     // Toggle the state every second
//     setInterval(() => (
//       this.setState(previousState => (
//         { isShowingText: !previousState.isShowingText }
//       ))
//     ), 1000);
//   }
//
//   //state object
//   state = { isShowingText: true };
//
//   render() {
//     if (!this.state.isShowingText) {
//       return null;
//     }
//
//     return (
//       <Text>{this.props.text}</Text>
//     );
//   }
// }

export default class App extends Component<Props> {
constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            key: "KEY NOT SHOWN BUT WORKS",
            latitude: null,
            longitude: null,
            error: 2
        };
    }

    /**
     * T/*his function gets the current geo location of the device and stores it
     * as Lat and Long coordinates.
     * @private
     */
    getLocation = () => { // Change the function so it has access to the outer scope
        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         console.log(position);
        //         this.setState({
        //             latitude: position.coords.latitude,
        //             longitude: position.coords.longitude,
        //         });
        //
        //         // Move the function call to here :)
        //         // this.getAPI();
        //     },
        //     (error) =>
        //         this.setState({ error: error.message, latitude: 41.77, longitude: -88.07,}),
        //     { enableHighAccuracy: false, timeout: 5000, maximumAge: 10000 },
        // );
    }
    //
    // getAPI(){
    //     fetch('https://developer.cumtd.com/api/v2.2/JSON/getstopsbylatlon?key='+this.state.key+'&lat='+this.state.latitude.toString()+'&lon='+this.state.longitude.toString())
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             this.setState({
    //                 dataSource: responseJson.stops,
    //                 isLoading: false,
    //             }, function() {
    //                 // do something with new state
    //             });
    //         })
    //         .catch((error) => {
    //             //error
    //         });
    // }
    //
    // componentDidMount() {
    //     this.getLocation(); /// Just call getLocation() :D
    // }

    componentWillMount(): void {
        // this.getLocation(); /// Just call getLocation() :D
        navigator.geolocation.getCurrentPosition( function (position) {
            this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
        });

    }

    render() {
    return (
        <MapView
            style={{flex: 1}}
            camera={
                center: {
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,
                }
            }
            showsUserLocation={true}
            followsUserLocation={true}
            liteMode={true}
        />
    );
  }
  }
