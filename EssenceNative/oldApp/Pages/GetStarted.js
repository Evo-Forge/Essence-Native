
var React = require('react-native');

// Styles components
var Colors = require('../Styles/colors');
var Helpers = require('../Styles/helpers');
var Typography = require('../Styles/typography');
var Buttons = require('../Styles/buttons');
var Utils = require('../Utils/helpers');

var {
	Text,
	View,
	Image,
	StyleSheet,
	ScrollView,
} = React;

var Wrapper = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',	
  },
});

class GetStarted extends React.Component{
	render() {
		return (
			<ScrollView>
				<View style={Wrapper.container}>
					<Image
					  style={[{width: Utils.dimensions.width, backgroundColor: 'transparent'}, Helpers["e-margin-bottom-25"]]}
					  resizeMode={Image.resizeMode.cover}
					  source={require("image!GetStarted")}
					>
						<Text style={[Typography["header-2"], Colors["e-text-white"], Helpers["e-center"], Helpers["e-padding-bottom-15"]]}>
							Get Started with Essence
						</Text>
						<Text style={[Typography["header-4"], Colors["e-text-white"], Helpers["e-center"]]}>
							Learn how to use Essence for your application
						</Text>
					</Image>

					<View style={Helpers["e-margin-bottom-25"]}>
						<Text style={[Typography["header-3"], Colors["e-text-indigo-400"]]}>
							GET ESSENCE
						</Text>
						<Text style={[ Colors["e-text-blue-grey-400"]]}>
							Being an open source project, Essence is available on Github. To start using it you can clone it using git from here, or download it as a .zip archive from here. Make sure you have node and grunt installed correctly on your system.
						</Text>
					</View>
					
					<View style={Helpers["e-margin-bottom-25"]}>
						<Text style={[Typography["header-3"], Colors["e-text-indigo-400"]]}>
							THE FILES
						</Text>
						<Text style={[ Colors["e-text-blue-grey-400"]]}>
							The files where you will work are separated from the components. Inside the project you can find all the components, and also the Essence website. They can be found in the static folder. But the files where we created an empty skeleton are located in examples/project-template. Here you'll find the index.html file, and two folders: css and js. The index.html file already includes all the dependencies needed to take advantage of Essence. Use the project.css file from the css directory to create your custom styling.
						</Text>
					</View>

					<View style={Helpers["e-margin-bottom-25"]}>
						<Text style={[Typography["header-3"], Colors["e-text-indigo-400"]]}>
							CREATING HTML WITH REACT
						</Text>
						<Text style={[Colors["e-text-blue-grey-400"], Helpers["e-margin-bottom-15"]]}>
							The recommended way to use Essence is with React. Don't worry: if you can write HTML, you can write React because we organized things for you in a very easy-to-use manner. The simplest way to use Essence is explained here. 
						</Text>
						<Text style={[Colors["e-text-blue-grey-400"], Helpers["e-margin-bottom-15"]]}>
							Using your favourite editor, open the examples/project-template/dist/js/project.js file. Everything you want to see in your browser goes here. You don't need to touch the index.html file. In the project.js file all the components are included, and below you'll find React.render(). All your content goes between those paranthesis. 
						</Text>
						<Text style={[Colors["e-text-blue-grey-400"]]}>
							You will find the code for every ready-to-use component in their specific page, under the visual part. Use the left navigation menu to navigate between them. To make it really clear: if you copy the react code from the buttons component page, to your project.js file, inside the parenthesis, your page will show the buttons we included in the Essence website. Simple, right?
						</Text>
					</View>
					
					<View style={Helpers["e-margin-bottom-25"]}>
						<Text style={[Typography["header-3"], Colors["e-text-indigo-400"]]}>
							VIEWING IN THE BROWSER
						</Text>
						<Text style={[Colors["e-text-blue-grey-400"]]}>
						If you open the index.html example file in your browser you won't see anything. It's because the files must be placed on a web server. Use one of the web server below, and view your files project on localhost:
						</Text>
						<Text style={[Colors["e-text-blue-grey-400"]]}>- For Windows users Xampp or Wamp </Text>
						<Text style={[Colors["e-text-blue-grey-400"]]}>- For Linux/Mac users Apache Web Server or Nginx</Text>
					</View>
					
					<View style={Helpers["e-margin-bottom-25"]}>
						<Text style={[Typography["header-3"], Colors["e-text-indigo-400"]]}>
							HOW TO USE THE ELEMENTS AND COMPONENTS
						</Text>
						<Text style={[Colors["e-text-blue-grey-400"], Helpers["e-margin-bottom-15"]]}>
							Of course, you will have your own structure, but it doesn't mean it gets harder. You get all the HTML tags, only used in a slightly different way. 
						</Text>
						<Text style={[Colors["e-text-blue-grey-400"], Helpers["e-margin-bottom-15"]]}>
							All the tags you need are splited in two main categories: BLOCK elements, and TEXT elements. So if you need to create a div element, you will write &lt;Block type='div'&gt;&lt;/Block&gt;. Or if you need a text element, say a paragraph you'll use &lt;Text type='p'&gt;your text here&lt;/Text&gt;. Below are all the block and text elements you can use  
						</Text>

						<Text style={[Colors["e-text-blue-grey-400"], Typography["header-6"], Helpers["e-margin-bottom-15"]]}>
							Note: If no type is selected for an element, React will wrap your content inside a span element. 
						</Text>
					</View>

					<View style={Helpers["e-margin-bottom-25"]}>
						<Text style={[Typography["header-3"], Colors["e-text-indigo-400"]]}>
							ADVANCED USE
						</Text>
						<Text style={[Colors["e-text-blue-grey-400"]]}>
							If you are an advanced user please follow the instructions bellow: 
						</Text>
						<Text style={[Colors["e-text-blue-grey-400"]]}>
							After the cloning is completed, navigate using your console to the newly created folder called "Essence". If you have chosen to download the .zip archive, extract the "Essence-master" folder and navigate with your console inside it. Here you must run two commands in order to start working with Essence. First run npm install to install all the dependencies required for the development environment. Now, if you want to make changes in the less files, to customize variables or create mixins, you must run grunt so all your changes are watched and compiled on save.
						
						</Text>
					</View>

				</View>
			</ScrollView>
		);
	}
}

module.exports = GetStarted;