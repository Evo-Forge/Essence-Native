'use strict';
const React = require('react-native');
const colors = require('');

const SIZE = {};

const {
  Component,
  PropTypes,
  TouchableOpacity,
  Text
} = React;

class UiText extends Component {
  static propTypes = {
    size: PropTypes.number,
    bold: PropTypes.bool,
    italic: PropTypes.bool,
    color: PropTypes.string,
    shadowColor: PropTypes.string,
    align: PropTypes.string,
    onPress: PropTypes.func,
    numberOfLines: PropTypes.number,
    message: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      message: null
    };
  }

    setText(msg) {
      if(this.state.message === msg) return;
      this.setState({
        message: msg
      });
    }

    render() {
      let localStyle = {};
      if(this.props.color) localStyle.color = this.props.color;
      if(this.props.align) {
        localStyle.textAlign = this.props.align;
        if(this.props.align !== 'left' && this.props.align !== 'right') {
          localStyle.justifyContent = this.props.align;
        }
      }
      if(this.props.shadowColor) {
        localStyle.textShadowRadius = 1;
        localStyle.textShadowColor = this.props.shadowColor;
        localStyle.textShadowOffset = {
          width: .5,
          height: .5
        };
      }
      if(this.props.italic === true) {
        localStyle.fontStyle = 'italic';
      }
      localStyle.fontSize = this.props.size || SIZE.TEXT_SIZE;
      let baseStyle = (this.props.bold) ? STYLE.TEXT_BOLD : STYLE.NEXT;
      let textBox = <Text style={[baseStyle, localStyle, this.props.style]} numberOfLines={this.props.numberOfLines}>
        {this.state.message || this.props.message || this.props.children}
      </Text>;
      if(!this.props.onPress) return textBox;
      return (
        <TouchableOpacity onPress={this.props.onPress}>
          {textBox}
        </TouchableOpacity>
      )
    }
}

module.exports = UiText;
