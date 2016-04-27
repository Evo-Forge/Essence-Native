'use strict';

const React = require('react-native');
const colors = require('../../constants/colors')
const {
    View,
    Text,
    Component,
    StyleSheet,
    PropTypes,
    Animated,
    PanResponder
    } = React;

class UiChip extends Component {
    static propTypes = {
        data: PropTypes.any,
        name: PropTypes.string,
        text: PropTypes.string,
        icon: PropTypes.any,
        closable: PropTypes.bool,
        onClose: PropTypes.func,
        iconColor: PropTypes.string

    };

    static defaultProps = {
        name: 'Chip',
        text: 'Chip',
        closable: false

    };

    constructor(props) {
        super(props);

       this.state = {
            closable: (props.closable === true)
       };
       this.pan = new Animated.Value(1);
       this.panResponder = PanResponder.create({
            onPanResponderGrant: (e) => {
               return true;
            },
            onStartShouldSetPanResponder:(e) => {
              if(this.state.closable) return false;
                return true;
            },
            onPanResponderMove: (e) => {
               return true;

            },
            onPanResponderRelease: (e) => {
                Animated.timing(this.pan, {
                    toValue: 0,
                    duration: 50
                }).start();
            }
        });


    }

    renderDeletableIcon() {
        if(!this.state.closable) return;
        return (
            <View>

            </View>
        )
    }



    render() {
        let closable = this.state.closable;
           console.log(this.pan);
            console.log(closable);
        return (
            <View style={styles.container}>
               <Animated.View
                   enabled={closable}
                   {...this.panResponder.panHandlers}
                   style={{opacity: this.pan}}>
                    <View style={styles.chipContent}>
                        <View style={styles.chipIcon}>
                            <Text style={styles.chipIconText}>D</Text>
                        </View>
                        <Text style={styles.chipText}>{this.props.text}</Text>
                        <View style={styles.chipDelete}>
                            <Text style={styles.chipDeleteText}>x</Text>
                        </View>
                    </View>

               </Animated.View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    chipContent: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        height: 50,
        width: 200,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    chipIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: colors['e-background-indigo-400'],
        left: 0
    },
    chipIconText: {
        fontSize: 25,
        color: 'white'
    },
    chipText: {
        fontSize: 18

    },
    chipDelete: {
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 35,
        borderRadius: 35,
        backgroundColor: 'darkgrey',
        right: 10
    },
    chipDeleteText: {
        color: 'white',
        fontSize: 18,
        bottom: 2
    }




});

module.exports = UiChip;