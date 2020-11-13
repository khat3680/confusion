import React, { Component } from 'react';
import { View, Platform } from 'react-native';        //flat list helps to crate a list of item
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';


// we are making a ManuNavigator, which is a Stack NAvogator so we can use it in our menu componenet
//with providing all the required configuration

const MenuNavigator = createStackNavigator();
const HomeNavigator = createStackNavigator();
const AboutUsNavigator = createStackNavigator();
const ContactUsNavigator = createStackNavigator();
const MainNavigator = createDrawerNavigator();

function MyMenuStack() {

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
                <HomeNavigator.Screen name="Home" component={Home} />
            </HomeNavigator.Navigator>
        
    );
}

function MyAboutStack() {
    return (
        
        <AboutUsNavigator.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#512DA8' },
                headerTintColor: '#fff',
                headerTitleStyle: { color: '#fff' }
            }}>
            <AboutUsNavigator.Screen name="About Us" component={About} />
        </AboutUsNavigator.Navigator>
    
);
}

function MyContactStack() {
    return (
        
        <ContactUsNavigator.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#512DA8' },
                headerTintColor: '#fff',
                headerTitleStyle: { color: '#fff' }
            }}>
            <ContactUsNavigator.Screen name="Contact Us" component={Contact} />
        </ContactUsNavigator.Navigator>
    
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
                <MainNavigator.Screen name="About Us" component={MyAboutStack} />
                <MainNavigator.Screen name="Menu" component={MyMenuStack} />
                <MainNavigator.Screen name="Contact Us" component={MyContactStack} />

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
