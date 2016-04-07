'use strict';

const React = require('react-native');

const {
    View,
    Component,
    StyleSheet,
    PropTypes,
    View
  } = React;

class UiChip extends Component {
    static propTypes = {
        data: PropTypes.any,
        name: PropTypes.string,
        text: PropTypes.string,
        icon: PropTypes.any,
        deletable: PropTypes.bool,
        onCLose: PropTypes.func,
        iconColor: PropTypes.string
    };

    static defaultProps = {
        name: 'Chip',
        text: 'Chip',
        deletable: false

    };

    render() {
        return (
            <View style={styles.chipContainer}>
                <Icon style={style.chipIcon}/>
                <Text style={style.chipText}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   chipContainer: {
       backgroundColor: 'grey',
       height: 50,
       width: 150,
       borderRadius: 3
   },
   chipIcon: {

   },
   chipText: {

   }



});

modules.export = UiChip;