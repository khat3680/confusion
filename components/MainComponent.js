import React, { Component } from 'react';
import { View, Platform } from 'react-native';        //flat list helps to crate a list of item
import { createStackNavigator } from 'react-navigation';

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';


// we are making a ManuNavigator, which is a Stack NAvogator so we can use it in our menu componenet
//with providing all the required configuration

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail },
   

}, {
    intialRouteName: 'Menu',
    navigationOptions: {    // common navigatoin theme for all , navigators (can also do for each one)
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});

class Main extends Component {

    render() {
        return (
            <View style = {{flex:1, paddingTop: Platform.OS == 'ios' ? 0 : Expo.Constants.statusBarHeight}} >
                <MenuNavigator />
            </View>
        );
    }
}

export default Main;
