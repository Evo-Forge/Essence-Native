'use strict';

const React = require('react-native');
const helpers = require('../../constants/helpers');
const colors = require('../../constants/colors');
const styles = require('./styles');



const {
  Component,
  View,
  PropTypes,
  Dimensions,
  Animated,
  TouchableHighlight
  } = React;

const OVERLAY_OPACITY = 0.4;

function getHeight() {
  return Dimensions.get('window').height;
}

class UiBottomSheets extends Component {

  static propTypes = {
    type: PropTypes.oneOf(['grid', 'list']),
    content: PropTypes.any.isRequired,
    onShow: PropTypes.func,
    onHide: PropTypes.func
  };

  static defaultProps = {
    type: 'grid'
  };

  constructor(props) {
    super(props);
    this.innerHeight = getHeight();
    this.pan = new Animated.Value(0 - this.innerHeight);
    this.overlayPan = new Animated.Value(0);
    this.state = {
      isVisible: false,
      isOverlay: false
    };
  }


  show() {
    if (this.state.isVisible) return false;
    this.showOverlay(() => {
      Animated.spring(this.pan, {
        velocity: 1,
        bounciness: 0,
        toValue: 0
      }).start(() => {
        this.setState({
          isVisible: true
        });
        this.props.onShow && this.props.onShow();
      });
    });
  }

  hide() {
    if (!this.state.isVisible) return false;
    this.hideOverlay();
    Animated.spring(this.pan, {
      velocity: 1,
      bounciness: 0,
      toValue: 0 - this.innerHeight
    }).start(() => {
      this.setState({
        isVisible: false
      });
      this.props.onHide && this.props.onHide();
    });
  }

  showOverlay(fn) {
    if (this.state.isOverlay) return fn && fn();
    this.setState({
      isOverlay: true
    }, () => {
      Animated.spring(this.overlayPan, {
        velocity: 0.8,
        bounciness: 0,
        toValue: OVERLAY_OPACITY
      }).start();
      fn && fn();
    });
  }

  hideOverlay(fn) {
    if (!this.state.isOverlay) return fn && fn();
    Animated.spring(this.overlayPan, {
      velocity: 0.8,
      bounciness: 0,
      toValue: 0
    }).start(() => {
      this.setState({
        isOverlay: false,
      }, () => {
        fn && fn();
      });
    });
  }


  toggle() {
    if (this.state.isVisible) {
      this.hide();
    } else {
      this.show();
    }
  }

  renderContent() {
    let contentStyles = [styles.paddedStyle];
    if (this.props.type === 'grid') {
      contentStyles.push(styles.gridStyle);
    }
    if (this.props.type === 'list') {
      contentStyles.push(styles.listStyle);
    }
    let innerContent;
    if (typeof this.props.content === 'function') {
      innerContent = this.props.content();
    } else {
      innerContent = this.props.content;
    }
    return (
      <View style={contentStyles}>{innerContent}</View>
    )
  }

  _setHeight(h) {
    if (this.innerHeight === getHeight()) {
      this.pan.setValue(0 - h);
    }
    this.innerHeight = h;
  }

  renderOverlay() {
    if (!this.state.isOverlay) return;
    return (
      <Animated.View
        style={[styles.overlay, {
                opacity: this.overlayPan
            }]}>
        <TouchableHighlight
          style={[styles.overlay, styles.overlayBg]}
          onPress={() => { this.hide(); }}
        ><View /></TouchableHighlight>
      </Animated.View>
    )
  }

  render() {
    return (

        <View style={[styles.container, this.props.style]}>
          {this.props.children}
          {this.renderOverlay()}
          <Animated.View
            onLayout={(e) => { this._setHeight(e.nativeEvent.layout.height); }}
            style={[styles.sheetWrapper, {bottom: this.pan}]}>
            {this.renderContent()}
          </Animated.View>
      </View>
    )
  }
}

module.exports = UiBottomSheets;


