import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView, 
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
        fetch('https://eeec135e.ngrok.io/api/user/add', {
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
            <ImageBackground style={styles.imagebackground} source={require('../assets/img/background1.png')} > 
              <ScrollView>
                <View style={styles.containertopRow}>
                    <Image
                      style={styles.imageTopRow}
                      source={require('../assets/img/headerlogo.png')} 
                    />
                   
                </View>
                
                <View style={styles.container}>
                  
                    <View style={styles.form}>
                        <Text style={[styles.textlabel, styles.registertext]}>
                                  Sign Up
                        </Text>
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
      registertext: {
        marginBottom:20,
        fontSize: 22,
        color: '#fa00fa',
        fontWeight: 'bold'
      },
      containertopRow: {
        marginTop: 30,
        marginBottom:20,
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: -20
      },
      imageTopRow: {
        // backgroundColor: '#000',
        height: 100,
        marginTop: 20,
        width: 200,
        marginBottom: 15,
        resizeMode: 'stretch',
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
        width:320,
        height:45,
        marginBottom:35,
        flexDirection: 'row',
        alignItems:'center',
      },
      form:{
        marginLeft:15,
        fontSize: 30,
      },
      textlabel : {
        color: "violet",
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
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'        
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
