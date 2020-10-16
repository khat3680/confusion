import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';        //flat list helps to crate a list of item
import { Card } from 'react-native-elements';     //List Item is the list of the items i.e here dishes
import { DISHES } from '../shared/dishes';
import {} from 'react-navigation';


function RenderDish(props) {

    const dish = props.dish;

    if (dish != null) {
        return (
            <Card
                featuredTitle={dish.name}
                image={require('./images/uthappizza.png')}
            >
                <Text style={{ margin: 10 }}>{dish.description}</Text>
            </Card>
        );
    }
    else {
        return (<View></View>);
    }
}

class Dishdetail extends Component {

    constructor(props){
        super(props);
        this.state={
            dishes: DISHES
        };
    }


     //each navigation customization
    static navigationOptions = {
        title: 'Dish Details',
    };

    render() {

        const dishId = this.props.route.params.dishId; //some other thing

        return (
            <RenderDish dish={this.state.dishes[+dishId]} />        // plus sign is just converting string to number

        );
    }
}

export default Dishdetail;