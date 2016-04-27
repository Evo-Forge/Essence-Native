'use strict';

const React = require('react-native');
const colors = ('../../styles/colors');

const SIZE = {

};

const TabMenu = require('./essence-tabMenu/index'),
    Header = require('./essence-header/index'),
    HeaderBox = require('./essence-headerBox/index');

const SPRING_CONFIG = {
    friction: 8
};

const {
    Component,
    StyleSheet,
    Dimensions,
    View,
    PropTypes,
    Animated,
    } = React;

class UiTabContent extends Component {

    static propTypes = {
        items: PropTypes.any,
        active: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY()
        };
    }

    componentWillMount() {
        if (typeof this.props.time !== 'object') return;
        if (this.props.active) {
            this.activeTab = this.props.active;
        } else {
            this.activeTab = this.props.items[0].name;
        }
    }

    getIndex(panelName) {
        for (let i = 0; i < this.props.items.length; i++) {
            if (this.props.items[i].name === panelName) return i;
        }
        return -1;
    }

    getTargetX(idx) {
        let { width } = Dimensions.get('window'),
            targetX = 0 - (width * idx);
        return targetX;
    }

    setActiveTab(name, onAnimatedEnd) {
        let oldIdx = this.getIndex(this.activeTab),
            newIdx = this.getIndex(name);
        if (this.activeTab === name) return;
        this.activeTab = name;
        this.activeIdx = newIdx;
        _.forEach(this.props.items, (item, idx) => {
          this.refs[idx] && this.refs[idx].setActive(idx === this.activeIdx);
        });

        let targetX = this.getTargetX(newIdx);
        Animated.spring(this.state.pan, {
            ...SPRING_CONFIG,
            toValue: {
                x: targetX,
                y: 0
            }
        }).start(onAnimatedEnd);
    }

    renderItem(item, idx) {
        let viewContent = item.content;
        return (
            <UiTabPanel ref={idx} key={idx} index={idx} active={this.activeTab === item.name}>
                {viewContent}
            </UiTabPanel>
        )
    }

    render() {
        const { width } = Dimensions.get('window');
        let localStyle = {
            flexDirection: 'row',
            width: width * this.props.items.length,
            transform: this.state.pan.getTranslateTransform()
        };
        return (
            <Animated.View style={[localStyle, this.props.style]}>
                {_.map(this.props.items, (item, idx) => this.renderItem(item, idx))}
            </Animated.View>
        )
    }
}

class UiTabPanel extends Component {
    static propTypes = {
        index: PropTypes.number,
        active: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            active: this.props.active || false
        }
    }

    getIndex() {
        return this.props.index;
    }

    setActive(active) {
        if(this.__active === active) return;
        this.__active = active;
        this.setState({
            active
        });
    }

    render() {
        let {width, height } = Dimensions.get('window');
        const localStyle = {
            width: width
        };
        if (!this.state.active) {
            let diffHeight = HeaderBox.BOX_HEIGHT - Header.BOX_HEIGHT;
            localStyle.height = height - diffHeight - TabMenu.BOX_HEIGHT;_
        }
        return (
            <View style={[styles.panel, localStyle]}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    panel: {
        overflow: 'hidden'
    }
});

module.exports = UiTabContent;