import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,ScrollView, Image } from 'react-native';
import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Grid, Col, Picker, DatePicker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dropdown } from 'react-native-material-dropdown';
class MyProfile extends Component {
    static navigationOptions = {  
    
        title: 'MyProfile',   
        
        headerStyle: {  
        
            backgroundColor:'#ff8c00'
           
    
            
        },  
        //headerTintColor: '#0ff',  
        headerTitleStyle: {  
            
           
           
              marginLeft:75,
            
            fontSize:24,
         
       
        },    
    };   
    constructor(props) {
        super(props); 
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this); 
        this.state = { choosenGender: new Gender()} ;
        this.setGender = this.setGender.bind(this)
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate }); 
        
    }
    setGender(newGender) {
        this.setState({ choosenGender: newGender}); 
        
    }
    render() {
       
        return (
           
          <ScrollView>
            <View style={styles.container}>
               

               
                <Content>
                    <Form>
                    <Label style={{marginLeft:2}}>First Name</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
                  <Label style={{marginLeft:2}}>Last Name</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
                 <Item>
         </Item>   

         <Label style={{marginLeft:2}}>Gender</Label>
         <Item regular picker  style={{borderColor:'#6495ed',marginTop:10}} >
                                    <Picker>
    ______                                    <Picker.Item label="Male" value="key0" />
                                        <Picker.Item label="Female" value="key0" />
                                        onGenderChange={this.setGender}
                                disabled={false}
                                    </Picker> 
                                </Item>


                 
                  <Label style={{marginLeft:2}}>EmailId</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
                  <Label style={{marginLeft:2}}>Mobile Number</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>

                  <Label>Birthday</Label>
                        <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                    
                            <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                           placeHolderText="DD/MM/YYYY"
                          
                           
                               
                                placeHolderTextStyle={{ color: "black",flex:1,textAlign:"center",marginLeft:85}}
                                onDateChange={this.setDate}
                                disabled={false}
                            />
                        </Item>
                        <Label style={{marginLeft:2}}>Blood Group</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
                  <Label style={{marginLeft:2}}>Address</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
                        
                        
                        <Grid style={{marginTop:20,borderColor:'#6495ed'}}>
                            <Col size={60}>
                                <Item regular picker>
                                    <Picker>
                                        <Picker.Item label="City" value="key0" />
                                        <Picker.Item label="United States" value="key0" />
                                        <Picker.Item label="United Kingdom" value="key1" />
                                        <Picker.Item label="Italy" value="key2" />
                                        <Picker.Item label="India" value="key3" />
                                    </Picker>
                                </Item>
                            </Col>
                            <Col size={60}>
                                <Item regular picker>
                                    <Picker>
                                        <Picker.Item label="State" value="key0" />
                                        <Picker.Item label="United States" value="key0" />
                                        <Picker.Item label="United Kingdom" value="key1" />
                                        <Picker.Item label="Italy" value="key2" />
                                        <Picker.Item label="India" value="key3" />
                                    </Picker>
                                </Item>
                            </Col>
                        </Grid>
                        <Label style={{marginLeft:2}}>ZIP code</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>

                       
                        <Button full regular
                         style={{ marginTop: 15, marginLeft: 3, marginRight: 3,borderColor:'#6495ed' }} >
                            <Text style={{ color: 'white',alignSelf:"center",fontSize:20 }}>Save</Text>
                        </Button>
                    </Form>
                </Content>
            </View>
            </ScrollView>
        );

    }
}
export default MyProfile;
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
        backgroundColor:'orange',
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
    gridStyles: {
        margin: 15,
        marginTop: 5,
        backgroundColor: 'white',
        borderRadius: 100
    }
})
