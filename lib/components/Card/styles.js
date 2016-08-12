'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */

//const COLORS = require('../../colors');

import React from 'react';

import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    elevation: 2,
    height: 200,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 2
  },
  headerContainer: {
    paddingTop: 24,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  headerText: {
    fontSize: 24
  },
  contentContainer: {
    flex: 2,
    padding: 16
  },
  contentText: {
    fontSize: 14

  },
  footerContainer: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderTopColor: 'lightgrey'
  }

});