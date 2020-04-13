import '@sencha/ext-classic-enterprise-engine';
import '@sencha/ext-classic-enterprise-triton';

import React from 'react';
import Grid from './Grid';
import { shallow } from "enzyme";

describe('Grid Component', () => {
	const defaultProps = {};
	const component = shallow(<Grid {...defaultProps} />);

	it('should render without crashing', () => {
		expect(component.exists());
	});
});