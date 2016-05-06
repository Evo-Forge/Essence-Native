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

const ListItem = require('../essence-listItem/index'),
  ListHeader = require('../essence-listHeader/index');

class UiList extends Component {

  static propTypes = {
    items: PropTypes.any,
    dataSource: PropTypes.any
  };

  getDataSource() {
    let items = this.props.dataSource();
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s1
    });
    return ds.cloneWithRowsAndSections(items);
  }

  renderRow(item, sectionId, rowId) {
    console.log("RENDER", item, sectionId);
    let result = this.props.renderRow && this.props.renderRow(item, rowId);
    if (typeof result === 'undefined') return <View/>;
    return result;
  }

  render() {
    if(typeof this.props.dataSource !== 'function') {
      return (
        <View style={[styles.listBox, this.props.style]}>
          {this.props.children}
        </View>
      )
    }
    let innerProps = Object.assign({}, this.props);
    delete innerProps.dataSource;
    return (
      <ListView
        {...innerProps}
        style={[styles.listBox, this.props.style]}
        initialListSize={10}
        dataSource={this.getDataSource()}
        onEndReached={this.props.onEnd}
        pageSize={20}
        renderRow={this.renderRow.bind(this)}
        stickyHeaderIndices={[0, 1]}/>
    )
  }
}

const styles = {

};

module.exports = UiList;
