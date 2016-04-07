'use strict';

const React = require('react-native');

const colors = require('../../styles/colors');

const {
    View,
    StyleSheet,
    Component,
    PropTypes,
    PanResponder,
    Dimensions,
    Animated
    } = React;

const {
    height: deviceHeight,
    width: deviceWidth
    } = Dimensions.get('window');

class UiSlider extends Component {

    static propTypes = {
        start: PropTypes.number,
        width: PropTypes.number,
        disabled: PropTypes.bool

    };

    static defaultProps = {
        disabled: false,
        width: 265
    };

    getHandlerWidth() {
        var handlerWidth = 50,
            handlerScale = this.panScale._value;
        return handlerWidth;// * handlerScale / 2;
    }

    constructor(props) {
        super(props);

        this.state = {
            isDisabled: (props.disabled === true)
        };


        this.pan = new Animated.Value();
        this.panScale = new Animated.Value(1);
        this.panBg = new Animated.Value(0);
        this.startX = 0;
        this.panResponder = PanResponder.create({
            onPanResponderGrant: (e) => {
                var nextValue = e.nativeEvent.pageX - this.getHandlerWidth();
                if (nextValue < 0) nextValue = 0;
                this.startX = e.nativeEvent.pageX;
                Animated.timing(this.panScale, {
                    toValue: 1.5,
                    duration: 50
                }).start(() => {
                    var handlerWidth = this.getHandlerWidth();
                    nextValue = nextValue / 1.5 + handlerWidth * 1.5 - handlerWidth / 2;
                    this.pan.setValue(nextValue);
                });
            },
            onStartShouldSetPanResponder: (e) => {
                if (this.state.isDisabled) return false;
                return true;
            },
            onPanResponderMove: (e) => {
                var handlerWidth = this.getHandlerWidth();
                var nextValue = e.nativeEvent.pageX - handlerWidth;
                if (nextValue < 0) nextValue = 0;
                if (nextValue + handlerWidth > 300) {
                    nextValue = 300 - handlerWidth;
                }
                this.panBg.setValue(nextValue);
                //nextValue = nextValue - nextValue * this.panScale._value;
                nextValue = nextValue / this.panScale._value + handlerWidth * this.panScale._value - handlerWidth / 2;
                console.log(nextValue, this.panScale._value, handlerWidth);
                //nextValue = nextValue + this.panScale._value * handlerWidth / 2;
                this.pan.setValue(nextValue);
            },
            onPanResponderMove2: Animated.event([null, {
                dx: this.pan

            }]),
            onPanResponderRelease: (e, gesture) => {
                var endX = e.nativeEvent.pageX;
                Animated.timing(this.panScale, {
                    toValue: 1,
                    duration: 50
                }).start();
            }
        });
    }

  /*  disable(value) {
        if (this.state.isDisabled === value) return;
        this.setState({
            isDisabled: (typeof value === 'boolean' ? value : true)
        });
    }*/


    render() {
        let isDisabled = this.props.disabled || this.state.isDisabled || false;
        let backgroundColor = colors['e-background-indigo-400'];

        if (isDisabled) {
            backgroundColor = colors['e-background-grey-400']
        }
        let sliderStyle = {
            backgroundColor: backgroundColor

        };
        return (
            <View style={styles.container}
                  enabled={!isDisabled}>
                <View ref="slider" style={[styles.underSlider, {width: this.props.width}]}/>
                <Animated.View
                    ref="coloredBg"
                    style={[styles.bgSlider, {
               width: this.panBg
             }, sliderStyle ]}

                />
                <Animated.View
                    {...this.panResponder.panHandlers}
                    style={[{
                transform: [
                  { scale: this.panScale },
                  { translateX: this.pan }
                ]
              }, this.props.style]}>
                    <View
                        style={[styles.overSlider, sliderStyle]} >
                        {this.props.children}
                    </View>
                </Animated.View>

            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        left: 20
    },
    overSlider: {
        width: 30,
        height: 30,
        borderRadius: 15,
//    backgroundColor: colors['e-background-indigo-400']
    },
    bgSlider: {
        position: 'absolute',
        marginTop: 13,
        height: 5,
//    backgroundColor: colors['e-background-indigo-400']
    },
    underSlider: {
        position: 'absolute',
        marginTop: 13,
      //  width: 265,
        height: 5,
        backgroundColor: colors['e-background-grey-400'],
        left: 5
    }

});
module.exports = UiSlider;
