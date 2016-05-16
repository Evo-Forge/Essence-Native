/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
/*
 const Input = require('./app/components/essence-input/index');
 const Icon = require('./app/components/essence-icon');
 const TextArea = require('./app/components/essence-textArea/index');
 const Card = require('./app/components/essence-cards');
 const Switch = require('./app/components/essence-switch');
 const Paper = require('./app/components/essence-paper');
 const Slider = require('./app/components/essence-slider');
 const Chip = require('./app/components/essence-chip');
 const Drawer = require('./app/components/essence-drawer');
 const Header = require('./app/components/essence-header');
 const Image = require('./app/components/essence-image');
 const BottomSheet = require('./app/components/essence-bottomSheets/index');
 const Button = require('./app/components/essence-button/index');
 const ListHeader = require('./app/components/essence-listHeader');
 const List = require('./app/components/essence-list');
 const ListItem = require('./app/components/essence-listItem');
 const Menu = require('./app/components/essence-menu');
 const TabMenu = require('./app/components/essence-tabMenu');
 const TabItem = require('./app/components/essence-tabItem');
 const TabContent = require('./app/components/essence-tabContent');
 const Snackbar = require('./app/components/essence-snackbar');
 const Switch = require('./app/components/essence-switch');
 */


const ToolBar = require('./app/components/essence-toolBar');
const Drawer = require('./app/components/essence-drawer');
const helpers = require('./app/constants/helpers');
const colors = require('./app/constants/colors');

import Router from './example/Router';
const { Actions } = require('react-native-router-flux');

import List from './app/components/essence-list';
import ListItem from './app/components/essence-listItem';
import ListHeader from './app/components/essence-listHeader';

import Image from './app/components/essence-image';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  PropTypes,
  TouchableHighlight
} from 'react-native';

const DRAWER_WIDTH = 300;

class EssenceNative extends Component {

  renderMenu() {
    return (
      <ScrollView style={styles.menu}>
        <List>
          <ListHeader title="Essence Native"><Image width={50} height={50} source='assets/essence_icon'/></ListHeader>
          <ListItem title="Home" onPress={ () => this.navigate('home')}/>
          <ListItem title="ActionButton" onPress={ () => this.navigate('actionButton')}/>
          <ListItem title="BottomSheets" onPress={ () => this.navigate('bottomSheets')}/>
          <ListItem title="Button" onPress={ () => this.navigate('button')}/>
          <ListItem title="Card" onPress={ () => this.navigate('cards')}/>
          <ListItem title="Chip" onPress={ () => this.navigate('chip')}/>
          <ListItem title="Divider" onPress={ () => this.navigate('divider')}/>
          <ListItem title="Image" onPress={ () => this.navigate('image')}/>
          <ListItem title="Input" onPress={ () => this.navigate('input')}/>
          <ListItem title="List" onPress={ () => this.navigate('list')}/>
          <ListItem title="Paper" onPress={ () => this.navigate('paper')}/>
          <ListItem title="Slider" onPress{ () => this.navigate('slider')}/>
          <ListItem title="Switch" onPress={ () => this.navigate('switch')}/>
          <ListItem title="Snackbar" onPress={ () => this.navigate('snackbar')}/>
          <ListItem title="TextArea" onPress={ () => this.navigate('textarea')}/>
          <ListItem title="Toolbar" onPress={() => this.navigate('toolbar')}/>
        </List>
      </ScrollView>
    )
  }

  navigate(which) {
    this.refs.drawer.closeDrawer();
    Actions[which]();
  }

  render() {


    return (
      <View style={styles.container}>
        <Drawer
          ref="drawer"
          drawerWidth={DRAWER_WIDTH}
          style={styles.drawer}
          keyboardDismissMode="on-drag"
          renderNavigationView={this.renderMenu.bind(this)}>
          <View style={[styles.wrapper]}>
            <Router />
          </View>
        </Drawer>
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
