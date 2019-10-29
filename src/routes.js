import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './login'; 
import Healthcard from './healthcard';
import Menu from './menu';
import Register from './register';
import Dashboard from './dashboard';
import { Icon } from 'native-base';
import MyProfile from './myprofile';
import Settings from './settings';

const MenuIcon = () => {

    return (
        <Icon name='menu' size={30} />
    )
}
const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="login" initial={true} component={Login} hideNavBar={true} />

           
            <Scene key="register" component={Register} hideNavBar={false} /> 
     

            <Scene key ="drawer" drawer contentComponent={Menu} drawerIcon={MenuIcon}  drawerWidt={250} hideNavBar>

                <Scene key="myPf" component={MyProfile}/>
                <Scene key="health" component={Healthcard}/>

                <Scene key="setti" component={Settings}/>

<Scene key ="dashB" component={Dashboard}/>
            </Scene>


            </Scene>
    </Router>
)

export default Routes