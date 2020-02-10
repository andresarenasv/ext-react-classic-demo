import React, { Component } from 'react';
import {
	ExtPanel,
} from '@sencha/ext-react-classic';
import PropTypes from 'prop-types';

class Main extends Component {

	//-----------------------------------
	// State
	//-----------------------------------

	state = {
	};

	//-----------------------------------
	// React Life Cycle
	//-----------------------------------

	/**
	 *
	 */
	componentDidMount () {
	}

	//-----------------------------------
	// Methods
	//-----------------------------------


	//-----------------------------------
	// View
	//-----------------------------------

	/**
	 *
	 */
	render() {
		const self = this;

		return (
			<ExtPanel
				title = 'Test'
			>

			</ExtPanel>
		);
	}
}

// -------------------------------------
// props type validations
// -------------------------------------

Main.propTypes = {

};

// -------------------------------------
// Export
// -------------------------------------

export default Main;