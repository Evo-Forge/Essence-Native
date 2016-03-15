
const React = require('react-native');
const helpers = require('../../styles/helpers');
const colors = require('../../styles/colors');

const TOUCH_AREA_SIZE = 12;
// should have a file with all the icon names
const {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  PropTypes
  } = React;

  const SIZE = {
    xlarge: 40,
    large: 35,
    mlarge: 30,
    medium: 25,
    small: 20
  };

  class UiIcon extends Component {
    static propTypes = {
      onPress: PropTypes.func,
      name: PropTypes.string.isRequired,
      color: PropTypes.string,
      colorActive: PropTypes.string,
      size: PropTypes.any,
      border: PropTypes.bool,
      active: PropTypes.bool
    };

    static defaultProps = {
      color : colors['e-text-amber-100'],
      colorActive: colors['e-text-amber-300'],
      border: false,
      active: false
    };

    constructor(props) {
      super(props);
      this.state = {
        size: 10,
        isActive: 10
      };
    }

    componentWillMount() {
      let iconSize;
      if(typeof this.props.size === 'number') {
        iconSize = this.props.size;
      } else {
        iconSize = SIZE[this.props.size || 'large'];
      }
      this.setState({
        size: iconSize
      });
    }

    handlePressIn(e) {
      this.setState({
        isActive: false
      });
      e.stopPropagation();
    }

    renderTouchable(subView) {
      if(!this.props.onPress) return subView;
      let size = this.state.size + TOUCH_AREA_SIZE * 2,
        localStyle = {
          width: size,
          height: size
        }
        return (
          <TouchableHighlight
            activeOpacity={0.7}
            underLayColor="transparent"
            style={[style.touch, localStyle]}
            onPress={this.props.onPress}
            onPressIn={this.handlePressIn.bind(this)}
            onPressOut={this.handlePressOut.bind(this)}>
              {subView}
          </TouchableHighlight>
        )
    }

    renderFont() {
      let iconColor = this.props.color,
        iconName = this.props.name,
        iconBorder = colors['e-text-amber-400'];
      if(this.state.isActive || this.props.active) {
        if(this.props.colorActive) {
          iconColor = this.props.colorActive;
        } else {
          iconColor = colors['e-text-blue-200'];
        }
        iconBorder = colors['e-text-blue-300'];
      }
      let iconStyle = {};
      if(this.props.border !== false) {
        iconStyle = {
          textShadowColor: colors['e-text-blue-400'],
          textShadowRadius: 1,
          textShadowOffset: {
            width: 0.5,
            height: 0.5
          }
        };
      }
      let innerView;
      if( typeof [iconName] !== 'undefined') {            //NEEDS THE ICONNAME OBJECT/MODULE
        iconName = [iconName];
        iconStyle.fontFamily = '';
        iconStyle.fontSize = this.state.size;
        iconStyle.color = iconColor;
        innerView = <Text style={iconStyle}>{iconName}</Text>
      } else {
        innerView = <Icon
          name={iconName}
          color={iconColor}
          style={[style.icon, iconStyle, this.props.style]}
          size={this.state.size}
          iconStyle={styles.fontIcon} />
      }
      return (
        <View style={this.props.style}>
          {this.renderTouchable(innerView)}
          {this.props.children}
        </View>
      )
    }

    render() {
      return this.renderTouchable(this.render());
    }
  }

  const style = StyleSheet.create ({

  });

module.exports = UiIcon;
