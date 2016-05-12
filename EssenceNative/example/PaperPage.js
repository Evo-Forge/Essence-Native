/**
 * Created by zsoltmakai on 5/12/2016.
 */
const Paper = require('../app/components/essence-paper');

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PropTypes
} from 'react-native';


export default class PaperPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Paper />
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
