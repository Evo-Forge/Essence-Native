'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */
const COLORS = require('../../colors');

import React, {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  container: {},
  chipContent: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    height: 45,
    borderRadius: 25,
    alignItems: 'center'
  },
  chipIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 45,
    borderRadius: 45,
    backgroundColor: '#AB47BC',
    left: 0
  },
  textWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  chipIconText: {
    fontSize: 24,
    color: 'white'
  },
  chipText: {
    fontSize: 17,
    textAlign: 'center'
  },
  chipDelete: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    borderRadius: 30,
    backgroundColor: 'darkgrey',
    marginRight: 6,
    marginLeft: 0
  },
  chipDeleteText: {
    color: 'white',
    fontSize: 18,
    bottom: 2
  }
});