'use strict';

const React = require('react-native');

const helpers = require('../../constants/helpers');
const colors = require('../../constants/colors');

const {
  Component,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  PropTypes
  } = React;

const INPUT_TYPE = {
  'password': 'default',
  'text': 'default',
  'email': 'email-adress',
  'number': 'numeric'
};

const DEFAULT_HEIGHT = 48;

const SIZE = {
  BORDER_RADIUS: 4,
  INPUT_MARGIN_BOTTOM: 10,
  INPUT_HORIZONTAL_MARGIN: 40
};

const TEXT = {
  fontWeight: '200'
};

class UiInput extends Component {

  static propTypes = {
    name: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    type: PropTypes.oneOf(['password', 'text', 'email', 'number']),
    value: PropTypes.string,
    multiline: PropTypes.bool
  };


  constructor(props) {
    super(props);
    this.value = this.props.value || '';
    this.isFocused = false;

  }

  componentDidMount() {
    if (this.value !== '') {
      this.props.onChange && this.props.onChange(this.value);
    }
  }

  /*    this._eventer = store.addListener(uiActions.TYPE.KEYBOARD_CHANGE, (opt) => {
   if(opt.height !== FOOTER_BAR_HEIGHT || !this.isFocused) return;
   this.handleEndEdit();
   });
   }
   componentWillUnmount() {
   this._eventer.remove();
   } */


  setValue(v) {
    if (this.value === v) return;
    this.value = v;
    if (v == '') {
      this.input && this.input.clear();
    }
  }

  getValue() {
    return this.value;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  handleFocus() {
    this.props.onFocus && this.props.onFocus();
    store.setFocusedInput(this);
    this.isFocused = true;
    this.refs.inputBg && this.refs.inputBg.setFocused(true);
  }

  handleEndEdit() {
    if (!this.isFocued) return;
    this.handleBlur();
    this.input && this.input.blur();
  }

  handleBlur() {
    if (!this.isFocused) return;
    this.props.onBlur && this.props.onBlur();
    //store.clearFocusedInput(this);
    this.isFocused = false;
    this.refs.inputBg && this.refs.inputBg.setFocused(false);
  }

  handleChange(newValue) {
    if (typeof newValue === 'string') {
      this.value = newValue;
    }
    this.props.onChange && this.props.onChange(this.value);
  }

  handleSubmit() {
    this.props.onSubmit && this.props.onSubmit(this.value);
  }

  render() {
    let { width } = Dimensions.get('window');
    width = width - SIZE.INPUT_HORIZONTAL_MARGIN * 2;
    let height = this.props.height || DEFAULT_HEIGHT;
    let mainColor = 'white',
      placeholderColor = 'lightgrey';
    const inputType = INPUT_TYPE[this.props.type || 'text'];
    const textStyle = {};
    if (this.props.height) {
      textStyle.height = this.props.height;
    } else {
      textStyle.height = DEFAULT_HEIGHT;
    }
    let boxStyle = {
      width,
      height
    };

    return (
      <View style={[styles.box, boxStyle]}>
        <UiInputBackground
          height={height}
          width={width}
          ref='inputBg'/>

        <TextInput
          ref={(obj) => { this.input = obj; }}
          defaultValue={this.value}
          style={[TEXT, styles.base, textStyle]}
          placeholder={this.props.placeholder}
          keyboardType={inputType}
          secureTextEntry={this.props.type === 'password'}
          placeholderTextColor={placeholderColor}
          underlineColorAndroid="transparent"
          multiline={this.props.multiline}
          onKeyPress={this.props.onKeyPress}
          onFocus={this.handleBlur.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          onChangeText={this.handleChange.bind(this)}
          onEndEditing={this.handleEndEdit.bind(this)}
          onSubmitEditing={this.handleEndEdit.bind(this)}
          onChange={this.handleChange.bind(this)}
          onSubmit={this.handleSubmit.bind(this)}
        />
      </View>
    );
  }
}

class UiInputBackground extends Component {

  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
  }

  setFocused(bVal) {
    if (this.state.isFocused === bVal) return;
    this.setState({
      isFocused: bVal
    });
  }

  render() {
    let mainColor = 'white';
    let height = this.props.height;
    if (React.Platform.OS === 'android') {
      height += 4;
    }
    if (this.state.isFocused) {
      mainColor = colors['e-text-amber-300'];
    }
    let boxStyle = {
      width: this.props.width,
      height,
      backgroundColor: mainColor,
      borderBottomWidth: 1,
      borderBottomColor: '#009587'

    };

    return (
      <View style={[styles.bgBox, boxStyle]}>
        <View style={[styles.borderTop, {
             left: 2,
              width: this.props.width - 6,
              backgroundColor: 'red',
              borderBottomWidth: 1,
              borderBottomColor: 'black'

            }]}/>
        <View style={[styles.borderTop, {
              left: 1,
              width: boxStyle - 4,
              backgroundColor: 'white'
          }]}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bgBox: {
    borderRadius: SIZE.BORDER_RADIUS,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0


  },
  box: {
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: SIZE.INPUT_MARGIN_BOTTOM,

  },
  base: {
    fontSize: 19,
    color: colors['e-text-amber-600'],
    // paddingTop: 2,
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

module.exports = UiInput;
