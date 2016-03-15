const React = require('react-native');

const Helpers = require('../Styles/helpers');

const {
  View,
  Text,
  StyleSheet,
  Switch,
  Component
} = React;

class SwitchItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchIsOn: this.props.checked
    }
  }

  renderTextBefore() {
    if(!this.props.beforeText) return null;

    return (
      <Text style={[Helpers['text-before'], this.props.textStyle]}>
        {this.props.beforeText}
      </Text>
    );
  }

  renderTextAfter() {
    if (!this.props.afterText) return null;

    return (
      <Text style={[Helpers['text-after'], this.props.textStyle]}>
        {this.props.afterText}
      </Text>
    );
  }

  render() {
    return (
      <View style={[Helpers['e-swtich'], this.props.containerStyle]}>
        {this.renderTextBefore().bind(this)}
        <Switch
          onTintColor={'#009587'}
          tintColor={'#505050'}
          onValueChange={(value) => this.setState({switchIsOn: value})}
          value={this.state.switchIsOn}
          disabled={this.props.disabled}/>
        {this.renderTextAfter().bind(this)}
      </View>
    )
  }
};

module.exports = SwitchItem;
