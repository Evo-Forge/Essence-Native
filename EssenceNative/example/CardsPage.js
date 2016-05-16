/**
 * Created by zsoltmakai on 5/12/2016.
 */
/**
 * Created by zsoltmakai on 5/12/2016.
 */
const Card = require('../app/components/essence-cards');

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PropTypes
} from 'react-native';


export default class CardsPage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Card/>
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