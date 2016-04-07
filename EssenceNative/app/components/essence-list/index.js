'use strict';
const React = require('react-native');
const helpers = require('../../styles/helpers');
const colors = require('../../styles/colors');

const {
	Component,
  StyleSheet,
  View,
  Dimensions,
  PropTypes,
  ListView
} = React;

class UiList extends Component {


  static propTypes = {
    items: PropTypes.any.isRequired,
    renderRow: PropTypes.func.isRequired,
    renderSection: PropTypes.func.isRequired,
    onEnd: PropTypes.func
  };


  getDataSource() {
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderChanged: (s1, s2) => s1 !== s1
    });
    return ds.cloneWithRowsAndSection(this.props.items);
  }

  renderSection(sectionData, sectionName, idx) {
    let res = this.props.renderSection(sectionName, sectionData.length, this._sectionIdx);
    this._sectionIdx++;
    return res;
  }

  renderRow(item, sectionId, rowId) {
    let result = this.props.renderRow(item, rowId);
    if (typeof result === 'undefined') return <View />;
    return result;
  }

  render() {
    let stickyHeaders = [];
    Object.keys(this.props.items).forEach((name, idx) => {
      stickHeaders.push(idx);  //
    });
    this._sectionIdx = 0;
    return (
      <ListView
        dataSource={this.getDataSource()}
        initialListSize={20}
        scrollRenderAheadDistance={20}
        onEndReached={this.props.onEnd}
        pageSize={20}
        renderRow={this.render.bind(this)}
        renderSectionHeader={this.renderSection.bind(this)}
        stickyHeaderIndices={[0, 1]} />
    )
  }
};

module.exports = UiList;
