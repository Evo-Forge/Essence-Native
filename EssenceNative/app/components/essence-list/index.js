const React = require('react-native');

const Helpers = require('../Styles/helpers');

const {
	View,
	ScrollView,
} = React;

class ListItem extends Component{
	render() {
		return (
			<View style={this.props.style}>
				{this.props.children}
			</View>
		);
	}
}

class List extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <View style={[
          Helpers['e-list'],
          this.props.style || null
        ]}>
        {this.props.children.map(
          (listContent, index) => <ListItem key={"listItem" + index}>{listContent}</ListItem>
        )}
      </View>
    )
  }

}


module.exports = List;
