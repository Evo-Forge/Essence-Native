"use strict";

var Page = require('Dimensions').get('window');

var styles = {

  "e-input": {
    height: 26,
    borderWidth: 0.5,
    borderColor: '#000000',
    padding: 4,
    margin: 10,
    flex: 1,
    width: Page.width * 0.9,
    fontSize: 13,
  },

  "e-input-multiline": {
    height: 100,
  },

  "e-divider": {
    marginTop: 25,
    marginBottom: 25,
    backgroundColor: "black",
  },

  "e-progress": {
    backgroundColor: "#139FC2",
  },

  "e-paper": {
    flex: 1,
    width: Page.width * 0.33,
    height: Page.width * 0.33,
    padding: 1,
    margin: 10,
    borderRadius: 4,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  "e-switch": {
    flexDirection: 'row',
    alignItems: 'center',
  },

  "e-slider": {
    flex: 1,
    width: Page.width * 0.9,
    paddingTop: 12,
    alignItems: 'center',
  },

  "e-picker": {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 60,
  },

  "e-nav-menu": {
    flex: 1,
    padding: 10,
    margin: 0,
    height: 100,
  },

  "e-list": {
    flex: 1,
    flexDirection: 'column',
    width: Page.width,
    padding: 0,
    margin: 0,
    marginTop: 8,
    marginBottom: 8,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: 'white',
  },

  "e-list-item": {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8,
    marginTop: 8,
    height: 48,
  },

  "e-list-content": {
    alignItems: 'center',
    alignSelf: 'center',
  },

  "e-list-avatar": {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 16,
  },

  "e-list-text": {
    justifyContent: "center",
    fontSize: 13,
    color: 'black',
  },

  /**
  * Navigation drawer
  */

  "e-nav-drawer": {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  "e-nav-content": {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
  },

  "e-nav-view": {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#EEEEEE',
    width: Page.width,
    height: Page.height,
  },

  "text-before": {
    marginRight: 14,
  },

  "text-after": {
    marginLeft: 14,
  },

  "sharp": {
    borderRadius: 0,
  },

  "circle": {
    borderRadius: Page.width * 0.5,
  },

  "thinnest": {
    height: 1,
  },
  "thin": {
    height: 2,
  },
  "regular": {
    height: 3,
  },
  "thick": {
    height: 5,
  },
  "thickest": {
    height: 7,
  },
  "short": {
    width: Page.width * 0.33,
  },
  "medium": {
    width: Page.width * 0.66,
  },
  "long": {
    width: Page.width,
  },
  "e-shadow-1": {
    shadowColor: '#000000',
    shadowOffset:  {height: 1, width: 0},
    shadowOpacity: 0.6,
    shadowRadius: 1,
  },
  "e-shadow-2": {
    shadowColor: '#000000',
    shadowOffset:  {height: 2, width: 0},
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  "e-shadow-3": {
    shadowColor: '#000000',
    shadowOffset:  {height: 3, width: 0},
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },
  "e-padding-top-15": {
    paddingTop: 15,
  },
  "e-padding-top-25": {
    paddingTop: 25,
  },
  "e-padding-top-50": {
    paddingTop: 50,
  },
  "e-padding-top-75": {
    paddingTop: 75,
  },
  "e-padding-top-100": {
    paddingTop: 100,
  },
  "e-padding-top-150": {
    paddingTop: 150,
  },
  "e-padding-top-200": {
    paddingTop: 200,
  },
  "e-padding-top-250": {
    paddingTop: 250,
  },
  "e-padding-bottom-15": {
    paddingBottom: 15,
  },
  "e-padding-bottom-25": {
    paddingBottom: 25,
  },
  "e-padding-bottom-50": {
    paddingBottom: 50,
  },
  "e-padding-bottom-75": {
    paddingBottom: 75,
  },
  "e-padding-bottom-100": {
    paddingBottom: 100,
  },
  "e-padding-bottom-150": {
    paddingBottom: 150,
  },
  "e-padding-bottom-200": {
    paddingBottom: 200,
  },
  "e-padding-bottom-250": {
    paddingBottom: 250,
  },
  "e-no-padding": {
    padding: 0,
  },
  "e-no-margin": {
    margin: 0,
  },
  "e-margin-top-15": {
    marginTop: 15,
  },
  "e-margin-top-25": {
    marginTop: 25,
  },
  "e-margin-top-50": {
    marginTop: 50,
  },
  "e-margin-top-75": {
    marginTop: 75,
  },
  "e-margin-top-100": {
    marginTop: 100,
  },
  "e-margin-top-150": {
    marginTop: 150,
  },
  "e-margin-top-200": {
    marginTop: 200,
  },
  "e-margin-top-250": {
    marginTop: 250,
  },
  "e-margin-bottom-15": {
    marginBottom: 15,
  },
  "e-margin-bottom-25": {
    marginBottom: 25,
  },
  "e-margin-bottom-50": {
    marginBottom: 50,
  },
  "e-margin-bottom-75": {
    marginBottom: 75,
  },
  "e-margin-bottom-100": {
    marginBottom: 100,
  },
  "e-margin-bottom-150": {
    marginBottom: 150,
  },
  "e-margin-bottom-200": {
    marginBottom: 200,
  },
  "e-margin-bottom-250": {
    marginBottom: 250,
  },
  "line-height-11": {
    lineHeight: 1.1,
  },
  "line-height-12": {
    lineHeight: 1.2,
  },
  "line-height-13": {
    lineHeight: 1.3,
  },
  "line-height-14": {
    lineHeight: 1.4,
  },
  "line-height-15": {
    lineHeight: 1.5,
  },
  "e-center": {
    alignItems: "center",
    alignSelf: "center",
  },
  "e-right": {
    flex: 1,
    justifyContent: "flex-end",
    right: 0,
  },
  "e-left": {
    flex: 1,
    justifyContent: "flex-start",
    left: 0,
  },
  "code": {
    backgroundColor: "#e8f5e9",
    borderWidth: 1,
    borderColor: "#e1e1e8",
    borderRadius: 4,
  },

  "e-appbar": {
    backgroundColor: "#FAFAFA",
    color: "#000",
    fontSize: 25,
  },
};

module.exports = styles;
