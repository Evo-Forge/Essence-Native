'use strict';

const React = require('react-native');
const styles = require('./styles');
const colors = require('../../constants/colors');

// must set option for size of paper

const {
  View,
  Text,
  Component,
  PropTypes
} = React;

const TYPES = {
  'default': 2,
  'sharp': 0,
  'circle': 50
};


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
      let borderRadius,
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



module.exports = UiPaper;
