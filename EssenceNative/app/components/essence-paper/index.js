'use strict';

const React = require('react-native');

const colors = require('../../constants/colors');

const {
  View,
  Text,
  StyleSheet,
  Component,
  PropTypes
} = React;

const TYPES = {
  'default': 2,
  'sharp': 0,
  'circle': 50
};

const BORDER_RADIUS = 2;
class UiPaper extends Component {

    static propTypes = {
      type: PropTypes.any,
      elevation: PropTypes.number,
      text: PropTypes.string
    };

    static defaultProps = {
      type: TYPES['default'],
      elevation: 3,
      text: 'Paper'
    };

    render() {
      let paperSize = {},
        borderRadius,
        elevation = this.props.elevation;
      if(this.props.type === 'sharp') {
        borderRadius = TYPES['sharp'];
      }  else if(this.props.type === 'circle'){
        borderRadius = TYPES['circle'];
      } else {
        borderRadius = TYPES['default'];
      }
      let paperStyle = {
        borderRadius: borderRadius,
        elevation: elevation
      };


      return (
        <View style={[styles.container, paperStyle]}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: 'white'

  },
  text: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    top: 40
  }
});

module.exports = UiPaper;
