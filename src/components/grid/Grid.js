import React, { Component } from 'react';
import {ExtPanel, ExtGrid, ExtToolbar, ExtButton} from '@sencha/ext-react-classic';
import Window from '../window/Window';

class Grid extends Component {

  //-----------------------------------
  // State
  //-----------------------------------

  state = {
    currentRecord: undefined
  };

  //-----------------------------------
  // React Life Cycle
  //-----------------------------------

  /**
   *
   */
  constructor() {
    super();
    var data = [
      { name: 'Marc', v: true, email: 'marc@gmail.com',priceChangePct: .25 },
      { name: 'Nick', v: true, email: 'nick@gmail.com',priceChangePct: .35 },
      { name: 'Andy', v: true, email: 'andy@gmail.com',priceChangePct: 1.45 }
    ];
    this.store = { xtype: 'store', data: data }
  }

  /**
   *
   */
  componentDidMount = () => {
    console.log('componentDidMount')
  };

  //-----------------------------------
  // Methods
  //-----------------------------------

  /**
   *
   */
  renderSign = (value, context) => {
    let iValue = parseInt(value);
    let color = 'red';

    console.count(`Method renderSign has been called`);

    if (iValue > 0) { color = 'green'; }
    return `<span style="color:${color};">${value}<i class="fa fa-camera-retro fa-lg"></i></span>`
  };

  /**
   *
   */
  onOpenWindow = (view, rowIndex, colIndex, item, e, record) => {
    this.setState({currentRecord: record.getData()});
  };

  /**
   *
   */
  onCloseWindow = () => {
    this.setState({currentRecord: undefined});
  };

  //-----------------------------------
  // View
  //-----------------------------------

  /**
   *
   */
  render() {
    const self = this;
    const {currentRecord} = self.state;

    console.count(`Render Grid has been called`);
    return (
      <ExtPanel
        layout = 'border'
        itemId = {self.props.itemId}
      >
        {typeof currentRecord !== 'undefined' && <Window
          currentRecord = {currentRecord}
          onClose = {self.onCloseWindow}
        />}
        <ExtGrid
          title = "The Grid"
          region = 'center'
          store = { this.store }
          plugins = {'gridfilters'}
          onRowdblclick = {self.props.onRowDblClick}
          viewConfig = {{
            markDirty: false,
            enableTextSelection: true,
            emptyText: 'No records to display'
          }}
          columns={[
            {text: "name", dataIndex: "name"},
            {text: "email", dataIndex: "email", width: 200},
            //{text: "Email 2", dataIndex: "email", width: 200},
            {
              xtype: 'actioncolumn',
              menuDisabled: true,
              width: 40,
              iconCls: 'x-fa fa-envelope',
              handler: self.onOpenWindow
            },
            {text: "% Change", dataIndex: "priceChangePct", align: "right", producesHTML: false, renderer: self.renderSign}
          ]}
        >
          {/*<ExtToolbar
            dock = 'top'
          >
            <ExtButton
              text = 'test'
            />
          </ExtToolbar>*/}
        </ExtGrid>
        <ExtPanel
          title = 'Panel with split'
          region = 'west'
          split = {true}
          collapsible = {true}
          width = {300}
        ></ExtPanel>
      </ExtPanel>
    )
  }
}
export default Grid;