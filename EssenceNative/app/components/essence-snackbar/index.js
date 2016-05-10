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

  static propTypes = {
    content: PropTypes.string,
    undoButton: PropTypes.bool
  };

  static defaultProps = {
    content: 'Snackbar',
    undoButton: false
  };

  constructor(props) {
    super(props);
    this.innerHeight = getHeight();
    this.pan = new Animated.Value(0 - this.innerHeight);
    this.state = {
      isActive: false
    };
  }

  show() {
    if (this.state.isActive) return false;
    Animated.spring(this.pan, {
      velocity: 1,
      bounciness: 0,
      toValue: 0
    }).start(() => {
      this.setState({
        isActive: true
      });
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
      this.setState({
        isActive: false
      });
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

  renderUndoButton() {
    if (!this.props.undoButton) return;
    return <View style={styles.undoButton}><Text style={styles.undoText}>UNDO</Text></View>
  }

  render() {

    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.children}
        <Animated.View
          style={[styles.wrapper, {bottom: this.pan}]}>
          <Text style={styles.text}>{this.props.content}</Text>
          {this.renderUndoButton()}
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: getHeight(),
    width: width,
    flex: 1,
    position: 'absolute'
  },
  wrapper: {
    flexDirection: 'row',
    backgroundColor: '#323232',
    height: 48,
    marginTop: getHeight() * 0.88,
    width: width,
    paddingHorizontal: 24,
    paddingVertical: 14
  },
  text: {
    textAlign: 'left',
    color: 'lightgrey',
    flex: 1
  },
  undoButton: {},
  undoText: {
    color: 'green'
  }
});

module.exports = UiSnackBar;


/*
 * toggleSnackbar() {
 this.refs.snack.toggle();
 }

 render() {


 return (
 <View style={styles.container}>

 <Snackbar
 ref="snack"
 content="Snackbar"
 undoButton={false}
 >
 </Snackbar>
 <TouchableHighlight style={{
 width: 50,
 height: 50,
 backgroundColor: 'yellow',
 marginBottom: 0

 }} onPress={this.toggleSnackbar.bind(this)}>
 <View/>
 </TouchableHighlight>
 </View>
 );
 }
 }
 * */