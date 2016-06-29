'use strict';

const React = require('react-native');
const styles = require('./styles');

const {
  Switch,
  View,
  Text,
  Component,
  PropTypes,
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
      const switchValue = this.props.value || this.state.switch;
    return (

      <View>
        <Switch
          style={styles.switch}
          onValueChange={this.stateSwitch.bind(this)}
          value={switchValue}
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
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
        {this.renderSwitch()}
      </View>
    )
  }
}

module.exports = UiSwitch;
