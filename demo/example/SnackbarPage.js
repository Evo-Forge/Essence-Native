/**
 * Created by zsoltmakai on 5/12/2016.
 */

const Snackbar = require('../app/components/essence-snackbar');

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PropTypes,
  TouchableHighlight
} from 'react-native';


export default class SnackbarPage extends React.Component {
  toggleSnackbar() {
    this.refs.snack.toggle();
  }

  render() {


    return (
      <View style={styles.container}>

        <Snackbar
          ref="snack"
          content="Snackbar"
          undoButton={false}
        >
        </Snackbar>
        <TouchableHighlight style={{
           width: 50,
           height: 50,
           backgroundColor: 'black',
           marginBottom: 0
          }} onPress={this.toggleSnackbar.bind(this)}>
          <View/>
        </TouchableHighlight>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {

  }
});
