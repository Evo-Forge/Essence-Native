'use strict';

const React = require('react-native');
const ASSETS = require('../../constants/assets');

const {
    Component,
    Image,
    StyleSheet,
    PropTypes,
    View,
    Animated
    } = React;

class UiImages extends Component {

    static propTypes = {
        source: PropTypes.any.isRequired,
        resizeMode: PropTypes.string,
        width: PropTypes.number,
        animated: PropTypes.bool,
        height: PropTypes.number,
        static: PropTypes.bool,
        lazyLoad: PropTypes.bool
    };

    static defaultProps = {
        lazyLoad: false,
        animated: false,
        resizeMode: 'cover'
    };

    constructor(props) {
        super(props);
        this.state = {
            width: null,
            height: null
        };
        this.isLazyLoaded = false;
        if (this.props.animated) {
            this.state.fade = new Animated.Value(0);
        }
    }

    setDimensions(width, height) {
        this.setState({
            width,
            height
        }, () => {
            this.isLazyLoaded = true;
        });
    }

    shouldComponentUpdate() {
        if (this.isLazyLoaded === true || this.props.static === true) return false;
        return true;
    }

    handleLoad() {
        Animated.timing(this.state.fade, {
            toValue: 1,
            duration: 200
        }).start();
    }

    render() {

        if (this.props.lazyLoad === true && (!this.state.width || !this.state.height)) {
            return <View style={{height: this.props.height, width: 10}}/>;
        }
        let imgSrc = this.props.source,
            source, imgStyle;
        if (typeof imgSrc === 'string') {
            if (imgSrc.substr(0, 7) === 'assets/') {
                source = ASSETS[imgSrc];                         // NEEDS OBJECT HERE
            } else {
                source = {
                    uri: imgSrc
                };
            }
            if (imgSrc.substr(0, 10) === 'data:image' || imgSrc.indexOf('file:') !== -1) {
                source.isStatic = true;
            }
        } else {
            source = this.props.source;
        }
        let imgWidth = this.state.width || this.props.width,
            imgHeight = this.state.height || this.props.height;
        if (source.isStatic) {
            imgStyle = {
                width: imgWidth,
                height: imgHeight
            };
        }

        if (!this.props.animated) {
            return (
                <Image
                    reziseMode={this.props.resizeMode}
                    height={imgHeight}
                    width={imgWidth}
                    source={source}
                    style={[styles.image, imgStyle, this.props.style]}/>
            )
        }
        let animStyle = {
            opacity: this.state.fade
        };

        return (
            <Animated.View style={[styles.image, imgStyle, animStyle, this.props.style]}>
                <Image
                    reziseMode={this.props.resizeMode}
                    height={imgHeight}
                    width={imgWidth}
                    source={source}
                    onLoad={this.handleLoad.bind(this)}
                    style={[styles.image, imgStyle, this.props.style]}/>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
     //   flex: 1,          // this triggers flex of parent, should be wrapped with an empty view but that might affect the animation view
        borderWidth: 0,
        backgroundColor: 'transparent'
    }
});

module.exports = UiImages;
