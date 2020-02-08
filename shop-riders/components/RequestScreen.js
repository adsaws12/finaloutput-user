import React, {Component} from 'react';
import {
  StyleSheet,
  Image, 
  Text, 
  View, 
  TouchableHighlight, 
  ScrollView,
  ImageBackground,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class RequestScreen extends Component {
    state = {
        name :null,
        number : null,
        problem : null,
        typeofvehicle: null,
        shop_id : null,
        longitude : null,
        latitude : null,
    }
    static navigationOptions = {  
      headerTitle:(<Image style={{width:100, height: 100, resizeMode: 'contain', marginLeft: '60%'}} source={require('../assets/img/headerlogo.png')}/>), 
      headerTitleStyle:{textAlign: 'center',alignSelf:'center'}, 
      };  
     
      sendRequest() {
     
        fetch('https://9ec26a57.ngrok.io/api/user/userrequest', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
            })
            .then(response => response.json())
            .then(json => {
                // console.log(json);
            })

            // .then( response => {
            //     console.log(response.json())
            // //   if (response.status == 200) {
            // //     this.props.navigation.navigate('Details')
            // //     Alert.alert('Welcome!.')
            // //   } 
            // //   else {
            // //     Alert.alert('Error', 'Username/Password mismatch', [{
            // //           text: 'Okay'
            // //         }])
            // //   }
            // }
            // );
            Alert.alert("Send Successful")
            this.props.navigation.navigate('Home')
      }
      componentDidMount() {
          this.setState({shop_id: this.props.navigation.state.params.shopId});
          this.setState({
              longitude: this.props.navigation.state.params.currentLoc.longitude,
              latitude: this.props.navigation.state.params.currentLoc.latitude
            })
      }
    render() {
        // console.log(this.props.navigation.state.params)
        return (
          <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            }}>
            <ImageBackground style={styles.imagebackground} source={require('../assets/img/background1.png')} > 
            
              <ScrollView>
                <View style={styles.view}>
                    <View style={styles.headtext}>
                      <Text style={styles.request}>REQUEST FORM</Text>
                    </View>
                    <Text style={styles.label}>Name of the User</Text>
                    <TextInput style={styles.inputs}
                      placeholder="Enter Name"
                      underlineColorAndroid='transparent'
                      onChangeText={(name) => this.setState({name})}/>
                    <Text style={styles.label}>Contact Number</Text>
                    <TextInput style={styles.inputs}
                      placeholder="Enter Contact Number"
                      underlineColorAndroid='transparent'
                      onChangeText={(number) => this.setState({number})}/>
                    <Text style={styles.label}>State of the Problem</Text>
                    <TextInput style={styles.inputs}
                      placeholder="Enter Your Problem"
                      underlineColorAndroid='transparent'
                      onChangeText={(problem) => this.setState({problem})}/>
                    <Text style={styles.label}>Type of Vehicle</Text>
                    <TextInput style={styles.inputs}
                      placeholder="Type of Vehicle"
                      underlineColorAndroid='transparent'
                      onChangeText={(typeofvehicle) => this.setState({typeofvehicle})}/>
                    <View style={styles.buttonview}>      
                        <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]}  onPress={() => this.sendRequest()}>
                            <Text style={styles.loginText}>Send</Text>
                        </TouchableHighlight>
                    </View>    
                </View>
              </ScrollView>
            </ImageBackground>
          </TouchableWithoutFeedback>
           
        );
    }
}
const styles = StyleSheet.create({
   imagebackground: {
        flex: 1,
        width: 400,
        height: null, 
      },
  container:{
      flex:            1,
      backgroundColor: '#fff',
      padding:         10,
      justifyContent:  'center',
  },
  sendButton: {
    backgroundColor: "#00b5ec",
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:100,
    borderRadius:30,
  },
  buttonview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginRight: '7%'
  },
  inputs:{
    height:45,
    borderBottomColor: '#FFFFFF',
    flex:1,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#fff'
  },
  request: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 8,
    marginBottom: 20,
  },
  headtext :{
    backgroundColor: '#b800b8',
    height:          60,
    width:           '80%',
    marginLeft: '5%',
    alignItems: 'center',
    borderRadius: 10, 
    marginBottom: '10%'
  },
  nameshop:{
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
  text: {
    fontSize: 20,
    color: 'black',
  },
  view: {
    padding: 10
  },
  textbutton :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableHighlight: {
    backgroundColor: 'orange',
    paddingVertical: 20,
    paddingHorizontal: 50,
    margin: 10,
  
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  }
});