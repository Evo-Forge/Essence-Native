
var React = require('react-native');

var Helpers = require('../Styles/helpers');

var {
	View,
	ScrollView,
} = React;

class ListItem extends React.Component{
	render() {
		return (
			<View style={this.props.style}>
				{this.props.children}
			</View>
		);
	}
}

class List extends React.Component{
	
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
		);
	}
};

// Example:
// 1. Simple list
// <List style={[Helpers['e-shadow-2'], Helpers['e-margin-top-50'], Helpers['e-margin-bottom-200']]}>
// 	<TouchableHighlight
// 		underlayColor='#5C6BC0' 
// 		onPress={this.openLink.bind(this, 'http://essence.pearlhq.com/')}>
// 		<View style={Helpers['e-list-item']}>
// 			<View style={Helpers['e-list-content']}>
// 				<Image 
// 					style={[Helpers['e-list-avatar'], Helpers['e-left']]} 
// 					source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			</View>
// 			<View style={[Helpers['e-list-text']]}>
// 				<Text>Attractions</Text>
// 			</View>
// 		</View>
// 	</TouchableHighlight>
// 	<TouchableHighlight
// 		underlayColor='#5C6BC0' 
// 		onPress={this.openLink.bind(this, 'http://essence.pearlhq.com/')}>
// 		<View style={Helpers['e-list-item']}>
// 			<View style={Helpers['e-list-content']}>
// 				<Image 
// 					style={[Helpers['e-list-avatar'], Helpers['e-left']]} 
// 					source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			</View>
// 			<View style={[Helpers['e-list-text']]}>
// 				<Text>Fun</Text>
// 			</View>
// 		</View>
// 	</TouchableHighlight>
// 	<TouchableHighlight
// 		underlayColor='#5C6BC0' 
// 		onPress={this.openLink.bind(this, 'http://essence.pearlhq.com/')}>
// 		<View style={Helpers['e-list-item']}>
// 			<View style={Helpers['e-list-content']}>
// 				<Image 
// 					style={[Helpers['e-list-avatar'], Helpers['e-left']]} 
// 					source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			</View>
// 			<View style={[Helpers['e-list-text']]}>
// 				<Text>Food</Text>
// 			</View>
// 		</View>
// 	</TouchableHighlight>
// 	<TouchableHighlight
// 		underlayColor='#5C6BC0' 
// 		onPress={this.openLink.bind(this, 'http://essence.pearlhq.com/')}>
// 		<View style={Helpers['e-list-item']}>
// 			<View style={Helpers['e-list-content']}>
// 				<Image 
// 					style={[Helpers['e-list-avatar'], Helpers['e-left']]} 
// 					source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			</View>
// 			<View style={[Helpers['e-list-text']]}>
// 				<Text>Kids</Text>
// 			</View>
// 		</View>
// 	</TouchableHighlight>
// </List>
//
// 2. Two lines list
// <List style={[Helpers['e-shadow-2'], Helpers['e-margin-top-50'], Helpers['e-margin-bottom-200']]}>
// 	<TouchableHighlight
// 		underlayColor='#5C6BC0' 
// 		onPress={this.openLink.bind(this, 'http://essence.pearlhq.com/')}>
// 		<View style={Helpers['e-list-item']}>
// 			<View style={Helpers['e-list-content']}>
// 				<Image 
// 					style={[Helpers['e-list-avatar'], Helpers['e-left']]} 
// 					source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			</View>
// 			<View style={[Helpers['e-list-text']]}>
// 				<Text style={[Typography['strong']]}>Attractions</Text>
// 				<Text>Here are more information about Attractions</Text>
// 			</View>
// 		</View>
// 	</TouchableHighlight>
// 	<TouchableHighlight
// 		underlayColor='#5C6BC0' 
// 		onPress={this.openLink.bind(this, 'http://essence.pearlhq.com/')}>
// 		<View style={Helpers['e-list-item']}>
// 			<View style={Helpers['e-list-content']}>
// 				<Image 
// 					style={[Helpers['e-list-avatar'], Helpers['e-left']]} 
// 					source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			</View>
// 			<View style={[Helpers['e-list-text']]}>
// 				<Text style={[Typography['strong']]}>Fun</Text>
// 				<Text>Here are more information about Fun</Text>
// 			</View>
// 		</View>
// 	</TouchableHighlight>
// 	<TouchableHighlight
// 		underlayColor='#5C6BC0' 
// 		onPress={this.openLink.bind(this, 'http://essence.pearlhq.com/')}>
// 		<View style={Helpers['e-list-item']}>
// 			<View style={Helpers['e-list-content']}>
// 				<Image 
// 					style={[Helpers['e-list-avatar'], Helpers['e-left']]} 
// 					source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			</View>
// 			<View style={[Helpers['e-list-text']]}>
// 				<Text style={[Typography['strong']]}>Food</Text>
// 				<Text>Here are more information about Food</Text>
// 			</View>
// 		</View>
// 	</TouchableHighlight>
// 	<TouchableHighlight
// 		underlayColor='#5C6BC0' 
// 		onPress={this.openLink.bind(this, 'http://essence.pearlhq.com/')}>
// 		<View style={Helpers['e-list-item']}>
// 			<View style={Helpers['e-list-content']}>
// 				<Image 
// 					style={[Helpers['e-list-avatar'], Helpers['e-left']]} 
// 					source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
// 			</View>
// 			<View style={[Helpers['e-list-text']]}>
// 				<Text style={[Typography['strong']]}>Kids</Text>
// 				<Text>Here are more information about Kids</Text>
// 			</View>
// 		</View>
// 	</TouchableHighlight>
// </List>
//
// 3. Multi line list
// <List style={[Helpers['e-shadow-2'], Helpers['e-margin-top-50'], Helpers['e-margin-bottom-200']]}>
//	<TouchableHighlight
//		underlayColor='#5C6BC0' 
//		onPress={this.openLink.bind(this, 'http://essence.pearlhq.com/')}>
//		<View style={Helpers['e-list-item']}>
//			<View style={Helpers['e-list-content']}>
//				<Image 
//					style={[Helpers['e-list-avatar'], Helpers['e-left']]} 
//					source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
//			</View>
//			<View style={[Helpers['e-list-text']]}>
//				<Text style={[Typography['strong']]}>Attractions</Text>
//				<Text style={[Typography['em']]}>Subtitle Attractions</Text>
//				<Text>Here are more information about Attractions</Text>
//			</View>
//		</View>
//	</TouchableHighlight>
//	<TouchableHighlight
//		underlayColor='#5C6BC0' 
//		onPress={this.openLink.bind(this, 'http://essence.pearlhq.com/')}>
//		<View style={Helpers['e-list-item']}>
//			<View style={Helpers['e-list-content']}>
//				<Image 
//					style={[Helpers['e-list-avatar'], Helpers['e-left']]} 
//					source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
//			</View>
//			<View style={[Helpers['e-list-text']]}>
//				<Text style={[Typography['strong']]}>Fun</Text>
//				<Text style={[Typography['em']]}>Subtitle Fun</Text>
//				<Text>Here are more information about Fun</Text>
//			</View>
//		</View>
//	</TouchableHighlight>
//	<TouchableHighlight
//		underlayColor='#5C6BC0' 
//		onPress={this.openLink.bind(this, 'http://essence.pearlhq.com/')}>
//		<View style={Helpers['e-list-item']}>
//			<View style={Helpers['e-list-content']}>
//				<Image 
//					style={[Helpers['e-list-avatar'], Helpers['e-left']]} 
//					source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
//			</View>
//			<View style={[Helpers['e-list-text']]}>
//				<Text style={[Typography['strong']]}>Food</Text>
//				<Text style={[Typography['em']]}>Subtitle Food</Text>
//				<Text>Here are more information about Food</Text>
//			</View>
//		</View>
//	</TouchableHighlight>
//	<TouchableHighlight
//		underlayColor='#5C6BC0' 
//		onPress={this.openLink.bind(this, 'http://essence.pearlhq.com/')}>
//		<View style={Helpers['e-list-item']}>
//			<View style={Helpers['e-list-content']}>
//				<Image 
//					style={[Helpers['e-list-avatar'], Helpers['e-left']]} 
//					source={{uri: 'http://essence.pearlhq.com/assets/img/card-user-img.jpg'}}/>
//			</View>
//			<View style={[Helpers['e-list-text']]}>
//				<Text style={[Typography['strong']]}>Kids</Text>
//				<Text style={[Typography['em']]}>Subtitle Kids</Text>
//				<Text>Here are more information about Kids</Text>
//			</View>
//		</View>
//	</TouchableHighlight>
// </List>
//
// 5. List controls
// <List style={Helpers['e-shadow-2']}>
// 	<View style={Helpers['e-list-item']}>
// 		<View style={Helpers['e-list-content']}>
// 			<Text style={[Helpers['e-list-text'], Typography['strong']]}>Wi-Fi Network</Text>
// 		</View>
// 		<SwitchItem containerStyle={Helpers['e-right']} />
// 	</View>
// 
// 	<View style={Helpers['e-list-item']}>
// 		<View style={Helpers['e-list-content']}>
// 			<Text style={[Helpers['e-list-text'], Typography['strong']]}>Bluetooth settings</Text>
// 		</View>
// 		<SwitchItem checked={true} containerStyle={Helpers['e-right']} />
// 	</View>
// 
// 	<View style={Helpers['e-list-item']}>
// 		<View style={Helpers['e-list-content']}>
// 			<Text style={[Helpers['e-list-text'], Typography['strong']]}>Data usage</Text>
// 		</View>
// 	</View>
// </List>

module.exports = List;