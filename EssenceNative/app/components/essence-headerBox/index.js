'use strict';
const React = require('react-native');
const colors = require('../../constants/colors');

const SIZE = {
    ICON_PADDING: 16,
    HEADER_BOX_HEIGHT: 60

};

const {
    Component,
    StyleSheet,
    View,
    Dimensions,
    PropTypes
    } = React;

const Icon = require('../essence-icon/index');
const Image = require('../essence-image/index');

class UiHeaderBox extends Component {
    static propTypes = {
        onLoad: PropTypes.func,
        onUnload: PropTypes.func,
        onLeftIconPress: PropTypes.func,
        onRightIconPress: PropTypes.func,
        backgroundColor: PropTypes.string, // default bgCoor
        backgroundImage: PropTypes.string,  // default image
        leftIcon: PropTypes.string,
        leftIconColor: PropTypes.string,
        rightIcon: PropTypes.string,
        rightIconColor: PropTypes.string,
        border: PropTypes.bool,
        borderColor: PropTypes.string,
        image: PropTypes.string,
        imageWidth: PropTypes.number,
        imageHeight: PropTypes.number,
        imageResize: PropTypes.string,
        height: PropTypes.number
    };

    static defaultProps = {
        backgroundColor: '#fff',
        leftIconColor: colors['e-text-green-700'],
        rightIconColor: colors['e-text-deep-purple-900'],
        border: true,
        borderColor: colors['e-text-light-green-200'],
        imageWidth: 80,
        imageHeight: 80,
        imageResize: 'stretch',
        height: UiHeaderBox.BOX_HEIGHT
    };

    componentWillMount() {
        this.props.onLoad && this.props.onLoad(this.props.height);
    }

    componentWillUnmount() {
        this.props.onUnload && this.props.onUnload();
    }

    renderBackgroundImage() {
        if(!this.props.backgroundImage) return;
        const { width } = Dimensions.get('window');
        return (
            <Image style={styles.backgroundImage} resizeMode="stretch" height={this.props.height-3} width={width} source={this.props.backgroundImage}/>
        )
    }

    renderLeftIcon() {
        if(!this.props.leftIcon) return;
        return (
            <View style={styles.leftIcon}>
                <Icon
                    onPress={this.props.onLeftIconPress}
                    name={this.props.leftIcon}
                    color={this.props.leftIconColor}
                    size='medium' />
            </View>
        )
    }
    renderRightIcon() {
        if(!this.props.rightIcon) return;
        return (
            <View style={styles.rightIcon}
                onPress={this.props.onRightIconPress}
                name={this.props.rightIcon}
                color={this.props.rightIconColor}
                size="medium" >
            </View>
        )
    }

    renderCenterImage() {
        if(!this.props.image) return;
        return <Image resizeMode={this.props.imageResize} style={styles.centerImage} source={this.props.image} width={this.props.imageWidth} height={this.props.imageHeight} />
    }

    render() {
        const { width } = Dimensions.get('window');
        let borderView,
            contentStyle = {
                width
            };
        if(this.props.border) {
            const localStyle = {
                width: width,
                backgroundColor: this.props.borderColor,
                borderBottomColor: colors['e-text-light-green-400']
            };
            borderView = <View style={[styles.border, localStyle]} />;

        } else {
            contentStyle.bottom = 0;
        }
        let wrapperStyle = {
            backgroundColor: this.props.backgroundColor,
            width: width,
            height: this.props.height
        };
        return (
            <View style={wrapperStyle}>
                {this.renderBackgroundImage()}
                {this.renderCenterImage()}
                {borderView}
                <View style={[styles.contentBox, contentStyle]}>
                    {this.props.children}
                </View>
                {this.renderLeftIcon()}
                {this.renderRightIcon()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    border: {
        height: 2,
        borderBottomWidth: 1,
        position: 'absolute',
        bottom: 0
    },
    backgroundImage: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    centerImage: {
        alignSelf: 'center',
        marginTop: 15
    },
    contentBox: {
        position: 'absolute',
        bottom: 3,
        left: 0,
        right: 0
    },
    leftIcon: {
        position: 'absolute',
        left: SIZE.ICON_PADDING,
        top: SIZE.ICON_PADDING
    },
    rightIcon: {
        position: 'absolute',
        right: 0,
        top: SIZE.ICON_PADDING
    }
});
