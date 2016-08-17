/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';



import List from './lib/components/List/List';
import ListItem from './lib/components/List/ListItem/ListItem';
import ListHeader from './lib/components/List/ListHeader/ListHeader';
import Drawer  from './lib/components/Drawer/Drawer';
import DividerPage from './demo/example/DividerPage';
import PaperPage from './demo/example/PaperPage';

import { Actions } from 'react-native-router-flux';
import Router from './demo/example/Router';

const DRAWER_WIDTH = 300;

import SliderPage from './demo/example/SliderPage';



class EssenceNative extends Component {
// the renderMenu is a work in progress
  renderMenu() {
    return (
      <ScrollView style={styles.menu}>
        <List>
          <ListHeader title="Essence Native"/>
          <ListItem title="Divider" onPress= { this.navigate('DividerPage') }/>
          <ListItem title="Paper" onPress={ this.navigate('PaperPage') }/>
        </List>
      </ScrollView>
    )
  }

  navigate(which) {
    Actions[which]();
  }


  render() {
    return (
      <View style={{flex: 1}}>
       <SliderPage/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#c3c3c3',
    height: Dimensions.get('window').height
  },
  menu: {
    width: DRAWER_WIDTH,
    height: Dimensions.get('window').height,
    backgroundColor: 'white'
  },
  drawer: {
    position: 'absolute',
    left: 0,
    top: 0
  },
  container: {
    flex: 1,

  }
});


AppRegistry.registerComponent('EssenceNative', () => EssenceNative);
/*
*
*
* <Drawer
 ref="drawer"
 onLoad={this.setDrawer.bind(this)}
 drawerWidth={DRAWER_WIDTH}
 style={styles.drawer}
 keyboardDismissMode="on-drag"
 renderNavigationView={this.renderMenu.bind(this)}

 >
 <View style={[styles.wrapper]}>
 <Router />
 </View>
 </Drawer>
*
* */