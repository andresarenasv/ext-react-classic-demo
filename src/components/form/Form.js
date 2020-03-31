import React, {Component} from 'react';
import { ExtForm, ExtTextfield, ExtButton, ExtUxiframe} from '@sencha/ext-react-classic';
import { small, medium } from '../../ResponsiveFormulas';

class Form extends Component {

  render() {
    const self = this;
    const params = self.props.params || {};

    return (
      <ExtForm
        title = "The Form"
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
        <ExtTextfield
          fieldLabel = '% Change'
          name = 'priceChangePct'
          value = {params.priceChangePct}
        />
        <ExtButton
          text={'close'}
          handler={self.props.onClose}
        />
        <ExtUxiframe/>
      </ExtForm>
    )
  }
}
export default Form;