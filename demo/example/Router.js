/**
 * Created by zsoltmakai on 5/12/2016.
 */
'use strict';
/*
 * This is our router container.
 * */
import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

// IMPORT ALL PAGES FOR EXAPMLE
/*import HomePage from './HomePage';
import ActionButton from './ActionButtonPage';

import BottomSheetsPage from './BottomSheetsPage';
import ButtonPage from './ButtonPage';
import CardsPage from './CardsPage';
import ChipPage from './ChipPage';
import ImagePage from './ImagePage';
import InputPage from './InputPage';
import ListPage from './ListPage';

import SliderPage from './SliderPage';
import SnackbarPage from './SnackbarPage';
import SwitchPage from './SwitchPage';
import TestPage from './TestPage';
import TestPage2 from './TestPage2';
import TextAreaPage from './TextAreaPage';
import ToolBarPage from './ToolBarPage';*/
import { Router, Scene } from 'react-native-router-flux';

import DividerPage from './DividerPage';
import PaperPage from './PaperPage';



export default class AppRouter extends Component {



  render() {
    return (
      <Router hideNavBar={true}>
        <Scene key="root">
          <Scene key="DividerPage" component={DividerPage} title="DividerPage" initial={true}/>
          <Scene key="PaperPage" component={PaperPage} title="PaperPage"/>
        </Scene>
      </Router>
    )
  }
}

/*
* <Route name="home" component={HomePage} />
 <Route name="actionButton" component={ActionButton} initial={true}/>
 <Route name="toolbar" component={ToolBarPage}/>
 <Route name="divider" component={DividerPage}/>
 <Route name="bottomSheets" component={BottomSheetsPage}/>
 <Route name="button" component={ButtonPage}/>
 <Route name="cards" component={CardsPage}/>
 <Route name="chip" component={ChipPage}/>
 <Route name="image" component={ImagePage}/>
 <Route name="input" component={InputPage}/>
 <Route name="list" component={ListPage}/>
 <Route name="paper" component={PaperPage}/>
 <Route name="slider" component={SliderPage} />
 <Route name="switch" component={SwitchPage}/>
 <Route name="test" component={TestPage} />
 <Route name="test2" component={TestPage2} />
 <Route name="snackbar" component={SnackbarPage}/>
 <Route name="textarea" component={TextAreaPage}/>
* */
