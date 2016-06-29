"use strict";

const React = require('react-native');
const styles = require('./styles');

// SIZE
const {
  View,
  Text,
  Component,
  PropTypes,
  Dimensions,
} = React;

const SIZE = {
  BORDER_RADIUS: 18,
  INPUT_HORIZONTAL_MARGIN: 60
};

const COLOR = {
  "DEFAULT": "#cccccc",
  "PRIMARY": "#2196f3",
  "SUCCESS": "#4caf50",
  "INFO": "#03a9f4",
  "WARNING": "#ff9800",
  "DANGER": "#f44336"
};

class UiButton extends Component {

    static propTypes = {
      borderColor: PropTypes.string,
      textColor: PropTypes.string,
      onPress: PropTypes.func,
   // disabled: PropTypes.bool,
      text: PropTypes.string.isRequired,
      width: PropTypes.number,
      elevation: PropTypes.number,
      type: PropTypes.string,
   // ripple: PropTypes.bool
      backgroundColor: PropTypes.any
    };

    static defaultProps = {
      borderColor: '#00B8D4',
      textColor: 'white',
   // disabled: false,
      text: 'Button',
      elevation: 5,
      type: 'DEFAULT'

    };

    constructor(props) {
      super(props);
      this.state = {
        isDisabled: false,
        isPressed: false,
        wrapperWidth: 0
    };
  }
    disable(value) {
      if(this.state.isDisabled === value) return;
      this.setState({
        isDisabled: (typeof value === 'boolean' ? value : true)
      });
    }

    handlePress() {
      if(this.props.disabled === true || this.state.isDisabled) return;
      this.props.onPress && this.props.onPress();
    }

    render() {
      //   if(React.Platform.OS === 'android')   make shadow for IOS
      const { width } = Dimensions.get('window').width;
      const MIN_WIDTH = width - SIZE.INPUT_HORIZONTAL_MARGIN * 2;
      let isDisabled = this.props.disabled || this.state.isDisabled || false;
      let buttonSize = {},
        backgroundColor,
        borderColor,
        textColor,
        elevation;
      if(isDisabled) {
        backgroundColor = COLOR["DEFAULT"];
        borderColor = '#90CAF9';
        textColor = '#0D47A1';
        elevation = 0;
      } else {
        backgroundColor = COLOR[this.props.type.toUpperCase()] || COLOR['DEFAULT'];
        borderColor = this.props.borderColor;
        textColor = this.props.textColor;
        elevation = this.props.elevation;
      }
      let buttonStyle = {
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        elevation: elevation
      };
      buttonSize.width = (this.props.width || this.state.wrapperWidth || MIN_WIDTH);
      function calculateMinWidth(event) {
        if(this.props.width) return;
        if(this.state.wrapperWidth != 0) return;
        const { width } = event.nativeEvent.layout;
        if(width < MIN_WIDTH) {
          this.setState({
            wrapperWidth: MIN_WIDTH
          });
        }
      }

      let rippleColor = '#B2EBF2';
      rippleColor = '#26C6DA';
      let textStyle = {
        color: textColor,
        textShadowColor: 'grey'

      };
      // TODO: add TouchableHighlight with onPressIn=setState("isPressed", true) and onPressOut=setState("isPressed", false)

        /* THERE ARE 2 backgroundColors! One is just prop passed down, the other is a module trough buttonStyle-buttonSize */
      return (
        <View style={[styles.wrapper, buttonStyle, buttonSize]} onLayout={calculateMinWidth.bind(this)}>
          <View
            style={[styles.button, buttonSize]}
            onPress ={this.handlePress.bind(this)}
            enabled={!isDisabled}
            backgroundColor={this.props.backgroundColor}
            rippleColor={rippleColor}>
            <Text style={[ styles.text, textStyle]}>
              {this.props.text.toUpperCase()}
            </Text>
          </View>
        </View>
      );
    }
}

module.exports = UiButton;
