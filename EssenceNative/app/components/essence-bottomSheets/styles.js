'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */
import React, {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width,
  OVERLAY_OPACITY = 0.4;

function getHeight() {
  return Dimensions.get('window').height;
}

module.exports = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: getHeight(),
    width: width,
    flex: 1
  },
  gridStyle: {},
  listStyle: {},
  sheetWrapper: {
    position: 'absolute',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,' + (OVERLAY_OPACITY + 0.1) + ')',
    backgroundColor: '#fff',
    width: width,
    marginTop: getHeight() * 0.66,
    bottom: 0,
    right: 0,
    left: 0,
    overflow: 'hidden'
  },
  paddedStyle: {
    padding: 16
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: width,
    height: getHeight()
  },
  overlayBg: {
    backgroundColor: '#000000'
  }
});