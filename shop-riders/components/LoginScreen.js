import React, { Component } from 'react';
import {
  StyleSheet, 
  View, 
  Text,
  Keyboard, 
  Image,
  TouchableHighlight,
  TextInput,
  TouchableWithoutFeedback, 
  ImageBackground, 
  Alert, 
  Platform,
} from 'react-native';

export default class LoginScreen extends Component {
  state = {email:"",password:"", token:""}
  
  static navigationOptions = {
    header: null
  }
  componentDidMount() {
    if (this.token) {
      this.props.navigation.navigate('Home', {
        token: json.data.user.api_token
      })
    }
  }
  checkLogin() {
    // const {email,password } = this.state
    // if (email == 'admin' & password == 'admin') {
    //   this.props.navigation.navigate('Home')
    // }
    // else {
    //   
    // }
    fetch('https://707d547f.ngrok.io/api/user/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        // himoun niya og string params ang object para mailhan sa api kay di man pwee maka pasa og object
        body: JSON.stringify(this.state),
        })
        .then(response => response.json())
            .then(json => {
              if (json.message === 'error') {
                 Alert.alert('Wrong Email/Password')
              } else {
                this.setState({token: json.data.user.api_token})
                this.props.navigation.navigate('Home', {
                  // while mo navigate sa home gtagaan og token padong home
                  token: json.data.user.api_token
                })
              }
            })
            .catch(error => {
                console.error(error);
            });

  }
  render() {
    console.disableYellowBox = true;
    return (
    //  Login Form
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        }}>
          
        <ImageBackground style={styles.imagebackground} source={require('../assets/img/background1.png')} >
          <View style={styles.container}>
               <View style={styles.containertopRow}>
                
                  <Image  
                  style={styles.imageTopRow} 
                  source={require('../assets/img/logo.png')} 
                  />

                  <Image  
                  style={styles.imagebuttomlogo} 
                  source={require('../assets/img/name.png')} 
                  />
              </View>
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/ios-glyphs/30/000000/user-male.png'}}/>
              <TextInput style={styles.inputs}
                  // onChangeText = {text => this.setState({username: text})}
                  placeholder="Email"x  
                  keyboardType="email-address"
                  underlineColorAndroid='transparent'
                  onChangeText={(email) => this.setState({email})}/>
            </View>
            
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/material-rounded/24/000000/password1.png'}}/>
              <TextInput style={styles.inputs}
                  // onChangeText = {text => this.setState({password: text})}
                  placeholder="Password"
                  secureTextEntry={true}
                  underlineColorAndroid='transparent'
                  onChangeText={(password) => this.setState({password})}/>
            </View>
            <View style={styles.buttonloginregister}>      
              <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}  onPress={() => this.checkLogin()}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableHighlight>
              <TouchableHighlight style={[styles.buttonContainer, styles.registerButton]} onPress={() => this.props.navigation.navigate('Register')}>
                  <Text style={styles.loginText}>Register</Text>
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
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#888'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
    marginTop: 50
  },
  buttonloginregister: {
    flexDirection:  'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center',
      borderWidth: 1
  },
  containertopRow: {
    marginTop: 30,
    marginBottom:20,  
    justifyContent: "center",
    alignItems: 'center',
    marginLeft: -20
  },
  imageTopRow: {
    height: 120,
    marginTop: 20,
    width: 120,
    ...Platform.select({
      ios: {
        borderRadius: 80 / 2
      },
      android: {
        borderRadius: 80
      }
    })
  },
  imagebuttomlogo:{
    resizeMode: 'contain',
    height: 50,
    marginTop: 10,
    width: 170,
  },
  logotext: {
    fontSize: 20,
    color: '#fff',
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
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
  loginButton: {
    backgroundColor: "#00b5ec",
    marginRight: 5
  },
  registerButton: {
    backgroundColor: "#fa3737",
    marginLeft:5
  },
  loginText: {
    color: 'white',
    fontWeight : 'bold',
    fontSize: 15
  },

  //1st Screen

  title: {
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});