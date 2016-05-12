/*var a = <Toolbar />;
 var b = <Toolbar leftIcon="some-icon" />
 var c = <Toolbar leftIcon={<Icon name="some-icon" />} />
 var d = <Toolbar rightIcon="some-icon" />
 var e = <Toolbar rightIcon={<Icon name="some-icon" />} />
 var g = <Toolbar title="My title" />;
 var f = <Toolbar><Text>My content</Text></Toolbar>
 var h = <Toolbar color="#c3c3c3" />
 // <Toolbar theme="primary/secondary" />*/

'use strict';

const React = require('react-native');
const helpers = require('../../constants/helpers');
const typography = require('../../constants/typography');
const colors = require('../../constants/colors');

const {
  Component,
  StyleSheet,
  View,
  Dimensions,
  PropTypes,
  TouchableHighlight,
  Text
  } = React;

const width = Dimensions.get('window').width;

class UiToolBar extends Component {

  static propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    leftIcon: PropTypes.any,
    rightIcon: PropTypes.any
  };

  static defaultProps = {
    color: '#fff'
  };

  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  renderLeftIcon() {
    if (!this.props.leftIcon) return;
    return (
      <View style={styles.leftIconWrapper}>
        <View style={styles.leftIcon}>

        </View>
      </View>
    )
  }

  renderRightIcon() {
    if (!this.props.rightIcon) return;
    return (
      <View style={styles.rightIconWrapper}>
        <View style={styles.rightIcon}>

        </View>
      </View>
    )
  }

  render() {
    const height = 48;

    const localStyle = {
      height: height,
      width,
      //backgroundColor: this.props.color
    };
    const paddingHorizontal = 0;
    const middleStyle = {
      paddingHorizontal: paddingHorizontal
    };

    if (!this.props.leftIcon) {
      middleStyle.paddingHorizontal = 16;
    }
    console.log(localStyle.height);
    console.log(localStyle.backgroundColor);
    return (
      <View>
        <View style={[styles.wrapper, localStyle]}>
          {this.renderLeftIcon()}
            <View style={[styles.titleView, middleStyle]}>
              <Text style={styles.titleText}>
                {this.props.title}
              </Text>
          </View>
          {this.renderRightIcon()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    backgroundColor: 'red',
    width: width
  },
  tittleView: {
    alignSelf: 'flex-start'
  },
  titleText: {
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'left',
    color: 'black'
  },
  leftIconWrapper: {
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightIconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  leftIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'grey',
    borderRadius: 40
  },
  rightIcon: {
    width: 25,
    height: 25,
    backgroundColor: 'grey'
  }
});

module.exports = UiToolBar;