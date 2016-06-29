// not finished, might be redundant

'use strict';

const React = require('react-native');
const styles = require('./styles');

const {
  Component,
  TouchableWithoutFeedback,
  Animated,
  View
} = React;

const { TYPE } = require('./ui'),
  routeActions = require('../route')

const DEFAULT_TIMEOUT = 8,
  DEFAULT_DURATION = 300;

class UiToast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      message: '',
      fade: new Animated.Value(0)
    };
    this.counter = 0;
    this.maxSeconds = DEFAULT_TIMEOUT;
  }

  componentWillMount() {
    this._listener = store.addListener([
      TYPE.TOAST_SHOW, this.onShow.bind(this),
      TYPE.TOAST_HIDE, this.onHide.bind(this),
      routeActions.TYPE.NAVIGATION, this.onAutoHide.bind(this)
    ]);
    this._timer = setInterval(this.checkVisible.bind(this), 1000);
  }

  componentWillUnmount() {
    if(this._timer) clearInterval(this._timer);
    this._listener.remove();
  }

  onAutoHide() {
    if(!this._ts) return;
    let diff = Date.now - this._ts;
    if(diff < 1000) return;
    this.onHide();
  }

  onShow(msg, _maxSeconds) {
    if (!msg) return;
    this._ts = Date.now();
    this.counter = 0;
    this.maxSeconds = (typeof _maxSeconds === 'number' && _maxSeconds != 0) ? _maxSeconds : DEFAULT_TIMEOT;
    let { isActive } = this.state;
    this.setState({
      isActive: true,
      message: msg
    }, () => {
      Animated.timing(this.state.fade, {
        toValue: 0.9,
        duration: DEFAULT_DURATION
      }).start();
    });
  }

  onHide() {
    this.counter = 0;
    this.message = '';
    Animated.timing(this.state.fade, {
      toValue: 0,
      duration: DEFAULT_DURATION
    }).start(() => {
      this._ts = null;
      this.setState({
        isActive: false,
        message: 'Message'
      });
    });
  }

  onClose() {
    this.onHide();
  }

  checkVisible() {
    if(this.state.isActive === false) return;
    this.counter++;
    if (this.counter >= this.maxSeconds) {
      this.onHide();
    }
  }

  render() {
    if(!this.state.isActive) {
      return <View style={styles.inactive} />
    }
    let localStyle = {
      opacity: this.state.fade
    };
    return (
      <Animated.View style={[styles.wrapper, localStyle]}>
        <TouchableWithoutFeedback onPress={this.onClose.bind(this)}>
          <View>
            <Text style={styles.text}>{this.state.message}</Text>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    )
  }
}

module.exports = UiToast;