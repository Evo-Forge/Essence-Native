'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */
import React, {StyleSheet, Dimensions} from 'react-native';
const COLORS = require('../../colors');

const width = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#fff',
    width: width,
    elevation: 2
  },
  tittleView: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    alignSelf: 'center',
    paddingHorizontal: 10
  },
  titleText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'center'
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
    width: 35,
    height: 35,
    backgroundColor: 'grey'
  },
  rightIcon: {
    width: 25,
    height: 25,
    backgroundColor: 'grey'
  }
});