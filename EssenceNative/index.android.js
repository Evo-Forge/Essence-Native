/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
/*
 const Input = require('./app/components/essence-input/index');
 const Button = require('./app/components/essence-button/index');

 const Icon = require('./app/components/essence-icon');
 const TextArea = require('./app/components/essence-textArea/index');
 const Card = require('./app/components/essence-cards');
 const Switch = require('./app/components/essence-switch');
 const Paper = require('./app/components/essence-paper');
 const Slider = require('./app/components/essence-sliders');
 const Chip = require('./app/components/essence-chip');
 const DrawerLayout = require('./app/components/essence-drawerLayout');
 const Header = require('./app/components/essence-header');
 const Image = require('./app/components/essence-image');
 const BottomSheet = require('./app/components/essence-bottomSheets/index');
 */
const helpers = require('./app/constants/helpers');
const colors = require('./app/constants/colors');

const List = require('./app/components/essence-list');


import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Dimensions,
    PropTypes,
    TouchableHighlight
} from 'react-native';

class EssenceNative extends Component {



    render() {


        return (

            <List />

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    }
});

AppRegistry.registerComponent('EssenceNative', () => EssenceNative);
