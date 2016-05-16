/**
 * Created by zsoltmakai on 5/16/2016.
 */
'use strict';

const React = require('react-native');

const {
  Component,
  StyleSheet,
  View,
  Dimensions,
  PropTypes,
  TouchableHighlight
  } = React;

class UiActionButton extends Component {

  static propTypes = {
    color: PropTypes.string,
    onPress: PropTypes.func
  };

  static defaultProps = {
    color: 'green'
  };

  render() {
    return (
      <TouchableHighlight style={styles.wrapper}>
        <View style={styles.actionButton}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  actionButton: {

  },
  icon: {
    alignText: 'center'
  }

});

module.exports = UiActionButton;
