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
 const Slider = require('./app/components/essence-sliders');
 const Chip = require('./app/components/essence-chip');
 const DrawerLayout = require('./app/components/essence-drawerLayout');
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

 */

const Snackbar = require('./app/components/essence-snackbar');

const helpers = require('./app/constants/helpers');
const colors = require('./app/constants/colors');



import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PropTypes,
  TouchableHighlight,

} from 'react-native';

class EssenceNative extends Component {

  toggleSnackbar() {
    this.refs.snack.toggle();
  }

  render() {


    return (
      <View style={styles.container}>

       <Snackbar
          ref="snack"
          content="Snackbar"
          undoButton={false}
          >
       </Snackbar>
        <TouchableHighlight style={{
          width: 50,
          height: 50,
          backgroundColor: 'yellow',
          marginBottom: 0

        }} onPress={this.toggleSnackbar.bind(this)}>
          <View/>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1


  }
});

AppRegistry.registerComponent('EssenceNative', () => EssenceNative);
