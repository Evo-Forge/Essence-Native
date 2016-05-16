'use strict';

const React = require('react-native');
const color = require('../../constants/colors')

const {
  Component,
  View,
  PropTypes,
  StyleSheet
  } = React;

// static component heights

const SIZE = {
  thin: 1,
  thick: 2
};
// static component widths

const WIDTHS = {
  "small": 0.25,
  "medium": 0.5,
  "large": 0.75,
  "full": 1
};

/**
* The UI Divider takes in:
  - size - the height of the component, as a string or a number.
  - width - the width of the component, as a string or a number
  - color - the color of the component as a string
  //
*/
class UiDivider extends Component {


  static propTypes = {
    size: PropTypes.any,
    width: PropTypes.any,
    color: PropTypes.any
  };

  // default proprieties of the compoment

  static defaultProps = {
    size: 'thick',
    width: 'full',
    color: color['e-background-indigo-400']
  };

// If width is a number, we are going to use it. Otherwise, we use flex.

  render() {

    let barSize;
    if(typeof this.props.size === "string") {
      barSize = SIZE[this.props.size];
    } else if (typeof this.props.size === 'number') {
      barSize = this.props.size;
    } else {
      barSize = SIZE['thin'];
    }
    const wrapperStyle = {};
    let flexView;
    const localStyle = {
      height: barSize,
      backgroundColor: this.props.color
    };
    if(typeof this.props.width === 'number') {
      // custom width.
      localStyle.width = this.props.width;
    } else {
      // flex width.
      wrapperStyle.flexDirection = 'row';
      localStyle.flex = WIDTHS[this.props.width] || WIDTHS['small'];
      localStyle.flexDirection = 'row';
      flexView = <View style={{flex: 1 - localStyle.flex}} />;
    }
    return (
      <View>
        <View style={wrapperStyle}>
          <View style={[localStyle, this.props.style]} />
          {flexView}
        </View>
      </View>
    )
  }
}

module.exports = UiDivider;
