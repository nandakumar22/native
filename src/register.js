import { View, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView, Alert, Image } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button,Picker, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';
const signIn = () => {
    Actions.dashB()
};
class Register extends Component {
    static navigationOptions = {  
        title: "Sign-Up",  
        headerStyle: {  
            backgroundColor:'#ff8c00', 
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
            <ScrollView>
            <View style={styles.container}>
            {/* <Image style={{marginTop:10}}resizeMode="contain" style={styles.logo} source={require('../images/sunkpo.jpg')} /> */}

               
                <Content>
                    <Form>
                 
                    <Label style={{marginLeft:2,marginTop:10}}>User Name</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:8}} >
                   <Input placeholder='' />
                  </Item>
                  <Label style={{marginLeft:2}}>Password</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
                 <Item>
         </Item>   
         <Label style={{marginLeft:2}}>Confirm Password</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>

                  <Label style={{marginLeft:2}}>First Name</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
        
            
                  <Label style={{marginLeft:2}}>Gender</Label>
         <Item regular picker  style={{borderColor:'#6495ed',marginTop:10}} >

                                    <Picker>
                                        <Picker.Item label="Male" value="key0" />
                                        <Picker.Item label="Female" value="key0" />
                                        
                                    </Picker> 
                                </Item>

                                <Button full regular
                         style={{ marginTop: 15, marginLeft: 5, marginRight: 5,borderColor:'#6495ed' }} onPress = { signIn }>
                            <Text style={{ color: 'white',alignSelf:"center",fontSize:20 }}>Sign-Up</Text>
                        </Button>
                
                  </Form>
                </Content>
            </View>
            </ScrollView>
        );

    }
}
 
    export default Register;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'

    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    logo: {
        width: 30,
        height: 10,
       
    
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    text1: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom: 5
    },
    text2: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    text3: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        color: 'blue'
    },
    socialIcons: {
        width: 50,
        height: 50,
    },
    socialIconsFacebook: {
        width: 30,
        height: 30,
    },
    socialIconsGoogle: {
        width: 30,
        height: 30,
    },
    text4: {
        fontSize: 15,
        textAlign: 'right',
        marginTop: 5,
        marginBottom: 5,
        color: 'grey'
    },
    gridStyles:{
        margin: 15,
        marginTop:5, 
        backgroundColor: 'white', 
        borderRadius: 100
    }
})
