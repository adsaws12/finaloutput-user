import React from "react";
import {Alert, Button, Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";

class DetailScreen extends React.Component {
    state = {
        shopInfo: {
            name:       null,
            service:    null,
            contact:    null,
            start_time: null,
            end_time:   null
        },
    }

    componentDidMount() {
        this.getShopInfo();
    }

    getShopInfo() {
        const shopId = this.props.navigation.state.params.shop_id;
        fetch('http://42035676.ngrok.io/api/shop/' + shopId, {
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
            <ScrollView>
                <View style={styles.viewheader}>
                    <Text style={styles.textHeader}>VRSHOPLOCATOR</Text>
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
                        onPress={() => this.props.navigation.navigate('Goto', {
                            currentLoc: this.props.navigation.state.params.currentPos,
                            goToLoc: this.props.navigation.state.params.goToPos
                        })}
                    />
                </View>
            </ScrollView>
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
    nameshop:       {
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
        backgroundColor: '#C100C1',
        height:          60,
        width:           '90%',
        marginTop:       0,
        marginRight:     'auto',
        marginBottom:    0,
        marginLeft:      'auto',
        borderRadius:    10,
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
