import React, { Component } from 'react';
import { FlatList } from 'react-native';        //flat list helps to crate a list of item
import { ListItem } from 'react-native-elements';     //List Item is the list of the items i.e here dishes
import { DISHES } from '../shared/dishes';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };

    }

    //each navigation customization
    static navigationOptions = {
        title: 'Menu'
    };

 
    render() {

        const renderMenuItem = ({ item, index }) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}    //the side arrow for each list, is now hidden
                    onPress={() => this.props.navigation.navigate('Dishdetail', {dishId: item.id})}  //passing inforamtion to dishdetail compnenet using navigate , and also passing the other prams
                    leftAvatar={{ source: require('./images/uthappizza.png') }}   // image source, one of the way to show image

                />
            );
        }


    
        return (
            <FlatList
                data={this.state.dishes}
                renderItem={renderMenuItem}         //how to render each item in the list 
                keyExtractor={item => item.id.toString()}
            />
        );
    }

}

export default Menu;

