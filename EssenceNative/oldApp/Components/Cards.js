
var React = require('react-native');

var Helpers = require('../Styles/helpers');
var Typography = require('../Styles/typography');
var Colors = require('../Styles/colors');

var {
	View,
    Image,
    Text,
	StyleSheet,
} = React;

class Item extends React.Component{
	render() {
		return (
			<View style={this.props.cardStyle}>
	            {this.props.children}
            </View>
		);
	}
};

class Header extends React.Component{
	render() {
        if (!this.props.imageSource) return null;

		return (
			<View  style={[{width: this.props.imageWidth || 350}, this.props.cardStyle]}>
	            <Image
                  style={[{width: this.props.imageWidth || 350, height: this.props.imageHeight || 200}, {backgroundColor: 'transparent'}]}
                  source={{uri: this.props.imageSource}}

                ><Text style={[Typography['e-display-1'], Colors['e-text-white'], {position:'absolute', bottom:'10', left: '2'}]}>{this.props.imageText}</Text>
                </Image>
            </View>
		);
	}
};

class Content extends React.Component{
	render() {
		return (
			<View>
	            <Text>
                  {this.props.children}
                </Text>
            </View>
		);
	}
};

class Footer extends React.Component{
	render() {
		return (
			<View>
              {this.props.children}
            </View>
		);
	}
};

var Card = {
  Item,
  Header,
  Content,
  Footer,
};

module.exports = Card;
