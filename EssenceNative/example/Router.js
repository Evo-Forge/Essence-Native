/**
 * Created by zsoltmakai on 5/12/2016.
 */
'use strict';
/*
 * This is our router container.
 * */
const React = require('react-native');

// IMPORT ALL PAGES FOR EXAPMLE
import ToolBarPage from './ToolBarPage';
import HomePage from './HomePage';
import DividerPage from './DividerPage';
import BottomSheetsPage from './BottomSheetsPage';
import ButtonPage from './ButtonPage';
import CardsPage from './CardsPage';
import ChipPage from './ChipPage';
import ImagePage from './ImagePage';
import InputPage from './InputPage';
import ListPage from './ListPage';
import PaperPage from './PaperPage';
import SwitchPage from './SwitchPage';
import SnackbarPage from './SnackbarPage';
import TextAreaPage from './TextAreaPage';

const {
  Router,
  Route,
  Scene,
  Schema,
  Animations
  } = require('react-native-router-flux');


const {
  Component
  } = React;


export default class AppRouter extends Component {


  render() {
    return (
      <Router hideNavBar={true}>
        <Route name="home" component={HomePage} />
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
        <Route name="switch" component={SwitchPage}/>
        <Route name="snackbar" component={SnackbarPage}/>
        <Route name="textarea" component={TextAreaPage}/>

      </Router>
    )
  }
}

