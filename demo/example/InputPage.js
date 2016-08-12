/**
 * Created by zsoltmakai on 5/12/2016.
 */
/**
 * Created by zsoltmakai on 5/12/2016.
 */
const Input = require('../app/components/essence-input');

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PropTypes
} from 'react-native';


export default class InputPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
       <Input placeholder="Input"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  }
});