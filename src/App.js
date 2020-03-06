import React, { Component } from 'react';
import { ExtContainer } from '@sencha/ext-react-classic';
import Card from './components/card/Card';
import Form from './components/form/Form';

// Enable responsiveConfig app-wide. You can remove this if you don't plan to build a responsive UI.
Ext.require('Ext.plugin.Responsive');
export default class App extends Component {

  //-----------------------------------
  // State
  //-----------------------------------

  state = {
    change: true,
  };

  // ---------------------------------
  // Lifecycle Methods
  // ---------------------------------

  /**
   *
   */
  componentDidMount () {
    setTimeout(()=> {
      alert(`state is going to change and it should render the second component but it is not happening, 
      it seems that is rendering a pure web component instead of the parse html`);
      this.setState({change: false});
    }, 5000);
  }

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
        {change && <Card/>}
        {!change && <Form/>}
      </ExtContainer>
    )
  }
}