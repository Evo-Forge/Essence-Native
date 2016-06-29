'use strict';

import React, {
  Animated,
  PanResponder,
  PropTypes,
  StyleSheet,
  TouchableWithoutFeedBack,
  View,
  Platform,
  Dimensions
} from 'react-native';

const styles = require('./styles');

module.exports = (function() {
  if (Platform.OS === 'android') {
    return React.DrawerLayoutAndroid;
  }

  const DEVICE_WIDTH = parseFloat(Dimensions.get('window').width);
  const THRESHOLD = DEVICE_WIDTH / 2;
  const VX_MAX = 0.1;
  const DRAG_INITIALIZATION_SIZE = 40;
  const IDLE = 'Idle';
  const DRAGGING = 'Dragging';
  const SETTLING = 'Settling';

  class DrawerLayout extends React.Component {

    static propTypes = {
      onLoad: PropTypes.func.isRequired,
      drawerWidth: PropTypes.number.isRequired,
      drawerPosition: PropTypes.oneOf(['left', 'right']).isRequired,
      renderNavigationView: PropTypes.func.isRequired,

      onDrawerSlide: PropTypes.func,
      onDrawerStateChanged: PropTypes.func,

      isLocked: PropTypes.bool,

      onDrawerOpen: PropTypes.func,
      onDrawerClose: PropTypes.func,

      keyboardDismissMode: PropTypes.oneOf(['none', 'on-drag'])

    };

    static defaultProps = {
      drawerWidth: DEVICE_WIDTH - DEVICE_WIDTH / 4,
      drawerPosition: 'left'
    };

    constructor(props, context) {
      super(props, context);
      this.state = {
        openValue: new Animated.Value(0)
      };
      this.isOpen = false;
      this.isDragging = false;
    }

    componentDidMount() {
      this.props.onLoad(this);
    }

    componentWillMount() {
      let { openValue } = this.state;
      openValue.addListener(({value}) => {
        this._lastOpenValue = value;
        this.props.onDrawerSlide && this.props.onDrawerSlide({nativeEvent: {offset: value}});
      });

      this._panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: this._shouldSetPanResponder.bind(this),
        onPanResponderGrant: this._panResponderGrant.bind(this),
        onPanResponderMove: this._panResponderMove.bind(this),
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderTerminate: this._panResponderReject.bind(this),
        onPanResponderRelease: this._panResponderRelease.bind(this),
        onPanResponderReject: this._panResponderReject.bind(this)
      });
    }

    _emitStateChanged(newState) {
      this.props.onDrawerStateChanged && this.props.onDrawerStateChanged(newState);
    }

    openDrawer() {
      this.open({
        velocity: 0.1
      });
    }

    closeDrawer() {
      this.close({
        velocity: 0.1
      });
    }

    showOverlay() {
      this.refs.overlay && this.refs.overlay.setVisible(true);
    }

    hideOverlay() {
      this.refs.overlay && this.refs.overlay.setVisible(false);
    }

    open(options = {}) {
      if (this.props.isLocked) return;
      this.showOverlay();
      this._emitStateChanged(SETTLING);
      Animated.spring(this.state.openValue, {
        toValue: 1,
        bounciness: 0,
        restSpeedThreshold: 0.1, ...options
      }).start(() => {
        if (!this.isOpen) {
          this.props.onDrawerOpen && this.props.onDrawerOpen();
        }
        this.isOpen = true;
        this.isDragging = false;
        this._emitStateChanged(IDLE);
      });
    }

    _handleDrawerOpen() {
      this.props.onDrawerOpen && this.props.onDrawerOpen();
    }

    _handleDrawerClose() {
      this.props.onDrawerClose && this.props.onDrawerClose();
    }

    _shouldSetPanResponder(e, { moveX, moveY, dx, dy}) {
      if (this._isRejected) {
        this._isRejected = false;
        return false;
      }
      if (this.isDragging) return true;
      let { drawerPosition } = this.props;
      if (Math.abs(dy) > 20 || this.isOpen) {
        return false;
      }
      if (moveX > DRAG_INITIALIZATION_SIZE) {
        return false;
      }
      if (moveX < DRAG_INITIALIZATION_SIZE / 3) {
        return true;
      }
      if (drawerPosition === 'left') {
        let overlayArea = DEVICE_WIDTH - (DEVICE_WIDTH - this.props.drawerWidth);
        if (this._lastOpenValue === 1) {
          if ((dx < 0 && (Math.abs(dx) > (Math.abs(dy) * 3))) || (moveX > overlayArea)) {
            this._isClosing = true;
            this._closingAnchorValue = this._getOpenValueForX(moveX);
            return true;
          }
        } else {
          if (moveX <= DRAG_INITIALIZATION_SIZE && dx > 0) {
            this._isClosing = false;
            return true;
          } else {
            return false;
          }
        }
      } else {
        let overlayArea = DEVICE_WIDTH - this.props.drawerWidth;

        if (this._lastOpenValue === 1) {
          if ((dx > 0 && (Math.abs(dx) > (Math.abs(dy) * 3))) || (moveX < overlayArea)) {
            this._isClosing = true;
            this._closingAnchorValue = this._getOpenValueForX(moveX);
            return true;
          }
        } else {
          if (moveX >= DEVICE_WIDTH - DRAG_INITIALIZATION_SIZE && dx < 0) {
            this._isClosing = false;
            return true;
          } else {
            return false;
          }
        }
      }
    }

    _panResponderGrant(e) {
      this.showOverlay();
      this.isDragging = true;
      if (this.props.isLocked) return;
      this._emitStateChanged(DRAGGING);
    }

    _panResponderMove(e, {moveX}) {
      if (this.props.isLocked) return;
      let openValue = moveX / this.props.drawerWidth;

      if (this._isClosing) {
        openValue = 1 - (this._closingAnchorValue - openValue);
      }

      if (openValue > 1) {
        openValue = 1;
      } else if (openValue < 0) {
        openValue = 0;
      }
      this.state.openValue.setValue(openValue);
    }

    _panResponderReject(e) {
      this._isRejected = true;
      this.isDragging = false;
      Animated.spring(this.state.openValue, {
        toValue: 0,
        bounciness: 0,
        restSpeedThreshold: 1,
        velocity: 0.1
      }).start(() => {
        this.hideOverlay();
        this.isOpen = false;
      });
    }

    _panResponderRelease(e, {moveX, vx}) {
      this.isDragging = false;
      if (this.props.isLocked) return;
      let { drawerPosition } = this.props;
      let { openValue } = this.state;
      let previouslyOpen = this._isClosing;
      let isWithingVelocityThreshold = vx < VX_MAX && vx > -VX_MAX;
      if (drawerPosition === 'left') {
        if ((vx > 0 && moveX > THRESHOLD) || (vx >= VX_MAX) || isWithingVelocityThreshold && previouslyOpen && moveX > THRESHOLD) {
          this.open({velocity: -1 * vx});
        } else if ((vx > 0 && moveX > THRESHOLD) || (vx > VX_MAX) || isWithingVelocityThreshold && !previouslyOpen) {
          this.close({velocity: -1 * vx});
        } else if (previouslyOpen) {
          this.open();
        } else {
          this.close();
        }
      }
    }

    _getOpenValueForX(x) {
      let { drawerPosition, drawerWidth } = this.props;

      if (drawerPosition === 'left') {
        return x / drawerWidth;
      } else if (drawerPosition === 'right') {
        return (DEVICE_WIDTH - x) / drawerWidth;
      }
    }

    render() {
      let { openValue } = this.state;
      let { drawerPosition, drawerWidth } = this.props;
      let dynamicDrawerStyles = {};

      dynamicDrawerStyles[drawerPosition] = 0;
      dynamicDrawerStyles.width = drawerWidth;

      let outputRange;

      if (drawerPosition === 'left') {
        outputRange = [-drawerWidth, 0];
      } else {
        outputRange = [drawerWidth, 0];
      }

      let drawerTranslateX = openValue.interpolate({
        inputRange: [0, 1],
        outputRange,
        extrapolate: 'clamp'
      });
      let animatedDrawerStyles = {transform: [{translateX: drawerTranslateX}]};

      return (
        <View style={{flex: 1, backgroundColor: 'transparent'}} {...this._panResponder.panHandlers}>
          <Animated.View style={styles.main}>
            {this.props.children}
          </Animated.View>
          {this.getOverlay()}
          <Animated.View style={[styles.drawer, dynamicDrawerStyles, animatedDrawerStyles]}>
            {this.props.renderNavigationView()}
          </Animated.View>
        </View>
      )
    }

    getOverlay() {
      let { openValue } = this.state;
      let overlayOpacity = openValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.7],
        extrapolate: 'clamp'
      });
      let animatedOverlayStyles = {
        opacity: overlayOpacity
      };

      function doOverlayPress(e) {
        this.close({
          velocity: 0.1
        }, true);
        e.stopPropagation();
      }

      if (!this.refs.overlay || !this.refs.overlay.isVisible()) {
        animatedOverlayStyles.position = 'relative';
      }
      return (
        <Animated.View style={[styles.overlay, animatedOverlayStyles]}>
          <DrawerOverlay ref="overlay" onPress={doOverlayPress.bind(this)}/>
        </Animated.View>
      )
    }
  }

  class DrawerOverlay extends React.Compnent {
    constructor(props) {
      super(props);
      this.state = {
        isVisible: false
      };
    }

    isVisible() {
      return this.state.isVisible;
    }

    setVisible(v) {
      if (this.state.isVisible === v) return;
      this.setState({
        isVisible: v
      });
    }

    render() {
      let {width, height } = Dimensions.get('window');
      let overlayStyle = {
        width: width,
        height: height
      };
      if (!this.state.isVisible) {
        return (<View/>)
      }
      return (
        <TouchableWithoutFeedBack onPressIn={this.props.onPress}>
          <View style={overlayStyle}/>
        </TouchableWithoutFeedBack>
      )
    }
  }

  return DrawerLayout;
})();