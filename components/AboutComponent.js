import React, { Component } from 'react';
import { Text, FlatList, ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        leaders: state.leaders
    }
}




function History() {
    return (
        <Card>
            <Card.Title>Our History</Card.Title>
            <Card.Divider />
            <Text style={{ margin: 10 }} >
                Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
                </Text>
            <Text style={{ margin: 10 }} >The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
</Text>
        </Card>
    );
}
class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    };

    render() {

        const renderLeaderItem = ({ item }) => {
            return (
                <ListItem

                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}    //the side arrow for each list, is now hidden
                    leftAvatar={{ source: { uri: baseUrl + item.image } }}
                // image source, one of the way to show image

                />
            );
        }

        return (

            <ScrollView >
                <History />
                <Card>
                    <Card.Title>Corporate Leadership</Card.Title>
                    <Card.Divider />
                    <FlatList
                        data={this.props.leaders.leaders}       //now leaders contains many things and here we only need the leaders array from them
                        renderItem={renderLeaderItem}         //how to render each item in the list
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>


        );
    }
}
export default connect(mapStateToProps)(About);