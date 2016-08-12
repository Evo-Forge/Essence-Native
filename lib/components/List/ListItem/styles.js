'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */
//const COLORS = require('../../colors');

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';


module.exports = StyleSheet.create({
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