import React, { Component } from 'react';
import { FlatList } from 'react-native';        //flat list helps to crate a list of item
import { Tile } from 'react-native-elements';     //List Item is the list of the items i.e here dishes

import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        dishes: state.dishes
    }
}
class Menu extends Component {

    //each navigation customization
    static navigationOptions = {
        title: 'Menu'
    };

    //hideChevron={true}  (no longer neeeedded )  //the side arrow for each list, is now hidden

    render() {

        const renderMenuItem = ({ item, index }) => {
            return (
                <Tile
                    key={index}
                    title={item.name}
                    caption={item.description}

                    onPress={() => navigate('Dishdetail', { dishId: item.id })}  //passing inforamtion to dishdetail compnenet using navigate , and also passing the other prams
                    imageSrc={{ uri: baseUrl + item.image }}   // image source, one of the way to show image

                />
            );
        }



        return (
            <FlatList
                data={this.props.dishes.dishes}
                renderItem={renderMenuItem}         //how to render each item in the list 
                keyExtractor={item => item.id.toString()}
            />
        );
    }

}

export default connect(mapStateToProps)(Menu);
