import React, { Component } from 'react';
import { ExtButton } from '@sencha/ext-react-classic';

class LogoutButton extends Component {

	render() {
		return <ExtButton
			text='Test'
			iconCls='fas fa-sun'
		/>;

	}
}
export default LogoutButton;