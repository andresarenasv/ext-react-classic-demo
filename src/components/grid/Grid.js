import React, { Component } from 'react';
import {ExtGrid} from '@sencha/ext-react-classic';

class Grid extends Component {

  //-----------------------------------
  // State
  //-----------------------------------

  state = {
    currentRecord: undefined,
    showEvenButtons: false
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
    this.store = Ext.create('Ext.data.Store', {data: data });
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

    // BUG #8: Grid Cell Renderer does not display tooltips
    context.tdAttr = 'data-qtip="This should display a tooltip in the grid\'s cell"';

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
  onMaskGrid = (view, rowIndex, colIndex, item, e, record) => {
    const self = this;

    self.panel.mask('Loading ...');
    setTimeout(() => {
      self.panel.unmask();
    }, 2000);
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
    const { currentRecord, showEvenButtons } = self.state;

    console.count(`Render Grid has been called`);
    return (
      <ExtGrid
        title="The Grid"
        store={this.store}
        plugins={'gridfilters'}
        onRowdblclick={self.props.onRowDblClick}
        viewConfig={{
          markDirty: false,
          enableTextSelection: true,
          emptyText: 'No records to display'
        }}
        columns={[
          {
            text: "name",
            dataIndex: "name"
          },
          {
            text: "email",
            dataIndex: "email",
            width: 200,
          },
          {
            xtype: 'actioncolumn',
            menuDisabled: true,
            width: 40,
            iconCls: 'x-fa fa-envelope',
            handler: self.onOpenWindow
          },
          {
            xtype: 'actioncolumn',
            menuDisabled: true,
            width: 40,
            iconCls: 'x-fa fa-check',
            handler: self.onMaskGrid
          },
          {
            text: "% Change",
            dataIndex: "priceChangePct",
            align: "right",
            producesHTML: false,
            renderer: self.renderSign
          }
        ]}
      >
      </ExtGrid>
    );
  }
}
export default Grid;