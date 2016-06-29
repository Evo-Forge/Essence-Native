'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */
import React, {StyleSheet} from 'react-native';


module.exports = StyleSheet.create({
  bgBox: {
    borderRadius: 4,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0
  },
  box: {
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 10
  },
  base: {
    fontSize: 19,
    color: 'black',
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
