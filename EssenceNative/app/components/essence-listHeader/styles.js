'use strict';
/**
 * Created by zsoltmakai on 6/24/2016.
 */

import React, {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  headerTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontSize: 13,
    shadowColor: 'grey',
    fontWeight: 'bold',
    color: 'grey'
  }
});