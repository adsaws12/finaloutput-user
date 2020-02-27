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
            priceofcarvul: null,
            priceofmotorvul: null,
        },
    }

    componentDidMount() {
        this.getShopInfo();
    }

    getShopInfo() {
        const shopId = this.props.navigation.state.params.shop_id;
        const token = this.props.navigation.state.params.token;
        fetch('https://eeec135e.ngrok.io/api/shop/' + shopId + '?api_token=' + token, {
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
                            <Text style={styles.label}>Opening and Closing time:</Text>
                            <Text style={styles.nameshop}>{this.state.shopInfo.start_time} ~ {this.state.shopInfo.end_time}</Text>
                            <Text style={styles.label}>Number of personel:</Text>
                            <Text style={styles.nameshop}>{this.state.shopInfo.personel}</Text>

                            <View style={styles.textpricerange}>
                                <View style={styles.marginforprice}>
                                    <Text style={styles.label}>Price range of Repair in Car:</Text>
                                </View>
                                <View style={styles.marginforprice}>
                                    <Text style={styles.label}>Price range of Vulcanizing in Car:</Text>
                                </View>
                            </View>
                            <View style={styles.pricerangeflex}>
                                <View>
                                    <View style={styles.flexprice}>
                                        <Text style={styles.nameshop}>{this.state.shopInfo.priceofcar}</Text>
                                    </View>
                                </View>
                                <Text style={styles.lineright}></Text>
                                <View>
                                    <View style={styles.flexprice}>
                                        <Text style={styles.nameshop}>{this.state.shopInfo.priceofcarvul}</Text>
                                    </View>
                                </View>
                            </View>
                            {/* <View style={styles.pricerangeflex}>
                                <View>
                                </View>
                                <Text style={styles.lineright}></Text>
                                <View>
                                    <Text style={styles.nameshop}>12312</Text>
                                </View>
                            </View> */}
                            <View style={styles.textpricerange}>
                                <View style={styles.marginforprice}>
                                    <Text style={styles.label}>Price range of Repair in MotorBike:</Text>
                                </View>
                                <View style={styles.marginforprice}>
                                    <Text style={styles.label}>Price range of Vulcanizing in MotorBike:</Text>
                                </View>
                            </View>
                            <View style={styles.pricerangeflex}>
                                <View>
                                    <View style={styles.flexprice}>
                                        <Text style={styles.nameshop}>{this.state.shopInfo.priceofmotor}</Text>
                                    </View>
                                </View>
                                <Text style={styles.lineright}></Text>
                                <View>
                                    
                                    <View style={styles.flexprice}>
                                        <Text style={styles.nameshop}>{this.state.shopInfo.priceofmotorvul}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.buttonView}>
                            <Button
                                title="Request"
                                onPress={() => this.props.navigation.navigate('Request',{
                                    currentLoc: this.props.navigation.state.params.currentPos,
                                    shopId: this.props.navigation.state.params.shop_id,
                                    token: this.props.navigation.state.params.token
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
                                    goToLoc: this.props.navigation.state.params.goToPos,
                                    token: this.props.navigation.state.params.token
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
    marginforprice :{width: 175},
    container:      {
        flex:            1,
        backgroundColor: '#fff',
        padding:         10,
        justifyContent:  'center',
        backgroundColor: 'transparent',
        height: null
    },
    flexprice: {
        alignItems: 'center',
        width: 170
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
    textpricerange: {
        flex:           1,
        flexDirection:  'row',
        justifyContent: 'space-between',
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
        borderRightWidth: 2,
        borderRightColor: '#fff'
    },
    viewheader:     {
        flexDirection: 'column',
        alignSelf: 'center',
        marginTop: 10,
        height:          60,
        alignItems: 'center',
    },
    textHeader:     {
        fontSize:       35,
        backgroundColor: '#b800b8',
        alignItems:     'center',
        justifyContent: 'center',
        padding:        10,
        fontWeight:     'bold',
        color:          '#fff',
        borderRadius: 10
    },
});

export default DetailScreen;
