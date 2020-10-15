import React, {Component } from 'react';
import {View, FlatList} from 'react-native';        //flat list helps to crate a list of item
import {ListItem} from 'react-native-elements';     //List Item is the list of the items i.e here dishes


function Menu(props) {
    
    const renderMenuItem = ({item,index})   => {
        return(
            <ListItem 
            key = {index}
            title = {item.name}
            subtitle = {item.description}
            hideChevron = {true}    //the side arrow for each list, is now hidden
            leftAvatar= {{source: require('./images/uthappizza.png')}}   // image source, one of the way to show image
            
            />
        );
    }



    return(
        <FlatList 
            data = {props.dishes} 
            renderItem = {renderMenuItem}         //how to render each item in the list 
            keyExtractor = {item => item.id.toString()}
        />
    );

}

export default Menu;

