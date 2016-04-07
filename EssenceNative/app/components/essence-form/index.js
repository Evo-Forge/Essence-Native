'use strict';

const React = require('react-native');

const {
  Component,
  StyleSheet,
  View
} =  React;

const MARGIN_TOP = 0;

class UiForm extends Component {

  render() {
    return (
      <View style={[this.props.style, styles.wrapper]}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.crate({
  wrapper: {
    marginTop: MARGIN_TOP,
    flex: 1,
    flexDirection: 'column'
  }
});

module.exports = UiForm;
