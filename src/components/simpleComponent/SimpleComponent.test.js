import React from 'react';
import { shallow } from "enzyme";
import SimpleComponent from './SimpleComponent';

describe('Grid Component', () => {
	const defaultProps = {};
	const component = shallow(<SimpleComponent {...defaultProps} />);

	it('should render without crashing', () => {
		expect(component.exists());
	});
});