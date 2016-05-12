/**
 * Created by zsoltmakai on 5/12/2016.
 */
const TextArea = require('../app/components/essence-textArea');

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PropTypes
} from 'react-native';


export default class TextAreaPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TextArea />
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