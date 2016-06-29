'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */

import React, {StyleSheet} from 'react-native';


module.exports = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  bottomShadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 1,
    borderBottomWidth: 1
  },
  text: {
    marginTop: 2,
    fontSize: 12,
    color: 'brown',
    textShadowRadius: 1,
    textShadowColor: '#293b2f',
    textShadowOffset: {
      width: 0.5,
      height: 0.5
    }
  },
  icon: {
    height: 50,
    width: 50
  },
  badge: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'orange',
    borderColor: 'grey',
    borderRadius: 20,
    position: 'absolute',
    top: -4,
    right: -5
  },
  badgeText: {
    fontSize: 8,
    color: 'black'
  }
});