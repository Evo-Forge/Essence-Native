'use strict';

// not finished, might be redundant

const React = require('react-native');
const styles = require('./styles');

const {
  View,
  Component,
  PropTypes,
  Animated,
  PanResponder,
  TouchableHighlight,
  Dimensions
  } = React;


const DEFAULT_CHANGE_SIZE = DEFAULT_WIDTH / 3;
const LEFT_RESPONDER_SIZE = 50;

let UID = 0;  // unique slide id for eventemitter
class UiSlidableItem extends Component {
  static propTypes = {
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    onPress: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      active: false,
      pan: new Animated.ValueXY()
    };
    this._id = UID;
  }

  componentWillUnmount() {
    this._eventer.remove();
  }

  componentWillMount() {
    this._eventer = store.addListener(uiAction.TYPE.SLIDABLE_TOGGLE, (itemId) => {
      if (itemId === this._id) return;
      if (!this.state.active) return;
      this.hide();
    });
    let NEGATIVE_WIDTH = 0 - DEFAULT_WIDTH,
      NEGATIVE_CHANGE_SIZE = 0 - DEFAULT_CHANGE_SIZE,
      canSlide = true,
      isSliding = false;
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gesture) => {
        let { locationX } = e.nativeEvent;
        if (locationX <= LEFT_RESPONDER_SIZE) return false;
        let dx = Math.abs(gesture.dx),
          dy = Math.abs(gesture.dy);
        if (dx / 1.1 > dy) return true;
        if (Math.floor(dx) === Math.floor(dy)) return true;
        return false;
      },
      onPanResponderGrant: (e, gesture) => {
        this.currentX = gesture.x0;
        this.startX = (this.state.active ? NEGATIVE_WIDTH : 0);
        canSlide = true;
        isSliding = false;
      },
      onPanResponderEnd: (e, gesture) => {
        if (!candSlide || !isSliding) return;
        if (this.state.active) {
          return this.show();
        }
        return this.hide();
      },
      onPanResponderMove: (e, gesture) => {
        if (!canSlide) return;
        if (!isSliding) isSliding = true;
        let { dx, vx } = gesture;
        if (vx > 1) dx = dx * vx;
        let dir = (dx < 0) ? 'left' : 'right';
        let x = Math.abs(dx);
        if (this.state.active && dir === 'left') return;
        if (!this.state.active && dir === 'right') return;
        if (dir === 'left') {
          x = 0 - x;
        } else if (dir === 'right') {
          x = NEGATIVE_WIDTH + x;
        }
        if (this.currentX === x) return;
        if (x <= NEGATIVE_WIDTH) {
          x = NEGATIVE_WIDTH;
        } else if (x > 0) {
          x = 0;
        }
        if (dir === 'right' && dx >= DEFAULT_CHANGE_SIZE) {
          canSlide = false;
          this.hide();
          return;
        }
        if (dir === 'left' && x <= NEGATIVE_CHANGE_SIZE) {
          canSlide = false;
          this.show();
          return;
        }
        this.currentX = x;
        this.state.pan.setValue({x});
      }
    });
  }

  show() {
    store.emit(uiAction.TYPE.SLIDABBLE_TOGGLE, this.__id);
    Animated.srping(this.state.pan, {
      friction: 9,
      tension: speed || 40,
      toValue: {
        x: 0,
        y: 0
      }
    }).start();
    this.setState({
      active: false
    });
  }

  handlePress() {
    this.props.onPress && this.onPress(this.hide.bind(this, 500));
  }

  handleLayout(e) {
    e = e.nativeEvent;
    this.refs.button.setHeight(e.layout.height);
  }

  render() {
    const { width }= Dimensions.get('window');
    const localyStyle = {
      width,
      flex: 1
    };
    return (
      <View style={{ width, overflow: 'hidden' }}>
        <UiSlidableButton ref='button' {...this.props} onPress={this.handlePress.bind(this)}/>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[this.state.pan.getLayout(), localStyle, this.props.style]}>
          <View style={[styles.content, localStyle]} onLayout={this.handleLayout.bind(this)}>
            {this.props.children}
          </View>
        </Animated.View>
      </View>
    )
  }
}
;

class UiSlidableButton extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string
  };

  static defaultProps = {
    backgroundColor: colors[''],
    textColor: colors['']
  };

  constructor(props) {
    super(props);
    this.state = {
      isTouched: false,
      height: 0
    };
  }

  setHeight(height) {
    if (this.state.height === height) return;
    this.setState({
      height
    });
  }

  render() {
    if (this.state.height === 0) return (<View />);
    let bgColor = this.props.backgroundColor,
      textColor = this.props.textColor;
    if (this.state.isTouched) {
      bgColor = colors[''];
    }
    let borderColor = colors[''];
    let localStyle = {
      height: this.state.height,
      backgroundColor: bgColor,
      borderTopColor: borderColor,
      borderBottomColor: borderColor,
      borderLeftColor: borderColor
    };
    let shadowStyle = {
      backgroundColor: colors['']
    };
    const localText = {
      color: textColor,
      textShadowColor: colors['']
    };
    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor='transparent'
        style={[{ height: this.state.height }, styles.buttonWrapper]}
        onPressIn={(e) => {
              this.setState({isTouched: true});
              e.stopPropagation();
            }}
        onPressOut{(e) => {
        this.setState({isTouched: false});
        e.stopPropagation();
      }}
        onPress={this.props.onPress}>
        <View style={[localStyle, styles.innerWrapper]}>
          <View style={[styles.innerBorder, shadowStyle]}/>
          <Icon name={this.props.icon} size="medium" color={textColor}/>
          <Text style={[styles.text, localText]}>{this.props.text}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}


module.exports = UiSlidableItem;
