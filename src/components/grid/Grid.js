import React, { Component } from 'react';
import {ExtPanel, ExtGrid, ExtContainer, ExtToolbar, ExtButton, ExtTbseparator} from '@sencha/ext-react-classic';
import { small, medium } from '../../ResponsiveFormulas';
import Window from '../window/Window';

class Grid extends Component {

  //-----------------------------------
  // State
  //-----------------------------------

  state = {
    currentRecord: undefined,
    showEvenButtons: true
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
      <ExtPanel
        layout = 'border'
        itemId = {self.props.itemId}
        ref = {el => this.panel = el ? el.cmp : null}
      >
        {typeof currentRecord !== 'undefined' && <Window
          currentRecord = {currentRecord}
          onClose = {self.onCloseWindow}
        />}
        <ExtContainer
          region='center'
          layout='border'
          // height='100%'
        >
          <ExtGrid
            title="The Grid"
            region='center'
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
            {/* <ExtToolbar
              dock='bottom'
            >
              <ExtButton
                text='test'
              />
            </ExtToolbar> */}
          </ExtGrid>
          {/* BUG #9: Ext Container elements do not append children in the correct order using the React way */}
          <ExtToolbar
            region='south'
          >
            <ExtButton
              text={`${showEvenButtons ? 'Hide' : 'Display'} Even Buttons`}
              handler={() => this.setState({ showEvenButtons: !this.state.showEvenButtons })}
            />
            <ExtTbseparator />
            <ExtButton text='ONE (1)' />
            {showEvenButtons && <ExtButton text='TWO (2)' />}
            <ExtButton text='THREE (3)' />
            {showEvenButtons && <ExtButton text='FOUR (4)' />}
            <ExtButton text='FIVE (5)' />
            {showEvenButtons && <ExtButton text='SIX (6)' />}
            <ExtButton text='SEVEN (6)' />
            {showEvenButtons && <ExtButton text='EIGHT (8)' />}
            <ExtButton text='NINE (9)' />
            {showEvenButtons && <ExtButton text='TEN (10)' />}
          </ExtToolbar>
          {/* BUG #9 */}
        </ExtContainer>
        <ExtPanel
          title='Panel with split'
          region = 'north'
          responsiveConfig = {{
            [small]: {
              region: 'north'
            },
            [medium]: {
              region: 'west'
            }
          }}
          split={true}
          collapsible={true}
          width={300}
          height={300}
        ></ExtPanel>
      </ExtPanel>
    )
  }
}
export default Grid;