'use strict';

const React = require('react-native');
const helpers = require('../../constants/helpers');
const typography = require('../../constants/typography');
const colors = require('../../constants/colors');

const {
  Switch,
  View,
  Text,
  StyleSheet,
  Component,
  PropTypes,
  Dimensions
  } = React;




class UiSwitch extends Component {
  static propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.bool,
    checked: PropTypes.bool
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      switch: false
    }
  }

  stateSwitch(value) {
    this.setState({
      switch: value
    });
    this.switch = value;
  }


  renderSwitch() {

    return (

      <View>
        <Switch
          style={styles.switch}
          onValueChange={this.stateSwitch.bind(this)}
          value={this.state.switch}
          disabled={this.props.disabled}
          name={this.props.name}
        />

      </View>
    )
  }

  render() {

    if (!this.props.text || this.props.text === '') {
      return this.renderSwitch();
    }
    return (
      <View style={styles.box}>
        <Text style={styles.text}>{this.props.text}</Text>
        {this.renderSwitch()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  text: {
    fontSize: 16
  },
  switch: {}

});

module.exports = UiSwitch;
