"use strict";
const React = require('react-native'),
  { StyleSheet } = React;

const styles = {},
  cached = {};

styles['e-btn'] = {
  marginTop: 6,
  marginBottom: 4,
  borderRadius: 2,
  borderWidth: 0,
  padding: 10,
  fontSize: 14,
  fontFamily: 'Helvetica',
  alignSelf: 'stretch',
  textAlign: 'center'

};
styles['e-btn-fab-mini'] = {
  height: 40,
  width: 40,
  paddingTop: 8,
  paddingBottom: 8
};
styles['flat'] = {
  backgroundColor: "transparent",
  boderWidth: 0,
  width: 88,
  fontWight: 500,
  paddingTop: 0,
  paddingBottom: 8
};
styles['flat-active'] = {
 backgroundColor: "#cccccc"
};
styles['e-btn-defautl'] = {
  backgroundColor: "#9e9e9e",
  color: "#000"
};
styles["e-btn-default-active"] = {
  backgroundColor: "#616161"
};
styles["e-btn-primary"] = {
  backgroundColor: "#2196f3",
  color: "#2196f3"
};
styles["e-btn-primary-active"] = {
  backgroundColor: "#1976d2",
};
styles["e-btn-succes"] = {
  backgroundColor: "#4caf50",
  color: "#4caf50"
};
styles["e-btn-succes-active"] = {
  backgroundColor: "#388e3c"
};
styles["e-btn-info"] = {
  backgroundColor: "#03a9f4",
  color: "#03a9f4"
};
styles["e-btn-info-active"] = {
  backgroundColor: "#0288d1"
};
styles["e-btn-warning"] = {
  backgroundColor: "#ff9800",
  color: "#ff9800"
};
styles["e-btn-warning-active"] = {
  backgroundColor: "#f57c00",
};
styles["e-btn-danger"] = {
  backgroundColor: "#f44336",
  color: "#f44336"
};
styles["e-btn-danger-active"] = {
  backgroundColor: "#d32f2f",
};





Object.keys(styles).forEach((name) => {
  cached[name] = StyleSheet.create(styles[name]);
});

module.exports = {
  styles,
  cache: cachedStyles
};
