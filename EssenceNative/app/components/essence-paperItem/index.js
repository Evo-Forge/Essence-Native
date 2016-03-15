const React = require('react-native');

const Helpers = require('../styles/helpers');

const {
  View,
  Text,
  StyleSheet,
  Component
} = React;

class PaperItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    this.hasType = Helpers[this.props.type] ? Helpers[this.props.type]: null;

    return (
      <View style={[Helpers['e-paper'], this.hasType, this.props.containerStyle]}>
        <Text
          style={this.props.textStyle}
          onPress={this.props.onPress}>
          {this.props.children}
        </Text>
      </View>
    );
  }
};



module.exports = PaperItem;
