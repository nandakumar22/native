import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,ScrollView, Image } from 'react-native';
import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Grid, Col, Picker, DatePicker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
   
class Healthcard extends Component  {
    static navigationOptions = {  
        title: 'Health Card',  
        headerStyle: {  
            backgroundColor:'#ff8c00',  
        },  
        //headerTintColor: '#0ff',  
        headerTitleStyle: {  
            marginLeft:75,
            fontWeight: 'bold',  
        },   
    };  
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);  
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate }); 
    }
    render() {
        return (
           
          <ScrollView>
            <View style>
               

               
                <Content>
                    <Form>
                    <Label>Date</Label>
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
                    <Label style={{marginLeft:2}}>Time</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
                  <Label style={{marginLeft:2}}>Weight (Kgs)</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
                  <Label style={{marginLeft:2}}>BP (Diastrolic)</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
                  <Label style={{marginLeft:2}}>BP (systolic)</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
                  <Label style={{marginLeft:2}}>FBS</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
                  <Label style={{marginLeft:2}}>PPBS</Label>
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
export default Healthcard;
