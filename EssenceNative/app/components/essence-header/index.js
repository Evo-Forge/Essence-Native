const React = require('react-native');
const Icon = require('../essence-icon/index');
const text = require('../../styles/typography');
//const BoldedText = require('');
const colors = require('../../styles/colors');
const {
  Component,
  StyleSheet,
  Dimensions,
  View,
  PropTypes
} = React;

const MAX_LENGTH = 20;

const SIZE = {
  HEADER_HEIGHT: 60
};
class UiHeader extends Component {

  static BOX_HEIGHT = SIZE.HEADER_HEIGHT;

  static propTypes = {
    onLoad: PropTypes.func,
    onUnload: PropTypes.func,
    title: PropTypes.string,
    titleStyle: PropTypes.any,
    titleBolded: PropTypes.bool,
    titleColor: PropTypes.string,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    backgroundColor: PropTypes.any,
    border: PropTypes.bool,
    borderColor: PropTypes.string,
    borderPosition: PropTypes.oneOf(['bottom', 'top']),
    opacity: PropTypes.number
  };

  static defaultProps = {
    titleColor: colors['e-text-blue-50'],
    icoColor: colors['e-text-amber-700'],
    backgroundColor: colors['e-text-amber-400'],
    borderColor: colors['e-text-cyan-600'],
    opacity: 1
  };

  constructor(props) {
    super(props);
    this.state = {
      title: null
    };
  }
  componentWillMount() {
    this.props.onLoad && this.props.onLoad(UiHeader.BOX_HEIGHT);
  }

  componentWillUnmount() {
    this.props.onLoad && this.props.onUnload(UiHeader.BOX_HEIGHT);
  }

  setTitle(msg) {
    if(this.state.title === msg || this.props.title === msg) return;
    this.setState({
      title: msg
    });
  }

  renderText() {
    let title = this.state.title || this.props.title || '';
    if(title.length > MAX_LENGTH) {
      title = title.substr(0, MAX_LENGTH) + '...';
    }
    if(title === '') return;
    let titleColor = this.props.titleColor;
    let textStyle = this.props.titleStyle || {};
    textStyle.color = titleColor;
    if(this.props.backgroundColor) {
      textStyle.textShadowColor = colors['e-text-deep-orange-300'];
    }
    if(!this.props.titleBolded) {
      return (
        <Text style={[styles.title, textStyle]}>{title}</Text>
      )
    }
    /*return (
      <BoldedText style={[styles.title, textStyle]} text={title} />
    );*/
  }

  renderIcon() {
    if(!this.props.icon) return;
    return (
      <View style={style.icon}>
        <Icon
          onPress={this.props.onIconPress}
          name={this.props.icon}
          color={this.props.iconColor}
          size="medium"
          />
      </View>
    )
  }

  render() {
    const { width } = Dimensions.get('window');
    let borderPosition = (this.props.borderPosition || 'bottom');
    let borderStyle = {};
    if(this.props.border === true) {
      borderStyle.backgroundColor = this.props.borderColor;
    }
    let wrapperStyle = {
      width: width,
      backgroundColor: this.props.backgroundColor
    };
    if(this.props.backgroundColor === 'false' || this.props.backgroundColor === false) {
      delete wrapperStyle.backgroundColor;
    }
    if(this.props.opacity) {
      wrapperStyle.opacity = this.props.opacity;
    }
    if(borderPosition === 'bottom') {
      borderStyle.bottom = 0;
      borderStyle.borderBottomWidth = 1;
      borderStyle.borderBottomColor = colors['e-text-deep-orange-100'];
    } else {
      borderStyle.top = 0;
      borderStyle.borderTop.Width = 0;
      borderStyle.height = 1;
      borderStyle.backgroundColor = this.props.borderColor;
    }
    let borderView;
    if(this.props.border !== false) {
      borderView = <View style={[styles.border, borderStyle]} />
    }
    return (
      <View style={[styles.wrapper, wrapperStyle]}>
        <View style={styles.box}>
          {this.renderText()}
          {this.props.children}
        </View>
        {this.renderIcon()}
        {borderView}
      </View>
    );
  }
}

  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      flexDirection: 'row',
      height: UiHeader.BOX_HEIGHT
    },
    // lower border
    border: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 2
    },
    box: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 5
    },
    title: {
      fontSize: 26,
      textShadowRadius: 1,
      textShadowOffset: {
        width: 0.5,
        height: 0.5
      }
    },
    icon: {
      position: 'absolute',
      left: SIZE.ICON_PADDING,
      top: SIZE.ICON_PADDING
    }
  });

  module.exports = UiHeader;
