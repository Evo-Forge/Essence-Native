'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */
import React, {StyleSheet} from 'react-native';


module.exports = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 8
  },
  icon: {
    marginTop: 2,
    paddingRight: 8
  },
  text: {
    fontSize: 16,
    textShadowRadius: 2,
    textShadowColor: 'grey',
    textShadowOffset: {
      width: 1,
      height: 1
    }
  }
});