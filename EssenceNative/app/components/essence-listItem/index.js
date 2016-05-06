'use strict';

const React = require('react-native');
const helpers = require('../../constants/helpers');
const colors = require('../../constants/colors');

const {
  Component,
  StyleSheet,
  View,
  Dimensions,
  PropTypes,
  TouchableHighlight,
  Text
  } =  React;


class ListItem extends Component {

  static BOX_HEIGHT = 72;

  static propTypes = {
    title: PropTypes.string,
    titleStyle: PropTypes.any,
    content: PropTypes.any,
    contentStyle: PropTypes.any,
    backgroundColor: PropTypes.string,
    iconColor: PropTypes.string,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    first: PropTypes.bool, // first item on list
    renderTitle: PropTypes.func,
    renderContent: PropTypes.func,
    onPress: PropTypes.func
  };

  static defaultProps = {
    backgroundColor: '#fff',
    iconColor: '#202020',
    first: false
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
    const width = Dimensions.get('window').width;
    const height = 72;
    let bgColor = this.props.backgroundColor;
    if (this.state.isActive) {
      bgColor = '#fff';
    }
    const localStyle = {
      height,
      width,
      backgroundColor: bgColor
    };
    if (this.props.first) {
      localStyle.borderTopWidth = 1;
      localStyle.borderTopColor = 'lightgrey';
    }
    localStyle.height = ListItem.BOX_HEIGHT;
    let subContentView,
      subTitleView;
    if (this.props.renderContent) {
      subContentView = this.props.renderContent(styles.contentText);
    } else if (this.props.content) {
      subContentView = <Text style={[styles.contentText, this.props.contentStyle]}>{this.props.content}</Text>
    }
    if (this.props.renderTitle) {
      subTitleView = this.props.renderTitle(styles.titleText);
    } else {
      subTitleView = <Text style={[styles.titleText, this.props.titleStyle]}>{this.props.title}</Text>
    }
    const paddingHorizontal = 0;
    const middleStyle = {
      paddingHorizontal: paddingHorizontal
    };

    if (!this.props.leftIcon) {
      middleStyle.paddingHorizontal = 16;
    }
    let mainView = (
      <View style={[styles.wrapper, localStyle]}>
        {this.renderLeftIcon()}
        <View style={[styles.middle, middleStyle]}>
          <View style={styles.titleView}>
            {subTitleView}
          </View>
          <View style={styles.contentView}>
            {subContentView}
          </View>
        </View>
        {this.renderRightIcon()}
      </View>
    );
    if (!this.props.onPress) return mainView;
    return (
      <TouchableHighlight
        activeOpacity={0.95}
        underlayColor={this.props.backgroundColor}
        onPressIn={(e) => {
                    this.setState({ isActive: true});
                    e.stopPropagation();
                }}
        onPressOut={(e) => {
                    this.setState({ isActive: false});
                    e.stopPropagation();
                }}
        onPress={this.props.onPress}>
        {mainView}
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8
  },
  middle: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    alignSelf: 'center'
  },
  titleView: {
    alignSelf: 'flex-start'
  },
  titleText: {
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'left',
    color: 'black'
  },
  contentView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentText: {
    marginTop: 1,
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'left',
    paddingHorizontal: 72

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

module.exports = ListItem;

/*
 <List>
 <ListItem
    content="Some text"
    title="Title"
    leftIcon="a"
    rightIcon="a"
    onPress/>
 </List>

renderContent for outside content
 */