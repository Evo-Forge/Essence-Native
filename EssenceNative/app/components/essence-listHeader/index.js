'use strict';
const React = require('react-native');
const helpers = require('../../constants/helpers');
const colors = require('../../constants/colors');

const {
  Component,
  View,
  PropTypes,
  StyleSheet,
  Dimensions,
  Text
  } = React;



class ListHeader extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    first: PropTypes.bool
  };

  static defaultProps = {
    backgroundColor: '#fff'
  };


  render() {
    const width = Dimensions.get('window').width;
    let localStyle = {
      width,
      backgroundColor: this.props.backgroundColor
    };
    if(!this.props.first) {
      localStyle.borderTopWidth = 0;
    }
    return (
      <View style={[styles.wrapper, localStyle]}>
        <Text style={styles.headerTitle}>{this.props.title}</Text>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  headerTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontSize: 13,
    shadowColor: 'grey',
    fontWeight: 'bold',
    color: 'grey'
  }
});

module.exports = ListHeader;

/* <ListHeader title="Title" first={true}/> */