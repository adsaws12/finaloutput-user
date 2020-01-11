import React, {Component} from 'react';
import {
  StyleSheet,
  Platform, 
  Image, 
  Text, 
  View, 
  TouchableHighlight, 
  ImageBackground, 
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import LoginScreen from '../components/LoginScreen';
//import of image

export default class RegisterScreen extends Component {
    state = {
        
            firstname:   null,
            lastname:    null,
            email:    null,
            password: null,
        
    }
    static navigationOptions = {
      header: null
    }
    addUserInfo() {
        console.log(this.state);
        fetch('http://42035676.ngrok.io/api/user/add', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
        });
        Alert.alert('Register successful.')
        this.props.navigation.navigate('Login')
    }
    render() {
        return (
          <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            }}>  
            <ImageBackground style={styles.imagebackground}>
              <View style={styles.containertopRow}>
                  <Image
                    style={styles.imageTopRow}
                    source={{
                      uri:
                        'https://cdn.pixabay.com/photo/2014/04/05/12/20/man-316917_960_720.jpg',
                    }}
                  />
                  <Text style={[styles.textlabel, styles.registertext]}>
                          Register Form
                  </Text>
              </View>
              <View style={styles.container}>
                  <View style={styles.form}>
                      <Text style={styles.textlabel}>
                          First Name
                      </Text>
                  </View>
                <View style={styles.inputContainer}>
                  <TextInput style={styles.inputs}
                      placeholder="Enter your full name" 
                      placeholderTextColor= "#bdbdbd"  
                      underlineColorAndroid='transparent'
                      onChangeText={(firstname) => this.setState({firstname})}/>
                </View>

                <View style={styles.form}>
                    <Text style={styles.textlabel}>
                        Last Name
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput style={styles.inputs}
                      placeholder="Enter your last name" 
                      placeholderTextColor= "#bdbdbd"  
                      underlineColorAndroid='transparent'
                      onChangeText={(lastname) => this.setState({lastname})}/>
                </View>
                
                <View style={styles.form}>
                    <Text style={styles.textlabel}>
                        Email
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput style={styles.inputs}
                      placeholder="Enter your e-mail address"  
                      placeholderTextColor= "#bdbdbd" 
                      underlineColorAndroid='transparent'
                      onChangeText={(email) => this.setState({email})}/>
                </View>
                    
                <View style={styles.form}>
                    <Text style={styles.textlabel}>
                        Password
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput style={styles.inputs}
                      placeholder="Enter password"
                      placeholderTextColor= "#bdbdbd"
                      secureTextEntry={true}
                      underlineColorAndroid='transparent'
                      onChangeText={(password) => this.setState({password})}/>
                </View>
                <View style={styles.buttonloginregister}>      
                 <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.addUserInfo()}>
                 <Text style={styles.loginText}>Create Account</Text>
                  </TouchableHighlight>
                    

                </View>
              </View>
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
        backgroundColor: '#888'
      },
      registertext: {
        marginTop: 10,
        marginBottom:10,
        fontSize: 20,
      },
      containertopRow: {
        marginTop: 30,
        marginBottom:20,
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: -20
      },
      imageTopRow: {
        height: 80,
        marginTop: 50,
        width: 80,
        ...Platform.select({
          ios: {
            borderRadius: 80 / 2
          },
          android: {
            borderRadius: 80
          }
        })
      },
      container: {
        marginBottom: 150,
        marginLeft: 10,
        marginRight: 100,
      },
      buttonloginregister: {
        flexDirection:  'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 50,
      },
      inputContainer: {
        borderBottomWidth: 1,
        width:320,
        height:45,
        marginBottom:35,
        flexDirection: 'row',
        alignItems:'center',
        borderBottomColor: '#fff',
      },
      form:{
        marginLeft:15,
        fontSize: 30,
      },
      textlabel : {
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold"
      },
      inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        flex:1,
        marginVertical:    8,
        borderBottomWidth: StyleSheet.hairlineWidth,
        color: '#fff',
        fontSize: 20,
        // fontWeight: 'bold'
      },
      inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
      },
      buttonContainer: {
        height:45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:200,
        borderRadius:4,
      },
      loginButton: {
        backgroundColor: "#00b5ec",
        marginRight: 5
      },
      registerButton: {
        backgroundColor: "#e0320b",
        marginLeft:5
      },
      loginText: {
        color: '#fff',
        fontWeight : 'bold',
        fontSize: 15,
      }, 
      //1st Screen 
});
