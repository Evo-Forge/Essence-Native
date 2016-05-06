'use strict';

// single menu item link

const React = require('react-native');

const {
  View,
  Component,
  StyleSheet,
  PropTypes,
  TouchableHighlight,
  Dimensions
  } = React;

const helpers = require('../../constants/helpers');
const colors = require('../../constants/colors');


class MenuItem extends Component {

  static propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
    first: propTypes.bool,
    onPress: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  handlePressIn(e) {
    this.setState({
      isActive: true
    });
    e.stopPropagation();
  }

  handlePressOut(e) {
    this.setState({
      isActive: false
    });
    e.stopPropagation();
  }

  handlePress() {
    this.props.onPress && this.props.onPress(this.props.key);
  }

  render() {
    const width = Dimensions.get('window').width;
    let wrapperStyle = {
      width: width
    };


    // icon should be where the View with styles.icon is
    return (
      <TouchableHighlight
        underlayColor="transparent"
        delayPressIn={0}
        onPress={this.handlePress.bind(this)}
        onPressIn={this.handlePressIn.bind(this)}
        onPressOut={this.handlePressOut.bind(this)}>
        <View style={[styles.wrapper, wrapperStyle]}>
          <View style={styles.icon}
                active={this.state.isActive}>
            <Text style={styles.text}>{this.props.text}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 8
  },
  icon: {
    marginTop: 2,
    paddingRight: 8
  },
  text: {
    fontSize: 16,
    textShadowRadius: 2,
    textShadowColor: 'grey',
    textShadowOffset: {
      width: 1,
      height: 1
    }
  }
});

module.exports = MenuItem;