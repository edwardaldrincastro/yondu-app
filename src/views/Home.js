import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { main_components, company_name, custom_style } from "../utilities/data/main_components"

class Home extends Component {
    render() {
        return (
            <View style={[styles.container, custom_style.container]}>
            {main_components.map((feature, index) => (
                feature !== 'About' ? <Text style={[styles.featureText, custom_style.featureText]} key={index}>{feature}</Text> : <Text style={[styles.featureText, custom_style.featureText]} key={index}>{feature} {company_name}</Text>
            ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#D8D8D8',
        // padding: 20
    },
    featureText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007C60',
        textAlign: 'center',
        margin: 30,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button:{
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#FFC83D'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',

    }
})

export default Home