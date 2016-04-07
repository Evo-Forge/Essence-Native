
var React = require('react-native');
//var Essence = require('react-native-essence');
var Essence = require('../Components');

var {
	Utils,
	Colors,
	Helpers,
	Typography,
	Buttons,
	GetStarted,
	BtnItem,
	Divider,
	Progress,
	PaperItem,
	Card,
	SwitchItem,
	SliderItem,
	DialogItem,
	DatePicker,
	Menu,
	List,
} = Essence;

var {
	Text,
	View,
	Image,
	StyleSheet,
	ScrollView,
	LinkingIOS,
	AlertIOS,
	TouchableOpacity,
	TouchableHighlight,
	SwitchIOS,
} = React;

var Wrapper = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',	
  },
  logo: {
    width: 480,
    height: 234,
  },
  image_less: {
    width: 105,
    height: 50,
    marginRight: 20,
  },
  image_react: {
    width: 136.5,
    height: 46.5,
    marginLeft: 20,
  },
});

class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			trueSwitchIsOn: true,
      		falseSwitchIsOn: false,
		}
	}

	openLink(url) {
		if (url) { LinkingIOS.openURL(url); }
		return false;
	}

	render() {
		
		return (
          
	      <ScrollView>
	        <View style={[
	            Wrapper.container, 
	            Colors['e-background-indigo-400'], 
	            Helpers['e-padding-top-100'], 
	            Helpers['e-padding-bottom-100'],
	        ]}>
	          <Image
	            style={Wrapper.logo}
	            source={require('image!ess-logo')}
	          >
	          </Image>

	          <Text style={[
	            Typography['e-display-3'], 
	            Typography['e-text-center'],
	            Colors['e-text-white'],
	          ]}>
	            essence
	          </Text>
	          
	          <Text style={[
	            Typography['e-headline'], 
	            Typography['e-text-center'],
	            Colors['e-text-white'],
	          ]}>
	            THE ESSENTIAL MATERIAL DESIGN FRAMEWORK
	          </Text>

	          <View style={[
	              Helpers['e-padding-top-100'],
	          ]}>
	            <BtnItem 
	            	containerStyle={[
	            		Colors['e-background-indigo-800'],
	            	]} 
	            	textStyle={[
	            		Colors['e-text-white'],
	            	]}
	            	onPress={Utils.navigateMenu.bind(this, "Get Started", GetStarted)}
	            >
	            	GET STARTED WITH ESSENCE
	            </BtnItem>

	            <BtnItem 
	            	containerStyle={[
	            		Colors['e-background-white'],
	            	]} 
	            	textStyle={[
	            		Colors['e-text-indigo-800'],
	            	]}
	            	onPress={this.openLink.bind(this, "https://github.com/PearlVentures/Essence")}
	            >
	            	DOWNLOAD FROM GITHUB
	            </BtnItem>

	          </View>
	        </View>
	        <View style={[
	            Wrapper.container,
	            Colors['e-background-white'],
	            Helpers['e-padding-top-50'],
	        ]}>

	          <Text style={[
	            Typography['header-3'],
	            Typography['strong'],
	            Typography['e-text-center'],
	            Colors['e-text-indigo-400'],
	            Helpers['e-margin-bottom-100'],
	          ]}>
	            BUILD IT ON ONE, USE IT ON ALL!
	          </Text>

	          <Image
	            style={{width: 327, height: 168}}
	            source={require('image!banner')}
	          >
	          </Image>

	          <Divider style={[
	            Helpers['thinnest'],
	            Helpers['medium'],
	            Helpers['e-margin-top-50'],
	            Helpers['e-margin-bottom-50'],
	            Colors['e-background-grey-400'],
	          ]} />

	        </View>

	        <View style={[
	            Wrapper.container,
	            Colors['e-background-white'], 
	            Helpers['e-padding-bottom-50'],
	        ]}>

	          <Text style={[
	            Typography['header-2'],
	            Typography['strong'],
	            Typography['e-text-center'],
	            Colors['e-text-indigo-400'],
	            Helpers['e-margin-bottom-25'],
	          ]}>
	            DISTILLED WITH
	          </Text>

	          <View style={{flexDirection: 'row'}}>
	            <Image
	              style={Wrapper.image_less}
	              source={require('image!less')}
	            >
	            </Image>
	            <Image
	              style={Wrapper.image_react}
	              source={require('image!react')}
	            >
	            </Image>
	          </View>

	          <Divider style={[
	            Helpers['thinnest'],
	            Helpers['medium'],
	            Helpers['e-margin-top-50'],
	            Helpers['e-margin-bottom-50'],
	            Colors['e-background-grey-400'],
	          ]} />

	          <View style={[
	            Wrapper.container,
	          ]}>
	            <View style={[
	              Helpers['e-center'],
	              Helpers['e-margin-bottom-100'],
	            ]}>
	              <Image
	                style={[
	                  Helpers['e-margin-bottom-25'], 
	                  {height: 116, width: 66}
	                ]}
	                source={require('image!ready')}
	              >
	              </Image>
	              <Text style={[
	                Colors['e-text-indigo-400'],
	                Typography['header-3'],
	                Typography['strong'],
	              ]}>
	                READY TO BE DEPLOYED
	              </Text>

	              <Divider style={[
	                Helpers['thickest'],
	                Helpers['short'],
	                Helpers['e-margin-top-10'],
	                Helpers['e-margin-bottom-10'],
	                Colors['e-background-indigo-400'],
		          ]} />

	              <Text style={[
	                Colors['e-text-blue-grey-400'],
	                Typography['header-4'],
	                Typography['strong'],
	              ]}>
	                No configurations necessary
	              </Text>
	            </View>

	            <View style={[
	              Helpers['e-center'],
	              Helpers['e-margin-bottom-100'],
	            ]}>  
	              <Image
	                style={[
	                  Helpers['e-margin-bottom-25'], 
	                  {height: 120, width: 127}
	                ]}
	                source={require('image!focus')}
	              >
	              </Image>
	              <Text style={[
	                Colors['e-text-indigo-400'],
	                Typography['header-3'],
	                Typography['strong'],
	              ]}>
	                FULLY FOCUSED
	              </Text>
   
	              <Divider style={[
	                Helpers['thickest'],
	                Helpers['short'],
	                Helpers['e-margin-top-10'],
	                Helpers['e-margin-bottom-10'],
	                Colors['e-background-indigo-400'],
		          ]} />

	              <Text style={[
	                Colors['e-text-blue-grey-400'],
	                Typography['header-4'],
	                Typography['strong'],
	              ]}>
	                On intuitive & natural interaction
	              </Text>
	            </View>

	            <View style={[
	              Helpers['e-center'],
	              Helpers['e-margin-bottom-100'],
	            ]}>  
	              <Image
	                style={[
	                  Helpers['e-margin-bottom-25'], 
	                  {height: 119, width: 125}
	                ]}
	                source={require('image!document')}
	              >
	              </Image>
	              <Text style={[
	                Colors['e-text-indigo-400'],
	                Typography['header-3'],
	                Typography['strong'],
	              ]}>
	                FULLY DOCUMENTED
	              </Text>

	              <Divider style={[
	                Helpers['thickest'],
	                Helpers['short'],
	                Helpers['e-margin-top-10'],
	                Helpers['e-margin-bottom-10'],
	                Colors['e-background-indigo-400'],
		          ]} />

	              <Text style={[
	                Colors['e-text-blue-grey-400'],
	                Typography['header-4'],
	                Typography['strong'],
	              ]}>
	                And example-packed
	              </Text>
	            </View>

	          </View>

	        </View>

	        <View style={[
	          Wrapper.container,
	          Helpers["e-footer"],
	          Helpers["e-padding-top-50"],
	          Helpers["e-padding-bottom-15"],
	          Colors["e-background-indigo-400"],
	          Typography['e-text-center'],
	        ]}>
	          <Text style={[
	            Helpers['e-margin-bottom-25'],
	            Typography['header-3'],
	            Colors['e-text-white'],
	          ]}>
	            <Text style={[Colors["e-text-indigo-100"]]}>Join us on </Text>
	            <Text style={[Typography['strong'], {marginRight: 20}]}
	              onPress={this.openLink.bind(this, "https://twitter.com/Pearl_HQ")}
	            >
	            &nbsp;Twitter 
	            </Text>

	            <Text style={[Typography['strong'], {marginRight: 20}]}
	              onPress={this.openLink.bind(this, "https://facebook.com/pearlhq")}
	            >
	            &nbsp;Facebook 
	            </Text>

	            <Text style={[Typography['strong'], {marginRight: 20}]}
	              onPress={this.openLink.bind(this, "https://github.com/PearlVentures/Essence")}
	            >
	            &nbsp;GitHub 
	            </Text>
	          </Text>
	          <Text style={[
	            Colors['e-text-white'],
	          ]}>
	            Copyright 2015
	          </Text>
	          <Text style={[
	            Colors["e-text-indigo-100"],
	            Helpers['e-margin-bottom-25'],
	            Typography['strong'],
	          ]}>
	            <Text 
	              style={[
	                Colors['e-text-white'],
	              ]}
	              onPress={this.openLink.bind(this, "http://pearlhq.com/")}
	            >
	                Pearl Ventures
	            </Text>
	            <Text> - an Evozon Company</Text>
	          </Text>

	        </View>

	      </ScrollView>
	    );
	}
}

module.exports = Main;