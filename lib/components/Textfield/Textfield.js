'use strict';

import React, { Component, PropTypes } from 'react';
const styles = require('./styles');
//const COLORS = require('../../colors');

import {
  View,
  Dimensions,
  Text,
  TextInput,
  Animated,
  TouchableHighlight
  } from 'react-native';

// only works properly for android
// remember to set backgroundColor to white

const SIZE = {
  BORDER_RADIUS: 4,
  INPUT_HORIZONTAL_MARGIN: 40
};

class UiTextfield extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    labelText: PropTypes.string
  };

  static defaultProps = {
    labelText: 'Label',
    numberOfLines: 1
  };

  constructor(props) {
    super(props);
    this.value = this.props.value || '';
    this.isFocused = false;
    this.state = {
      labelFocused: false,
      borderVisible: false,
      ts: Date.now()
    };
    this.animLabelFocus = new Animated.Value(1);
    this.animLineWidthFocus = new Animated.Value(1);
    this.animLineLeftFocus = new Animated.Value(1);
  }

  componentDidMount() {
    if (this.value !== '') {
      this.props.onChange && this.props.onChange(this.value);
    }

  }

  setValue(v) {
    if (this.value === v) return;
    this.value = v;
    if (v == '') {
      this.input && this.input.clear();
    }
    this.setState({
      ts: Date.now()
    });
  }

  getValue() {
    return this.value;
  }

  handleFocus() {
    this.props.onFocus && this.props.onFocus();
    this.isFocused = true;
    this.refs.inputBg && this.refs.inputBg.setFocused(true);
    this.focusLabel();
    this.focusLine();
  }

  focusLine() {
    this.setState({
      borderVisible: true
    });
    // TODO anim focus line
    Animated.parallel([
      Animated.timing(this.animLineWidthFocus, {
        toValue: 300,
        duration: 500
      }),
      Animated.timing(this.animLineLeftFocus, {
        toValue: 0,
        duration: 500
      })
    ]).start()

  }

  unfocusLine() {
    this.setState({
      borderVisible: false
    });
    Animated.parallel([
      Animated.timing(this.animLineWidthFocus, {
        toValue: 0,
        duration: 500
      }),
      Animated.timing(this.animLineLeftFocus, {
        toValue: 145,
        duration: 500
      })
    ]).start()
  }

  focusLabel() {
    this.setState({
      labelFocused: true
    });
    Animated.spring(this.animLabelFocus, {
      toValue: -34,
      bounciness: 5,
      speed: 4
    }).start();
  }

  unfocusLabel() {
    if (this.value !== '') return;
    this.setState({
      labelFocused: false
    });
    Animated.spring(this.animLabelFocus, {
      toValue: 0,
      bounciness: 5,
      speed: 4
    }).start();
  }

  handleEndEdit() {
    if (!this.isFocused) return;
    this.handleBlur();
    this.input && this.input.blur();
  }

  handleBlur() {
    if (!this.isFocused) return;
    this.props.onBlur && this.props.onBlur();
    this.isFocused = false;
    this.refs.inputBg && this.refs.inputBg.setFocused(false);
    this.unfocusLabel();
    this.unfocusLine();

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

  renderLabel() {
    let boxStyle, textStyle;
    if (this.state.labelFocused) {
      boxStyle = styles.labelBoxFocused;
      textStyle = styles.labelTextFocused;
    }
    return (
      <Animated.View style={[styles.labelBox, boxStyle, {transform: [{translateY: this.animLabelFocus}]}]}>
        <TouchableHighlight onPress={this.focusLabel.bind(this)}>
          <Text style={[styles.labelText, textStyle]}>{this.props.label}</Text>
        </TouchableHighlight>
      </Animated.View>
    )
  }

  renderLine(width) {
    if (!this.state.borderVisible) return;
    let localStyle = {
      left: width / 2 - 15,
      width: 30
    };
    return (
      <Animated.View style={[localStyle, styles.bottomLine, {left: this.animLineLeftFocus, width: this.animLineWidthFocus}]}/>
    )
  }

  render() {
    let { width } = Dimensions.get('window');
    width = width - SIZE.INPUT_HORIZONTAL_MARGIN * 2;
    let boxStyle = {
      width
    };
    this.width = width;
    return (
      <View style={[styles.box, boxStyle]}>
        <TextInput
          ref={(obj) => { this.input = obj;}}
          defaultValue={this.value}
          style={styles.textArea}
          placeholder={this.props.placeholder}
          keyboardType={'default'}
          multiline={false}
          numberOfLines={this.props.numberOfLines}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          onChangeText={this.handleChange.bind(this)}
          onEndEditing={this.handleEndEdit.bind(this)}
          onSubmitEditing={this.handleEndEdit.bind(this)}
          onChange={this.handleChange.bind(this)}
          onSubmit={this.handleSubmit.bind(this)}/>
        {this.renderLabel()}
        <View style={[styles.bottomBorder, {width}]}/>
        {this.renderLine(width)}
      </View>
    )
  }
}


module.exports = UiTextfield;
