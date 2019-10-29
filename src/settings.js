import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,ScrollView, Image } from 'react-native';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
class Settings extends Component {
    static navigationOptions = {  
        title: 'Settings ',  
        headerStyle: {  
            backgroundColor:'#ff8c00' , 
            textAlign:"Center"
           
        },   
        //header TintColor: '#0ff',  
        headerTitleStyle: {  
            marginLeft:80,
            fontWeight: 'bold',  
            textAlign: 'center',
        },    
    };   
    
    render() {
        return (
            <Text style={{marginTop:250,marginLeft:90,fontWeight:"bold",fontSize:20}}>
                Welcome To Settings 
                </Text>
        )
    }

}
export default Settings;