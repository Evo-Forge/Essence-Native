'use strict';

const React = require('react-native');
const COLORS = require('../../colors');
const Button = require('../Button/Button.jsx');
const styles = require('./styles');

const {
  View,
  Image,
  Text,
  Component,
  PropTypes
  } = React;


class Card extends Component {
  static propTypes = {
    headerText: PropTypes.string,
    text: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    image: PropTypes.any,
    size: PropTypes.number,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.any
  };

  static defaultProps = {
    headerText: 'Header',
    text: 'Card content, can be used with images',
    width: 100,
    height: 100,
    backgroundColor: 'white',
    size: 10
  };

  render() {
    let fontSize = this.props.size,
      cardSize = fontSize * 2;
    const localStyle = {
      width: cardSize,
      height: cardSize * 0.7,
      backgroundColor: this.props.backgroundColor,

    };
    return (
      <View style={[styles.container, localStyle]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{this.props.headerText}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>{this.props.text}</Text>
        </View>
        <View style={styles.footerContainer}>
          <Button text={'OK'} backgroundColor={'#3F51B5'} elevation={0} width={80}/>
          <Button text={'SKIP'} type={'default'} elevation={0}/>
        </View>
      </View>
    );
  }
}


module.exports = Card;
