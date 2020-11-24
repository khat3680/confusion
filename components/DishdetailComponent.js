import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';        //flat list helps to crate a list of item
import { Card, Icon } from 'react-native-elements';     //List Item is the list of the items i.e here dishes
import { } from 'react-navigation';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}



function RenderDish(props) {

    const dish = props.dish;
    //raised in icons convert them to a button and reverse is for colour , it kinda makes it intresting.
    if (dish != null) {

        return (
            <Card
                featuredTitle={dish.name}
                image={{uri: baseUrl + dish.image}}
            >
                <Text style={{ margin: 10 }}>{dish.description}</Text>

                <Icon
                    raised
                    reverse
                    name={ props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    onPress={() => props.favorite ? console.log('Already Favoruite') : props.onPress()} />

            </Card>
        );
    }
    else {
        return (<View></View>);
    }
}

function RenderComments(props) {
    const comments = props.comments;

    const renderCommentItem = ({ item, index }) => {
        return (
            <View key={index} style={{ margin: 10 }} >
                <Text style={{ fontSize: 14 }}>{item.comment}</Text>
                <Text style={{ fontSize: 12 }}>{item.rating}</Text>
                <Text style={{ fontSize: 12 }}>{'--' + item.author + ',' + item.date}</Text>

            </View>
        );
    }

    return (
        <Card title='Comments'>
            <FlatList data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favorites: []
        };
    }

    markFavorite(dishId) {
        this.setState({ favorites: this.state.favorites.concat(dishId) })
    }
    //each navigation customization
    static navigationOptions = {
        title: 'Dish Details',
    };

    render() {

        const dishId = this.props.route.params.dishId; //some other thing

        return (
            // plus sign is just converting string to number below
            <ScrollView>
                <RenderDish dish={this.props.dishes.dishes[+dishId]} 
                favorite={this.state.favorites.some( el => el === dishId)}
                onPress = {() => this.markFavorite(dishId) }
                />
                <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)} />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Dishdetail);