import React, { Component } from 'react';
import { ExtDashboard } from "@sencha/ext-react-classic";

class Dashboard extends Component {

  render() {
    return (
      <ExtDashboard
        title = "The Dashboard"
        maxColumns = {2}
        parts = {{
          test: {
            viewTemplate: {
              layout: 'fit',
              border: true,
              titleCollapse: true,
              iconCls: 'x-fa fa-tasks dark-blue',
              items: [
                {
                  xtype: 'container',
                  items: [{xtype: 'button', text: 'Test'}]
                }
              ]
            }
          }
        }}
        defaultContent = {[
          {
            title: 'Test 1',
            type: 'test',
            columnIndex: 0,
            height: 500
          },
          {
            title: 'Test 2',
            type: 'test',
            columnIndex: 1,
            height: 500,
          },
          {
            title: 'Test 3',
            type: 'test',
            columnIndex: 0,
            height: 500
          },
          {
            title: 'Test 4',
            type: 'test',
            columnIndex: 1,
            height: 500,

          }
        ]}
      >

      </ExtDashboard>
    )
  }
}
export default Dashboard;