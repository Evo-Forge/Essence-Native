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
        iconColor: PropTypes.string,
        chipIcon: PropTypes.bool
    };

    static defaultProps = {
        name: 'Chip',
        text: 'Chip',
        closable: false,
        chipIcon: false
    };

    constructor(props) {
        super(props);

       this.state = {
            closable: (props.closable === true),
            chipIcon: (props.chipIcon === true)
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
    renderChipIcon() {
      if(!this.state.chipIcon) return;
      return(
        <View style={styles.chipIcon}>
          <Text style={styles.chipIconText}>D</Text>
        </View>
      )
    }
    renderDeletableIcon() {
        if(this.state.closable) return;
        return (
          <View style={styles.chipDelete}>
            <Text style={styles.chipDeleteText}>x</Text>
          </View>
        )
    }



    render() {
        let closable = this.state.closable;

        return (
            <View style={styles.container}>
               <Animated.View
                   enabled={closable}
                   {...this.panResponder.panHandlers}
                   style={{opacity: this.pan}}>
                    <View style={styles.chipContent}>
                      {this.renderChipIcon()}
                       <View style={styles.textWrapper}>
                        <Text style={styles.chipText}>{this.props.text}</Text>
                       </View>
                      {this.renderDeletableIcon()}
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
        height: 45,
       // width: 200,
        borderRadius: 25,
        alignItems: 'center'
    //    justifyContent: 'space-between'
    },
    chipIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        width: 45,
        borderRadius: 45,
        backgroundColor: colors['e-background-indigo-400'],
        left: 0
    },
    textWrapper: {
      paddingHorizontal: 10,
      paddingVertical: 8

    },
    chipIconText: {
        fontSize: 24,
        color: 'white'
    },
    chipText: {
        fontSize: 17,
        textAlign: 'center',
      //  paddingHorizontal: 12,
      //  paddingVertical: 8

    },
    chipDelete: {
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
        borderRadius: 30,
        backgroundColor: 'darkgrey',
        marginRight: 6,
        marginLeft: 0

    },
    chipDeleteText: {
        color: 'white',
        fontSize: 18,
        bottom: 2
    }




});

module.exports = UiChip;