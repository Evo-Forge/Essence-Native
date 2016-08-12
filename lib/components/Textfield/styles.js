'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */
const COLORS = require('../../colors');

import React, {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  bgBox: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0
  },
  bottomLine: {
    position: 'absolute',
    bottom: 0.5,
    height: 2,
    backgroundColor: 'green'
  },
  bottomBorder: {
    position: 'absolute',
    left: 0,
    bottom: 1,
    height: 1,
    backgroundColor: '#757575'
  },
  box: {
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 10
  },
  textArea: {
    marginTop: 24,
    marginBottom: 1,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 2,
    textAlignVertical: 'top',     // this doesn't work in IOS
    backgroundColor: 'white'
  },
  labelBox: {
    position: 'absolute',
    top: 34,
    left: 2,
    paddingLeft: 4
  },
  labelBoxFocused: {
    top: 1
  },
  labelText: {
    color: 'black'
  },
  labelTextFocused: {
    color: 'blue'
  }
});