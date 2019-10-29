
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/FontAwesome';


const signIn = () => {
  
    Actions.dashB()
};
const signUphere = () => {
    Actions.register()
};


class Login extends Component {
  render() {
      return (
          
          <View style={styles.container}>
              <Image resizeMode="contain" style={styles.logo} source={require('../images/sunkpo.jpg')} />
              
              <Text style={styles.text1}>MyDiet</Text>
             
              <Content>
                  <Form>
                  <Item stackedLabel last>
                            <Label>Username</Label>
                            <Input  placeholder="Enter your username" style={{ opacity:0.6, }} />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Password</Label>
                            <Input placeholder="Enter your password" style={{opacity:0.6  }} />
                        </Item>
                      <Button full regular
                         style={{ marginTop: 30, marginLeft: 5, marginRight: 5,backgroundColor:'#ff8c00' }} onPress = { signIn }>
                            <Text style={{ color: 'white',alignSelf:"center",fontSize:20 }}>Sign-In</Text>
                        </Button>
                        <Text style={styles.text2}>New User? <Text onPress = { signUphere} style={styles.text3}>Sign Up Here</Text></Text>
                        <Text style={styles.text2}>or</Text>
                        <Grid>
                    
                        <Col size={60}>
                                
                                    <Image resizeMode="contain" style={styles.socialIconsGoogle} source={require('../images/gg.png')} />
                               
                            </Col>
                            <Col size={60}>
                               
                                    <Image resizeMode="contain" style={styles.socialIconsFacebook} source={require('../images/fb.png')} />
                             
                            </Col>
                            <Col size={60}>
                                
                                    <Image resizeMode="contain" style={styles.socialIcons} source={require('../images/tw.png')} />
                               
                            </Col>
                            
                            
                        </Grid>
                      
                  </Form>
              </Content>
          </View>
      );
  }
}
export default Login;
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
      backgroundColor: '#ff7f50',
      paddingVertical: 15
  },
  buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  },
  logo: {
      width: 300,
      height: 100,
      marginTop: 10,
      marginLeft: 10
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
      marginBottom: 5,
      justifyContent: 'center'
  },
  text2: {
      fontSize: 15,
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 15

  },
  text3: {
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10,
      color: 'blue'
  },
  socialIcons: {
      width: 30,
      height: 30,
      marginLeft:40,
  },
  socialIconsFacebook: {
      width: 30,
      height: 30,
     alignSelf:'center',
  },
  socialIconsGoogle: {
      width: 30,
      height: 30,
      marginLeft:30,
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
