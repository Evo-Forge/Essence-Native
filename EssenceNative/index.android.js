/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
const Input =  require('./app/components/essence-input/index');
const Button =  require('./app/components/essence-button/index');
const helpers = require('./app/styles/helpers');
const Image = require('./app/components/essence-image');
const List = require('./app/components/essence-list');
const Icon = require('./app/components/essence-icon');
const colors = require('./app/styles/colors');
const TextArea = require('./app/components/essence-textArea/index');
const Cards = require('./app/components/essence-cards');
const Switch = require('./app/components/essence-switch');
const Paper = require('./app/components/essence-paper');
const Slider = require('./app/components/essence-sliders');
const Chip = require('./app/components/essence-chip');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PropTypes
} from 'react-native';

class EssenceNative extends Component {

  render() {



    return (

      <View style={styles.container}>

        <Chip/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',


  }
});

AppRegistry.registerComponent('EssenceNative', () => EssenceNative);
