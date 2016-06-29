'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */
import React, {StyleSheet} from 'react-native';


module.exports = StyleSheet.create({
  container: {
    flex: 1,
    left: 40
  },
  overSlider: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  bgSlider: {
    position: 'absolute',
    marginTop: 13,
    height: 5
  },
  underSlider: {
    position: 'absolute',
    marginTop: 13,
    //  width: 265,
    height: 5,
    backgroundColor: '#BDBDBD',
    left: 5
  }

});