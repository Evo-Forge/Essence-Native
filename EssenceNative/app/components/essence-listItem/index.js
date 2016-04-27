'use strict';

const React = require('react-native');
const helpers = require('../../constants/helpers');
const colors = require('../../constants/colors');

const {
    Component,
    StyleSheet,
    View,
    Dimensions,
    PropTypes,
    TouchableHighlight
    } =  React;

const CONTENT_PADDING = 20;
class ListItem extends Component {

    static BOX_HEIGHT = 80;

    static propTypes = {
        title: PropTypes.string,
        titleStyle: PropTypes.any,
        content: PropTypes.any,
        contentStyle: PropTypes.any,
        backgroundColor: PropTypes.string,
        iconColor: PropTypes.string,
        leftIcon: PropTypes.string,
        rightIcon: PropTypes.string,
        first: PropTypes.bool, // first item on list
        renderTitle: PropTypes.func,
        renderContent: PropTypes.func,
        onPress: PropTypes.func
    };

    static defaultProps = {
        backgroundColor: colors['e-text-amber-A200'],
        iconColor: colors['e-text-blue-300'],
        first: false
    };

    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
    }

    renderLeftIcon() {
        if(!this.props.leftIcon) return;
        return (
            <View style={styles.leftIcon}>
                <View>

                </View>
            </View>
        )
    }

    renderRightIcon() {
        if(!this.props.rightIcon) return;
        return (
            <View style={styles.rightIcon}>
                <View>

                </View>
            </View>
        )
    }

    render() {
        const width = Dimensions.get('window').width;
        let bgColor = this.props.backgroundColor;
        if (this.state.isActive) {
            bgColor = colors['e-text-cyan-700'];
        }
        const localStyle = {
            width,
            backgroundColor: bgColor
        };
        if (this.props.first) {
            lolcalStyle.borderTopWidth = 1;
            localStyle.borderTopColor = colors['e-text-deep-orange-700'];
        }
        localStyle.height = ListItem.BOX_HEIGHT;
        let subContentView,
            subTitleView;
        if(this.props.renderContent) {
            subContentView = this.props.renderContent(style.contentText);
        } else if(this.props.content) {
            subContentView = <Text style={[styles.contentText, this.props.contentStyle]}>{this.props.content}</Text>
        }
        if(this.props.renderTitle) {
            subTitleView = this.props.renderTitle(styles.titleText);
        } else {
            subTitleView = <Text style={[styles.titleText, this.props.titleStyle]}>{this.props.title}</Text>
        }
        let mainView = (
            <View style={[styles.wrapper, localStyle]}>
                {this.renderLeftIcon()}
                <View style={styles.middle}>
                    <View style={styles.titleView}>
                        {subTitleView}
                    </View>
                    <View style={styles.contentView}>
                        {subContentView}
                    </View>
                </View>
                {this.renderRightIcon()}
            </View>
        );
        if (!this.props.onPress) return mainView;
        return (
            <TouchableHighlight
                activeOpacity={0.95}
                underlayColor={this.props.backgroundColor}
                onPressIn={(e) => {
                    this.setState({ isActive: true});
                    e.stopPropagation();
                }}
                onPressOut={(e) => {
                    this.setState({ isActive: false});
                    e.stopPropagation();
                }}
                onPress={this.props.onPress}>
                {mainView}
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: CONTENT_PADDING / 1.5,
        paddingHorizontal: CONTENT_PADDING
    },
    middle: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'column',
        alignSelf: 'center'
    },
    titleView: {
        alignSelf: 'flex-start'
    },
    titleText: {
        fontSize: 14,
        color: colors['e-text-deep-purple-A100'],
        alignSelf: 'center',
        textAlign: 'left'
    },
    rightBox: {
        flex: 0,
        alignItems: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
        paddingRight: 2
    },
    rightContent: {
        alignSelf: 'flex-end'
    },
   contentView: {
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center'
   },
   contentText: {
       marginTop: 1,
       fontSize: 14,
       color: colors['e-text-green-A100'],
       alignSelf: 'center',
       textAlign: 'left'
   },
    leftIcon: {
        flex: 0,
        paddingVertical: CONTENT_PADDING / 2,
        paddingRight: CONTENT_PADDING
    },
    rightIcon: {
        flex: 0,
        padding: CONTENT_PADDING  / 2
    }
});

module.exports = ListItem;