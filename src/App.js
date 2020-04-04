import React, { Component } from 'react';
import { ExtContainer } from '@sencha/ext-react-classic';
import Card from './components/card/Card';
import Form from './components/form/Form';
import MyTabPanel from './components/main/TabPanel';

// Enable responsiveConfig app-wide. You can remove this if you don't plan to build a responsive UI.
Ext.require('Ext.plugin.Responsive');
export default class App extends Component {

  //-----------------------------------
  // State
  //-----------------------------------

  state = {
    change: false,
  };

  // ---------------------------------
  // Lifecycle Methods
  // ---------------------------------

  //-----------------------------------
  // Handlers
  //-----------------------------------


  //-----------------------------------
  // View
  //-----------------------------------

  render() {
    const self = this;
    const {change} = self.state;

    return (
      <ExtContainer
        layout = 'fit'
        viewport = {true}
      >
        {/* {change && <Card/>}
        {!change && <Form/>} */}
        <MyTabPanel />
      </ExtContainer>
    )
  }
}