import React, {Component} from 'react';
import { ExtForm, ExtTextfield, ExtButton, ExtUxiframe, ExtToolbar } from '@sencha/ext-react-classic';
import { small, medium } from '../../ResponsiveFormulas';
import './Form.scss';

class Form extends Component {

  state = {
    nicknameKey: 1,
    addressKey: 10000
  }

  render() {
    const self = this;
    const params = self.props.params || {};
    const showMoreFields = self.state.showMoreFields;

    return (
      <ExtForm
        tabConfig={self.props.tabConfig}
        responsiveConfig = {{
          [small]: {
            layout : 'hbox'
          },
          [medium]: {
            layout : 'vbox'
          }
        }}
        itemId = {self.props.itemId}
        defaults = {{
          anchor: '100%',
          labelAlign: 'left',
        }}
      >
        <ExtTextfield
          fieldLabel = 'Name'
          name = 'name'
          value = {params.name}
        />
        {/* Bug #15: when showMoreFields is true, this goes to the bottom */}
        <ExtTextfield
          key={self.state.nicknameKey}
          fieldLabel={`Nickname key: ${self.state.nicknameKey}`}
          name='nickname'
        />
        <ExtTextfield
          fieldLabel = 'Email'
          name = 'email'
          value = {params.email}
          onBlur = {() => {console.count('onBlur ExtTextfield - email')}}
          onFocus = {() => {console.count('onFocus ExtTextfield - email')}}
        />
        <ExtTextfield
          fieldLabel = 'Phone Number'
          name = 'phone'
          allowBlank = {false}
          regex = {/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im}
        />
        {/* Bug #15-2: when key changes, this element goes to the bottom goes to the bottom. Note:
         another property like fieldLabel needs to change as well to cause a re-render and see the problem */}
        <ExtTextfield
          key={self.state.addressKey}
          fieldLabel={`Address key: ${self.state.addressKey}`}
          name='address'
        />
        <ExtTextfield
          fieldLabel = '% Change'
          name = 'priceChangePct'
          value = {params.priceChangePct}
        />
        <ExtToolbar>
          <ExtButton
            text={'close'}
            cls='close-button'
            handler={self.props.onClose}
          />
          <ExtButton
            text='Recreate Nickname and Address Fields'
            // BUG #16: not able to use mixins defined outside the scope of the ExtJS theme used
            ui='delete'   // From our custom theme. Works. (ext-react\packages\custom-theme\sass\src\button\Button.scss)
            // ui='my-add'   // From ./Form.scss. The app breaks when trying to use that mixin
            handler={() => {
              self.setState({
                nicknameKey: self.state.nicknameKey + 1,
                addressKey: self.state.addressKey + 1
              });

              console.log('Keys changed');
            }}
          />
        </ExtToolbar>
        <ExtUxiframe/>
      </ExtForm>
    )
  }
}
export default Form;