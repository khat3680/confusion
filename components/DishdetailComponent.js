import React, {Component } from 'react';
import {View, FlatList,Text} from 'react-native';        //flat list helps to crate a list of item
import {Card} from 'react-native-elements';     //List Item is the list of the items i.e here dishes

function RenderDish(props) {

    const dish = props.dish;

    if(dish != null) {
        return (
            <Card 
            featuredTitle = {dish.name}
            image= {require('./images/uthappizza.png')}
            >
            <Text style = {{margin:10}}>{dish.description}</Text>
            </Card>
        );
    }
    else {
        return (<View></View>);
    }
}

function Dishdetail(props) {
    return (
        <RenderDish dish = {props.dish} />

    );
}

export default Dishdetail ;