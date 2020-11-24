import React, { Component } from 'react';
import { View, Platform, TouchableOpacity, Image, StyleSheet, ScrollView, Text } from 'react-native';        //flat list helps to crate a list of item
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { SafeAreaView } from 'react-navigation';
import {
    createDrawerNavigator, DrawerContentScrollView, DrawerItemList
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';

import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}


const mapDispatchToProps = dispatch => ({

    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
})


// we are making a ManuNavigator, which is a Stack Navigator so we can use it in our menu componenet
//with providing all the required configuration

const MenuNavigator = createStackNavigator();
const HomeNavigator = createStackNavigator();
const AboutUsNavigator = createStackNavigator();
const ContactUsNavigator = createStackNavigator();
const MainNavigator = createDrawerNavigator();

const HeaderLeft = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                onPress={() => {
                    navigation.dispatch(DrawerActions.openDrawer());
                }}>
                <Icon
                    name='list'
                    type="font-awesome"
                    size={24}

                />
            </TouchableOpacity>
        </View>
    );
};



function MyMenuStack() {

    return (

        <MenuNavigator.Navigator initialRouteName={Menu}
            screenOptions={{
                headerStyle: { backgroundColor: '#512DA8' },
                headerTintColor: '#fff',
                headerTitleStyle: { color: '#fff' },
                headerLeft: ({ }) => <HeaderLeft />
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
                headerTitleStyle: { color: '#fff' },
                headerLeft: ({ }) => <HeaderLeft />
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
                headerTitleStyle: { color: '#fff' },
                headerLeft: ({ }) => <HeaderLeft />

            }}>
            <AboutUsNavigator.Screen name="About Us" component={About} />
        </AboutUsNavigator.Navigator>

    );
}

function MyContactStack() {
    return (
        <ContactUsNavigator.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#512DA8' },
            headerTintColor: '#fff',
            headerTitleStyle: { color: '#fff' },
            headerLeft: ({ }) => <HeaderLeft />
        }}  >

            <ContactUsNavigator.Screen name="Contact Us" component={Contact} />
        </ContactUsNavigator.Navigator>

    );
}
// flex is the ratio divison of the available area in the view
function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView>
            <SafeAreaView style={styles.container}
                forceInset={{ top: 'always', horizontal: 'never' }}  >
                <View style={styles.drawerHeader}>

                    <View style={{ flex: 1 }}>
                        <Image source={require('./images/logo.png')}
                            style={styles.drawerImage} />
                    </View>
                    <View style={{ flex: 2 }} >
                        <Text style={styles.drawerHeaderText}>Ristorante Confusion</Text>
                    </View>
                </View>
                <DrawerItemList {...props} />
            </SafeAreaView>
        </DrawerContentScrollView>
    )
};

function MyDrawer() {

    return (

        <NavigationContainer>
            <MainNavigator.Navigator
                initialRouteName="Home"
                drawerStyle={{ backgroundColor: '#D1C4E9' }}
                drawerContent={props => <CustomDrawerContent {...props} />}
            >
                <MainNavigator.Screen name="Home" component={MyHomeStack}
                    options={{
                        title: 'Home',
                        drawerLabel: 'Home',
                        drawerIcon: ({ tintColor }) => (
                            <Icon
                                name='home'
                                type='font-awesome'
                                size={24}
                                color={tintColor}
                            />
                        ),
                    }} />
                <MainNavigator.Screen name="About Us" component={MyAboutStack}
                    options={{
                        title: 'About Us',
                        drawerLabel: 'About Us',
                        drawerIcon: ({ tintColor }) => (
                            <Icon
                                name='info-circle'
                                type='font-awesome'
                                size={24}
                                color={tintColor}
                            />
                        ),
                    }} />
                <MainNavigator.Screen name="Menu" component={MyMenuStack}
                    options={{
                        title: 'Menu',
                        drawerLabel: 'Menu',
                        drawerIcon: ({ tintColor }) => (
                            <Icon
                                name='list'
                                type='font-awesome'
                                size={24}
                                color={tintColor}
                            />
                        ),
                    }}
                />
                <MainNavigator.Screen name="Contact Us" component={MyContactStack}
                    options={{
                        title: 'Contact Us',
                        drawerLabel: 'Contact Us',
                        drawerIcon: ({ tintColor }) => (
                            <Icon
                                name='address-card'
                                type='font-awesome'
                                size={22}
                                color={tintColor}
                            />
                        ),
                    }} />

            </MainNavigator.Navigator>
        </NavigationContainer >

    );
}

// common navigatoin theme for all , navigators (can also do for each one)


class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
      }
      


    render() {
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS == 'ios' ? 0 : Expo.Constants.statusBarHeight }} >
                <MyDrawer />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);