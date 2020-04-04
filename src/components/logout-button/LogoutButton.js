import React, {Component} from 'react';
import { ExtForm, ExtTextfield, ExtButton, ExtUxiframe, ExtMenu, ExtMenuitem} from '@sencha/ext-react-classic';
import { small, medium } from '../../ResponsiveFormulas';

class LogoutButton extends Component {

  render() {
    const self = this;
    const params = self.props.params || {};

    return (
      <ExtButton
        iconCls='x-fa fa-user-circle'
      >
        <ExtMenu>
          <ExtMenuitem text='Option 1' />
          <ExtMenuitem text='Option 2' />
          <ExtMenuitem text='Option 3' />
        </ExtMenu>
      </ExtButton>
    )
  }
}
export default LogoutButton;