/**
 * Created by zsoltmakai on 5/12/2016.
 */
const Divider = require('../app/components/essence-divider');

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PropTypes
} from 'react-native';

export default class DividerPage extends React.Component {

  render() {
    return (
      <View style={{marginTop: 100}}>
       <Divider/>
      </View>
    )
  }

}