'use strict';

// single menu item link

const React = require('react-native');
const styles = require('./styles');

// this component might be redundant

const {
  View,
  Component,
  PropTypes,
  TouchableHighlight,
  Dimensions
  } = React;


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


module.exports = MenuItem;