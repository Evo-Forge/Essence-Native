/**
 * Created by zsoltmakai on 5/12/2016.
 */
const BottomSheet = require('../../lib/components/BottomSheets/BottomSheets');
import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


export default class BottomSheetsPage extends React.Component {

  toggleSheet() {
    this.refs.sheet.toggle();
  }

  render() {


    return (

      <BottomSheet
        ref="sheet"
        type="list"
        style={styles.container}
        content={<View><Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text></View>}
      >
        <TouchableHighlight style={{
             width: 50,
             height: 50,
             backgroundColor: 'black'
             }} onPress={this.toggleSheet.bind(this) }>
          <View />
        </TouchableHighlight>
      </BottomSheet>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: 200,

  }
});