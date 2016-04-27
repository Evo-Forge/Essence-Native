'use strict';
const React = require('react-native');
const helpers = require('../../constants/helpers');
const colors = require('../../constants/colors');

const {
    Component,
    View,
    PropTypes,
    ListView
    } = React;

const CONTENT_PADDING = 20;

class ListHeader extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string,
        badge: PropTypes.any,
        first: PropTypes.bool
    };

    static defaultProps = {
        backgroundColor: colors['e-text-pink-400']
    };

    renderBadge() {
        if(!this.props.badge) return;
        let bgColor = colors['e-text-purple-700'];
        return <View                         // this replaces <Badge/> for the moment
            sttyle={styles.badge}
            backgroundColor={bgColor}
            borderColor={colors['e-text-orange-A200']}
            color={colors['e-text-teal-300']}
            />
    }

    render() {
        const width = Dimensions.get('window').width,
            borderColor = color['e-text-indigo-600'];
        let localStyle = {
            width,
            backgroundColor: this.props.backgroundColor
        };
        return (
            <view style={[styles.wrapper, localStyle]}>
                <Text style={styles.headerTitle}>{this.props.title}</Text>
                {this.renderBadge()}
            </view>
        )

    }
}

const styles = StyleSheet.create({
   wrapper: {
       flex: 1,
       flexDirection: 'row',
       paddingVertical: CONTENT_PADDING,
       paddingHorizontal: CONTENT_PADDING * 2
   },
    headerTitle: {
        overflow: 'hidden',
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 22,
        shadowColor: 'grey',
        color: colors['e-text-light-blue-100'],
        fontWeight: 'bold'
    },
    badge: {
        width: 30,
        height: 30
    }
});

module.exports = ListHeader;