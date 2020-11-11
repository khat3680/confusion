import React, {Component} from 'react';
import {View , Text} from 'react-native';
import { exp } from 'react-native-reanimated';


class Home extends Component {

      //each navigation customization
      static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <View><Text>Home Component</Text></View>
        );
    }
}
export default Home;