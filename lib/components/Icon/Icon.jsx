
const React = require('react-native');
const Image = require('../Image/Image.jsx');
const styles = require('./styles');
const COLORS = require('../../colors');

// should have a file with all the icon names
const {
  Component,
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
    color : '#FFECB3',
    colorActive: '#FFD54F',
    border: false,
    active: false
  };

  constructor(props) {
    super(props);
    this.state = {
      size: 10,
      isActive: false
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

  handlePressOut(e) {
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
      };
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
      iconBorder = '#FFCA28';
    if(this.state.isActive || this.props.active) {
      if(this.props.colorActive) {
        iconColor = this.props.colorActive;
      } else {
        iconColor = '#90CAF9';
      }
      iconBorder = '#64B5F6';
    }
    let iconStyle = {};
    if(this.props.border !== false) {
      iconStyle = {
        textShadowColor: iconBorder,
        textShadowRadius: 1,
        textShadowOffset: {
          width: 0.5,
          height: 0.5
        }
      };
    }
    let innerView;
    if( typeof [iconName] !== 'undefined') {            //NEEDS THE ICON NAME OBJECT/MODULE
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
    return this.renderTouchable(this.renderFont());
  }
}

module.exports = UiIcon;
