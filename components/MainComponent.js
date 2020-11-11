import React, { Component } from 'react';
import { View, Platform, useWindowDimensions } from 'react-native';        //flat list helps to crate a list of item
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';


// we are making a ManuNavigator, which is a Stack NAvogator so we can use it in our menu componenet
//with providing all the required configuration

const MenuNavigator = createStackNavigator();
const HomeNavigator = createStackNavigator();
const MainNavigator = createDrawerNavigator();

function MyStack() {

    return (
        
            <MenuNavigator.Navigator initialRouteName={Menu}
                screenOptions={{
                    headerStyle: { backgroundColor: '#512DA8' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { color: '#fff' }
                }}>
                <MenuNavigator.Screen name="Menu" component={Menu} />
                <MenuNavigator.Screen name="Dishdetail" component={Dishdetail} />
            </MenuNavigator.Navigator>
        
    );
}

function MyHomeStack() {
    return (
        
            <HomeNavigator.Navigator initialRouteName={Home}
                screenOptions={{
                    headerStyle: { backgroundColor: '#512DA8' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { color: '#fff' }
                }}>
                <HomeNavigator.Screen name="Menu" component={Home} />
            </HomeNavigator.Navigator>
        
    );
}

function MyDrawer() {

    return (

        <NavigationContainer>
            <MainNavigator.Navigator
                initialRouteName="Home"
                drawerStyle={{ backgroundColor: '#D1C4E9' }}
            >
                <MainNavigator.Screen name="Home" component={MyHomeStack} />
                <MainNavigator.Screen name="Menu" component={MyStack} />
            </MainNavigator.Navigator>
        </NavigationContainer >

    );
}

// common navigatoin theme for all , navigators (can also do for each one)


class Main extends Component {

    render() {
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS == 'ios' ? 0 : Expo.Constants.statusBarHeight }} >
                <MyDrawer />
            </View>
        );
    }
}

export default Main;
