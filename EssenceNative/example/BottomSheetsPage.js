/**
 * Created by zsoltmakai on 5/12/2016.
 */
const BottomSheet = require('../app/components/essence-bottomSheets');

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PropTypes,
  TouchableHighlight
} from 'react-native';


export default class BottomSheetsPage extends React.Component {

  toggleSheet() {
    this.refs.sheet.toggle();
  }

  render() {


    return (

      <BottomSheet
        ref="sheet"
        type="list"
        style={styles.container}
        content={<View><Text>HI</Text></View>}
      >
        <TouchableHighlight style={{
             width: 50,
             height: 50,
             backgroundColor: 'black'
             }} onPress={this.toggleSheet.bind(this) }>
          <View />
        </TouchableHighlight>
      </BottomSheet>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginBottom: 26
  }
});