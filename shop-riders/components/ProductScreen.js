import React from "react";
import {ScrollView, Text, View} from "react-native";

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

export default ProductScreen;
