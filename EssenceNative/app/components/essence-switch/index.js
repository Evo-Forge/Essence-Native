'use strict';

const React = require('react-native');
const helpers = require('../../styles/helpers');
const typography = require('../../styles/typography');
const colors = require('../../styles/colors');

const {
  Switch,
  View,
  Text,
  StyleSheet,
  Component,
  PropTypes,
  Dimensions
} = React;

const SIZE = {
  INPUT_MARGIN_BOTTOM: 10
};

const WIDTH_CORRECTOR = 10;

class UiSwitch extends Component {
  static propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.bool,
  };

  static defaultProps = {

  };

  constructor(props) {
    super(props);
    this.state = {
      switch: false
    }
  }

  stateSwitch(value) {
    this.setState ({
      switch: value
    })
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
    let boxStyle = {},
      {width} = Dimensions.get('window');
    boxStyle.width = width - SIZE.INPUT_HORIZONTAL_MARGIN * 2 + WIDTH_CORRECTOR;
    if(!this.props.text || this.props.text === '') {
      return this.renderSwitch();
    }
    return (
      <View style={[styles.box, boxStyle]}>
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
    flexDirection: 'column',
    // marginBottom: SIZE.INPUT_MARGIN_BOTTOM
  },
  text: {
    //  flex: 1,
    //  flexDirection: 'column',
    //  alignSelf: 'center',
    fontSize: 16,
    color: colors['e-text-purple-600'],
    //  marginBottom: 2,
    //  marginLeft: WIDTH_CORRECTOR
  },
  switch: {
    //  margin: 0,
    //  padding: 0,
    //  left: 0
  },

});

module.exports = UiSwitch;
