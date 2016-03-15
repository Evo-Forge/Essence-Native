"use strict";

const React = require('react-native');

const {
  View,
  Text,
  Picker,
  PickerIOS,
  Component
} = React;

class Menu extends Component {

  static propTypes = {
    menuSelected: Proptypes.number,
    showMenu: Proptypes.bool
  };

  static defaultProps = {
    menuSelected: 0,
    showMenu: false

  };
  contructor(props) {
    super(props);

    this.state = {
      placeholder: this.props.placeholder || 'Menu',

    }
  }

  showMenu() {
    this.setState({
      showMenu: true
    })
  }

  handleSelecter(menuIndex) {
    this.setState({
      showMenu: true
    })
  }

  handleSelecter(menuIndex) {
    this.setState({
      menuSelecte: menuIndex,
      placeholder: this.props.children[menuIndex] || this.props.placeholder,
      showMenu: false
    })
  }

  renderPicker() {
    if(!Array.isArray(this.props.children) && this.props.children.length > 0
  ) return null;

  if(/*device is IOS or android*/) {
    return (
      <PickerIOS
        selectedValue={this.state.menuSelected}
        onValueChange={this.handleSelected.bind(this)}>
        {this.props.children.map(
          (menuName, menuIndex) => (
            <MenuItem
              key={'menu_' + menuIndex}
              value={menuIndex}
              label={menuName}/>
          )
        )}
      </PickerIOS>
    } else {
      return (
        <Picker
          selectedValue={this.state.menuSelected}
          onValueChange={this.handleSelected.bind(this)}>
          {this.props.children.map(
            (menuName, menuIndex) => (
              <MenuItem
                key={'menu_' + menuIndex}
                value={menuIndex}
                Label={menuName}/>
            )
          )}
        </Picker>
      )
    }

    )
  }
  render() {
    return (
      <View
        style={[Helpers['ne-nav-menu'], this.props.containerStyle]}>
        {this.renderPlaceholder()}
        {this.renderPicker()}
      </View>
    );
  }

};

module.exports = Menu;
