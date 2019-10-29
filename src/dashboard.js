import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,ScrollView, Image } from 'react-native';
import React, { Component } from 'react';

class Dashboard extends Component {


// constructor(props ) {
//     super(props);
//     this.state={
//         isLoading: true,
//         dataSource:null,
//     }
// }


// componentDidMount(){
// return fetch('https://facebook.github.io/react-native/movies.json')
// .then ((response) => response.json())
// .then ((responseJson)=> 
//     this.state={
//         isLoading: false,
//         dataSource:responseJson.movies,
//     }

// }


    static navigationOptions = {  
        
        


        title: 'MyDiet ',  
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
                Welcome To Dashboard  
                </Text>
        )
    }

}
export default Dashboard;