import React from 'react';
import {
	ExtButton,
	ExtForm,
	ExtTbfill,
	ExtTextfield,
	ExtToolbar,
	ExtWindow
} from '@sencha/ext-react-classic';
import PropTypes from 'prop-types';

const Window = props => {

	//-----------------------------------
	// Variables
	//-----------------------------------

	let currentRecord = props.currentRecord || {};

	//-----------------------------------
	// Methods
	//-----------------------------------

	/**
	 *
	 */
	const onSave = () => {
		props.onClose();
	};

	//-----------------------------------
	// View
	//-----------------------------------

	console.count(`Render Window has been called`);

	return (
		<ExtWindow
			title = 'Current record'
			modal = {true}
			draggable = {true}
			resizable = {false}
			maximizable = {false}
			scrollable = 'y'
			layout = {{
				type: 'vbox',
				align: 'stretch'
			}}
			height = {300}
			width = {350}
			autoShow = {true}
			onBeforedestroy = {props.onClose}
			// Window listeners test
			onShow = {() => {console.log('onShow')}}
			show = {() => {console.log('show')}}
			onshow = {() => {console.log('onshow')}}
			onBoxready = {() => {console.log('onBoxready')}}
			onboxready = {() => {console.log('onboxready')}}
			boxready = {() => {console.log('boxready')}}
			onBoxReady = {() => {console.log('onBoxReady')}}
			afterrender = {() => {console.log('afterrender')}}
			onAfterRender = {() => {console.log('onAfterRender')}}
			onAfterrender = {() => {console.log('onAfterrender')}}
			listeners = {{
				show: () => {console.log('listeners-show')},
				boxready: () => {console.log('listeners-boxready')},
				afterrender: () => {console.log('listeners-afterrender')}
			}}
		>
			<ExtForm
				trackResetOnLoad = {true}
				flex = {1}
				layout = 'anchor'
				bodyPadding = '6'
				defaults = {{
					anchor: '100%'
				}}
			>
				<ExtTextfield
					fieldLabel = 'Name'
					name = 'name'
					value = {currentRecord.name}
				/>
				<ExtTextfield
					fieldLabel = 'Email'
					name = 'email'
					value = {currentRecord.email}
				/>
				<ExtTextfield
					fieldLabel = '% Change'
					name = 'priceChangePct'
					value = {currentRecord.priceChangePct}
				/>
			</ExtForm>
			<ExtToolbar
				ui = 'footer'
			>
				<ExtTbfill/>
				<ExtButton
					text = 'Save'
					handler = {onSave}
				/>
			</ExtToolbar>
		</ExtWindow>
	)
};

// -------------------------------------
// props type validations
// -------------------------------------

Window.propTypes = {
	currentRecord: PropTypes.object,
	onClose: PropTypes.func.isRequired,
};

// -------------------------------------
// Export
// -------------------------------------

export default Window;