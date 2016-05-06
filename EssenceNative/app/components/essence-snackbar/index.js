'use strict';

const React = require('react-native');

const helpers = require('../../constants/helpers');
const colors = require('../../constants/colors');

const {
  Component,
  View,
  StyleSheet,
  Text,
  Dimensions,
  PropTypes,
  Animated
  } = React;

function getHeight() {
  return Dimensions.get('window').height;
}

const width = Dimensions.get('window').width;

class UiSnackBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      message: '',
      pan: new Animated.Value(0)
    };
  }

  show() {
    if (this.state.isActive) return false;
    Animated.spring(this.pan, {
      velocity: 1,
      bounciness: 0,
      toValue: 0
    }).start(() => {
      this.props.onShow && this.props.onShow();
    });
  }

  hide() {
    if (!this.state.isActive) return false;
    Animated.spring(this.pan, {
      velocity: 1,
      bounciness: 0,
      toValue: 0 - this.innerHeight
    }).start(() => {
      this.props.onHide && this.props.onHide();
    });
  }

  toggle() {
    if (this.state.isActive) {
      this.hide();
    } else {
      this.show();
    }
  }

  _setHeight(h) {
    if (this.innerHeight === getHeight()) {
      this.pan.setValue(0 - h);
    }
    this.innerHeight = h;
  }

  render() {
    if (!this.state.isActive) return;

    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.children}
        <Animated.View
          onLayout={(e) => { this._setHeight(e.nativeEvent.layout.height); }}
          style={[styles.wrapper, {bottom: this.pan}]}>
          <Text style={styles.text}>SnackBar</Text>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: getHeight(),
    width: width,
    flex: 1
  },
  wrapper: {
    position: 'absolute',
    backgroundColor: 'green',
    height: 48,
    justifyContent: 'center',
    marginTop: getHeight() * 0.88,
    width: width
  },
  text: {
    textAlign: 'center',
    color: 'lightgrey'
  }

});

module.exports = UiSnackBar;