'use strict';

const React = require('react-native');
const colors = require('../../constants/colors');

const BACKGROUND_COLOR = 'grey';

const SIZE = {
  FOOTER_HEIGHT: 70
};

const {
  Component,
  StyleSheet,
  Dimensions,
  View,
  PropTypes,
  TouchableHighlight,
  Text
  } = React;

class UiTabMenuItem extends Component {

  static propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.string,
    badge: PropTypes.number,
    first: PropTypes.bool,
    last: PropTypes.bool,
    onPress: PropTypes.func
  };

  static defaultProps = {
    active: false,
    fist: false,
    last: false
  };

  constructor(props) {
    super(props);
    this.state = {
      isPressed: false
    };
  }

  handlePressIn(e) {
    this.setState({
      isPressed: true
    });
    e.stopPropagation();
  }

  handlePressOut(e) {
    this.setState({
      isPressed: false
    });
    e.stopPropagation();
  }

  renderBadgeCount() {
    if (!this.props.badge) return;
    let localStyle = {},
      count = this.props.badge;
    if (count > 99) {
      count = '99';
    }
    if (!this.props.active) {
      localStyle.borderColor = this.state.isPressed ? 'lightgrey' : BACKGROUND_COLOR
    }
    return (
      <View style={[styles.badge, localStyle]}>
        <Text bold={true} styles={styles.badgeText}>{count}</Text>
      </View>
    )
  }

  render() {
    let height = SIZE.FOOTER_HEIGHT - 14,
      isActive = this.props.active;
    const localStyle = {
      height
    };
    const innerStyle = {};
    const localShadow = {
      height: height - 3
    };
    let shadowView;
    let inactiveBorder = 'lightgrey',
      activeBorder = 'darkgrey';
    if (!isActive) {
      innerStyle.backgroundColor = this.state.isPressed ? 'lightgrey' : BACKGROUND_COLOR;
      innerStyle.borderBottomColor = activeBorder;
      const shadowStyle = {
        borderBottomColor: 'lightgrey'
      };
      shadowView = <View style={[styles.bottomShadow, shadowStyle]}/>
    } else {
      innerStyle.borderLeftWidth = 1;
      innerStyle.borderLeftColor = (isActive ? activeBorder : inactiveBorder);
      innerStyle.borderRightWidth = 1;
      innerStyle.borderRightColor = (isActive ? activeBorder : inactiveBorder);
      innerStyle.borderBottomColor = 'transparent';
    }
    innerStyle.borderTopColor = (isActive ? activeBorder : inactiveBorder);

    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor="transparent"
        style={[styles.wrapper, localStyle]}
        longPressDelayTimeout={0}
        onPressIn={this.handlePressIn.bind(this)}
        onPressOut={this.handlePressOut.bind(this)}
        onPress={this.props.onPress}>
        <View style={[styles.wrapper, localStyle]}>
          <View style={[styles.inner, innerStyle]}>
            <View style={styles.icon}>
              {this.renderBadgeCount()}
            </View>
            <Text style={styles.text}>{this.props.children}</Text>
          </View>
          {shadowView}
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  bottomShadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 1,
    borderBottomWidth: 1
  },
  text: {
    marginTop: 2,
    fontSize: 12,
    color: 'brown',
    textShadowRadius: 1,
    textShadowColor: '#293b2f',
    textShadowOffset: {
      width: 0.5,
      height: 0.5
    }
  },
  icon: {
    height: 50,
    width: 50
  },
  badge: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'orange',
    borderColor: BACKGROUND_COLOR,
    borderRadius: 20,
    position: 'absolute',
    top: -4,
    right: -5
  },
  badgeText: {
    fontSize: 8,
    color: 'black'
  }
});

module.exports = UiTabMenuItem;