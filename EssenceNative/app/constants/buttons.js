"use strict";

var Page = require('Dimensions').get('window');

var styles = {
  "e-btn": {
    marginTop: 6,
    marginBottom: 4,
    borderRadius: 2,
    borderWidth: 0,
    padding: 10,
    fontSize: 14,
    fontFamily: 'Helvetica',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  "e-btn-fab-mini": {
    height: 40,
    width: 40,
    paddingTop: 8,
    paddingBottom: 8,
  },
  "flat": {
    backgroundColor: "transparent",
    borderWidth: 0,
    width: 88,
    fontWeight: 500,
    paddingTop: 0,
    paddingBottom: 8,
  },
  "flat-active": {
    backgroundColor: "#cccccc",
  },

  "e-btn-default": {
    backgroundColor: "#9e9e9e",
    color: "#000",
  },

  "e-btn-default-active": {
    backgroundColor: "#616161",
  },
  "e-btn-primary": {
    backgroundColor: "#2196f3",
    color: "#2196f3",
  },

  "e-btn-primary-active": {
    backgroundColor: "#1976d2",
  },
  "e-btn-succes": {
    backgroundColor: "#4caf50",
    color: "#4caf50",
  },
  "e-btn-succes-active": {
    backgroundColor: "#388e3c",
  },
  "e-btn-info": {
    backgroundColor: "#03a9f4",
    color: "#03a9f4",
  },
  "e-btn-info-active": {
    backgroundColor: "#0288d1",
  },
  "e-btn-warning": {
    backgroundColor: "#ff9800",
    color: "#ff9800",
  },
  "e-btn-warning-active": {
    backgroundColor: "#f57c00",
  },
  "e-btn-danger": {
    backgroundColor: "#f44336",
    color: "#f44336",
  },
  "e-btn-danger-active": {
    backgroundColor: "#d32f2f",
  },
};

module.exports = styles;
