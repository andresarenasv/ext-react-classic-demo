import React, { Component } from 'react';
import { ExtContainer } from '@sencha/ext-react-classic'
import Main from './view/Main/Main'

// Enable responsiveConfig app-wide. You can remove this if you don't plan to build a responsive UI.
Ext.require('Ext.plugin.Responsive');
export default class App extends Component {

  //-----------------------------------
  // State
  //-----------------------------------

  state = {
  };

  // ---------------------------------
  // Lifecycle Methods
  // ---------------------------------

  /**
   *
   */
  componentDidMount () {
  }

  //-----------------------------------
  // Handlers
  //-----------------------------------


  //-----------------------------------
  // View
  //-----------------------------------

  render() {
    const self = this;

    return (
      <ExtContainer
        layout = 'fit'
        viewport = {true}
      >
        <Main/>
      </ExtContainer>
    )
  }
}