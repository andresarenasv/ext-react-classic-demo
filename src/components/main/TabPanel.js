import React, { Component } from 'react';
import {ExtPanel, ExtGrid, ExtContainer, ExtToolbar, ExtButton, ExtTbseparator, ExtTabpanel, ExtTabbar, ExtTbfill} from '@sencha/ext-react-classic';
import Grid from '../grid/Grid';
import Form from '../form/Form';
import LogoutButton from '../logout-button/LogoutButton';

class MyTabPanel extends Component {

  //-----------------------------------
  // State
  //-----------------------------------

  state = {
  };

  //-----------------------------------
  // View
  //-----------------------------------

  render() {
    const self = this;
    const { currentRecord, showEvenButtons } = self.state;

    return (
      <ExtTabpanel
        itemId = {self.props.itemId}
        ref = {el => this.panel = el ? el.cmp : null}

        // -------------------
        // ISSUE #14-1: this config does not work. The tab has to be set programmatically
        activeTab={0}
        // -------------------
        
        // -------------------
        // ISSUE #14-2: this doesn't work. 
        tabBar={
          <ExtTabbar>
            <ExtToolbar
              padding={0}
              flex={1}
            >
              <ExtTbfill />
              <LogoutButton />
            </ExtToolbar>
          </ExtTabbar>
        }

        // ISSUE #14-2: this does work. 
        // tabBar={{
        //   items: {
        //     xtype: 'toolbar',
        //     padding: 0,
        //     flex: 1,
        //     items: [
        //       '->',
        //       {
        //       	xtype: 'button',
        //       	text: 'HEY'
        //       }
        //     ]
        //   }
        // }}
        // -------------------

        // ISSUE #14-4: returning false doesn't prevent the tab change from happening.
        onBeforetabchange={() => {
          return false;
        }}
      >
        <Grid 
          tabConfig={{
            title: 'My Grid'
          }}
        />
        <Form
          tabConfig={{
            title: 'My Form'
          }}
        />
        <ExtPanel
          tabConfig={{
            title: `A Logout Here!`
          }}
          padding='20'
        >
          <LogoutButton />
          <ExtButton
            text='Tooltip Test #3'
            disabled={true}
            tooltip='I want to display a tooltip to help our users'
            margin='0 0 0 20'
            // # 14-3: this button is disabled and the tooltip appears.
						style= {{
							pointerEvents: 'all'
						}}
          />
        </ExtPanel>
        <ExtPanel
          tabConfig={{
            title: `Tooltip Test #1`,
            tooltip: 'It works!'
          }}
          padding='20'
        />
        <ExtPanel
          tabConfig={{
            title: `Tooltip Test #2`,
            tooltip: `This doesn't work :(`,
            // -------------------
            // # 14-3: not displaying tooltips for disabled tabs.
						style: {
							pointerEvents: 'all'
						}
            // -------------------
          }}
          disabled={true}
        />
      </ExtTabpanel>
    )
  }
}
export default MyTabPanel;