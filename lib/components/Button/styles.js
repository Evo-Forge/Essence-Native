"use strict";

const COLORS = require('../../colors');

import React, {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  wrapper: {
    borderRadius: 2,
    paddingTop: 0.5,
    paddingBottom: 0
  },
  button: {
    borderRadius: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: 'center'
  },
  text: {
    alignSelf: 'center',
    fontSize: 18,
    textShadowRadius: 1,
    textShadowOffset: {
      width: 0.5,
      height: 0.5
    }
  }
});
