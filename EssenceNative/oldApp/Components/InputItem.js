
var React = require('react-native');

var Helpers = require('../Styles/helpers');

var {
	View,
    TextInput,
} = React;


class InputItem extends React.Component{
	render() {
		return (
          <TextInput
            autoCorrect={this.props.autoCorrect}
            autoFocus={this.props.autoFocus }
            bufferDelay={this.props.bufferDelay}
            clearButtonMode={this.props.clearButtonMode}
            clearTextOnFocus={this.props.clearTextOnFocus}
            controlled={this.props.controlled}
            editable={this.props.editable}
            enablesReturnKeyAutomatically={this.props.enablesReturnKeyAutomatically}
            keyboardType={this.props.keyboardType}
            multiline={this.props.multiline}
            onBlur={this.props.onBlur}
            onChange={this.props.onChange}
            onChangeText={this.props.onChangeText}
            onEndEditing={this.props.onEndEditing}
            onFocus={this.props.onFocus}
            onSubmitEditing={this.props.onSubmitEditing}
            password={this.props.password}
            placeholder={this.props.placeholder}          
            placeholderTextColor={this.props.placeholderTextColor}
            returnKeyType={this.props.returnKeyType}
            selectTextOnFocus={this.props.selectTextOnFocus}
            selectionState={this.props.selectionState}
            testID={this.props.testID}
            value={this.props.value}

            style={[ Helpers['e-input'], this.props.multiline ? Helpers['e-input-multiline'] : "", this.props.style ]}
          />
        );
	}
};

// Example:
// <InputItem 
//      multiline={false} 
//      returnKeyType="done">
// />


module.exports = InputItem;