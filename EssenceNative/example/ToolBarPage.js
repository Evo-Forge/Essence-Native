/**
 * Created by zsoltmakai on 5/12/2016.
 */
const ToolBar = require('../app/components/essence-toolBar');

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PropTypes
} from 'react-native';


export default class ToolBarPage extends React.Component {

  render() {
    return (
      <View>
        <ToolBar></ToolBar>
        <View style={{height: 10}} />
        <ToolBar title="With title" />
      </View>
    )
  }

}