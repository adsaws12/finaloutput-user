import React from "react";
import {StyleSheet, ScrollView, Text, View } from "react-native";

class ProductScreen extends React.Component {
    render() {
        const {navigation} = this.props;
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

const styles = StyleSheet.create({
    container:      {
        flex:            1,
        backgroundColor: '#fff',
        padding:         10,
        justifyContent:  'center',
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

export default ProductScreen;
