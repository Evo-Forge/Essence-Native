/**
 * Created by zsoltmakai on 8/17/2016.
 */
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';

const BottomNavigation = require('../../lib/components/BottomNavigation/BottomNavigation');

export default class BottomNavigationPage extends React.Component {

  render() {
    return (
      <BottomNavigation/>
    )
  }
}