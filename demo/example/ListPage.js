/**
 * Created by zsoltmakai on 5/12/2016.
 */
import List from '../app/components/essence-list';
import ListItem from '../app/components/essence-listItem';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PropTypes
} from 'react-native';


export default class ListPage extends React.Component {

  render() {
    return (
     <List>
       <ListItem leftIcon="." rightIcon="."/>
       <View style={{height: 10}} />
       <ListItem leftIcon="."/>
       <View style={{height: 10}} />
       <ListItem rightIcon="."/>
       <View style={{height: 10}} />
       <ListItem text="ListItem"/>

     </List>
    )
  }

}