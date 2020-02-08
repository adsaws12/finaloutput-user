import React from "react";
import {Alert, Button, Dimensions, ScrollView, StyleSheet, Text, View,Image,ImageBackground} from "react-native";

class DetailScreen extends React.Component {
    static navigationOptions = {  
        headerTitle:(<Image style={{width:100, height: 100, resizeMode: 'contain', marginLeft: '60%'}} source={require('../assets/img/headerlogo.png')}/>), 
        headerTitleStyle:{textAlign: 'center',alignSelf:'center'}, 
        };  
    state = {
        shopInfo: {
            name:       null,
            service:    null,
            contact:    null,
            start_time: null,
            end_time:   null,
            personel: null,
            priceofcar: null,
            priceofmotor: null,
        },
    }

    componentDidMount() {
        this.getShopInfo();
    }

    getShopInfo() {
        const shopId = this.props.navigation.state.params.shop_id;
        fetch('https://9ec26a57.ngrok.io/api/shop/' + shopId, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(json => {
                this.setState({shopInfo: json});
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        console.log(this.state)
        const {navigation} = this.props;
        return (
                <ImageBackground style={styles.imagebackground} source={require('../assets/img/background1.png')} >
                    <ScrollView> 
                        <View style={styles.viewheader}>
                            <Text style={styles.textHeader}>Informations</Text>
                        </View>
                        <View style={styles.container}>  
                            <Text style={styles.label}>Name of the Shop:</Text>
                            <Text style={styles.nameshop}>{this.state.shopInfo.name}</Text>
                            <Text style={styles.label}>Types of Service:</Text>
                            <Text style={styles.nameshop}>{this.state.shopInfo.service}</Text>
                            <Text style={styles.label}>Contact Number:</Text>
                            <Text style={styles.nameshop}>{this.state.shopInfo.contact}</Text>
                            <Text style={styles.label}>Opening time and closing:</Text>
                            <Text style={styles.nameshop}>{this.state.shopInfo.start_time} ~ {this.state.shopInfo.end_time}</Text>
                            <Text style={styles.label}>Number of personel:</Text>
                            <Text style={styles.nameshop}>{this.state.shopInfo.personel}</Text>
                            <Text style={styles.label}>Price range of Repair and Vulcanizing in Car:</Text>
                            
                            <Text style={styles.nameshop}>{this.state.shopInfo.priceofcar}</Text>
                            {/* <View style={styles.pricerangeflex}>
                                <View>
                                </View>
                                <Text style={styles.lineright}></Text>
                                <View>
                                    <Text style={styles.nameshop}>12312</Text>
                                </View>
                            </View> */}
                            <Text style={styles.label}>Price range of Repair and Vulcanizing in MotorBike:</Text>
                            <Text style={styles.nameshop}>{this.state.shopInfo.priceofmotor}</Text>
                            {/* <View style={styles.pricerangeflex}>
                                <View>
                                </View>
                                <Text style={styles.lineright}></Text>
                                <View>
                                    <Text style={styles.nameshop}>12312</Text>
                                </View>
                            </View> */}
                        </View>
                        <View style={styles.buttonView}>
                            <Button
                                title="Request"
                                onPress={() => this.props.navigation.navigate('Request',{
                                    currentLoc: this.props.navigation.state.params.currentPos,
                                    shopId: this.props.navigation.state.params.shop_id
                                })}
                            />
                            {/* <Button
                                style={styles.requestButton}
                                title="Products"
                                color="red"
                                onPress={() => this.props.navigation.navigate('Products')}
                            /> */}
                            <Button
                                style={styles.requestButton}
                                title="GoTo"
                                color="green"
                                onPress={() => this.props.navigation.navigate('Goto', {
                                    currentLoc: this.props.navigation.state.params.currentPos,
                                    goToLoc: this.props.navigation.state.params.goToPos
                                })}
                            />
                        </View>
                    </ScrollView>
                </ImageBackground>
        
        );
    }
}

const styles = StyleSheet.create({
    imagebackground: {
        flex: 1,
        flexDirection: 'column'
      },
    container:      {
        flex:            1,
        backgroundColor: '#fff',
        padding:         10,
        justifyContent:  'center',
        backgroundColor: 'transparent',
        height: null
    },
    mapStyle:       {
        width:  Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    nameshop:       {
        color:             '#fff',
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
    buttonView:     {
        flex:           1,
        flexDirection:  'row',
        justifyContent: 'space-around',
    },
    requestButton:  {
        marginLeft: 20,
    },
    pricerangeflex: {
        flex:           1,
        flexDirection:  'row',
        justifyContent: 'space-around',
    },
    lineright:      {
        borderRightWidth: 2
    },
    viewheader:     {
        marginTop: 5,
        backgroundColor: '#b800b8',
        height:          60,
        width:           '80%',
        marginLeft: '5%',
        alignItems: 'center',
        borderRadius: 10
    },
    textHeader:     {
        fontSize:       35,
        alignItems:     'center',
        justifyContent: 'center',
        padding:        10,
        fontWeight:     'bold',
        color:          '#fff',
    },
});

export default DetailScreen;
