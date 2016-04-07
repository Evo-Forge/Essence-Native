'use strict';

const React = require('react-native');
const helpers = require('../../styles/helpers');
const colors = require('../../styles/colors');

const {
  Component,
  StyleSheet,
  View,
  PropTypes,
  Text,
  Dimensions,
  TextInput
} = React;

const DEFAULT_HEIGHT = 48;

const SIZE = {
  BORDER_RADIUS: 4,
  INPUT_HORIZONTAL_MARGIN: 40,
  INPUT_MARGIN_BOTTOM: 10
};
class UiTextArea extends Component {

  constructor(props) {
    super(props);
    this.value = this.props.value || '';
    this.isFocused = false;
  }

  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    placehodler: PropTypes.string,
    multiline: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func

  };

  static defaultProps = {

    placeholder: "textarea"

  };

  setValue(v) {
    if(this.value === v) return;
    this.value = v;
    if(v == '') {
      this.input && this.input.clear()
    }
  }

  getValue() {
    return this.value;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false
  }

  handleFocus() {
    this.props.onFocus && this.props.onFocus();
    this.isFocused = true;
    this.refs.inputBg && this.refs.inputBg.setFocused(true);
  }

  handleEndEdit() {
    if(!this.isFocused) return;
    this.handleBlur();
    this.input && this.input.blur();
  }

  handleBlur() {
    if(!this.isFocused) return;
    this.props.onBlur && this.props.onBlur();
    this.isFocued = false;
    this.refs.inputBg && this.refs.inputBg.setFocued(false);
  }


  handleSubmit() {
    this.props.onSubmit && this.props.onSubmit(this.value);
  }
    render() {
      let { width } = Dimensions.get('window');
      width = width - SIZE.INPUT_HORIZONTAL_MARGIN;
      let height = this.props.height || DEFAULT_HEIGHT;
      let mainColor = colors['e-text-amber-50'],
        placeholderColor = colors['e-text-blue-50'];
      const textStyle = {};
      if(this.props.height) {
        textStyle.height = this.props.height;
      }  else {
        textStyle.height = DEFAULT_HEIGHT;
      }
      let boxStyle = {
        width,
        height
      };

    return (
      <View style={[styles.box, boxStyle]}>
        <UiTextAreaBackground
          height={height}
          width={width}
          ref='inputBg'
        />
        <View style={styles.container}>
          <TextInput
            ref={(obj) => { this.input = obj; }}
            placeholder={this.props.placeholder}
            multiline={this.props.multiline}
            width={this.props.width}
            height={this.props.height}
            value={this.props.value}
            defaultValue={this.value}
            style={[styles.base, textStyle]}
            underLineColorAndroid="transparent"
            onKeyPress={this.props.onKeyPress}
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            onEndEditing={this.handleEndEdit.bind(this)}
            onSubmitEditing={this.handleEndEdit.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
            />
        </View>
      </View>
    )
  }
}

class UiTextAreaBackground extends Component {

    static propTypes = {
      height: PropTypes.number,
      width: PropTypes.number
    };

    constructor(props){
      super(props);
      this.state = {
        isFocused: false
      };
    }

    setFocused(bVal) {
      if(this.state.isFocused === bVal) return;
      this.setState({
        ifFocused: bVal
      });
    }
    render() {
      let mainColor = colors['e-text-cyan-50'];
      let height = this.props.height;
      if(React.Platform.OS === 'android') {
        height += 4;
      }
      if(this.state.isFocused) {
        mainColor = colors['e-text-deep-purple-50'];
      }
      let boxStyle = {
        width: this.props.width,
        height,
        backgroundColor: colors['e-text-green-50'],
        borderColor: colors['e-text-indigo-50']
      };

      return (
        <View style={[styles.bgBox, boxStyle]}>
          <View style={[styles.borderTop, {
            left: 2,
            width: this.props.width - 6,
            backgroundColor: colors['e-text-deep-orange-50'],
            borderBottomWidth: 1,
            borderBottomColor: colors['e-text-light-blue-A100']
          }]} />
          <View style={[styles.borderTop, {
            left: 1,
            width: boxStyle.width - 4,
            backgroundColor: colors['e-text-light-green-50']
          }]} />
        </View>
      )
    }
}
 const styles = StyleSheet.create({
   bgBox: {
     borderRadius: SIZE.BORDER_RADIUS,
     borderWidth: 0.5,
     position: 'absolute',
     left: 0,
     right: 0,
     top: 0
   },
   box: {
     overflow: 'hidden',
     alignSelf: 'center',
     marginBottom: SIZE.INPUT_MARGIN_BOTTOM
   },
   base: {
     fontSize: 15,
     color: 'black',
     // paddingTop: 2,
     paddingHorizontal: 12,
     justifyContent: 'flex-start',
     backgroundColor: 'transparent'
   },
   borderTop: {
     height: 1
   },
   borderBottom: {
     position: 'absolute',
     bottom: 0,
     left: 3,
     height: 5,
     borderBottomWidth: 0.8
   }
 });

module.exports = UiTextArea;
