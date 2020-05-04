HTMLCanvasElement.prototype.getContext = () => { 
  // return whatever getContext has to return
};

import '@sencha/ext-classic-enterprise-engine';
import '@sencha/ext-classic-enterprise-triton';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";



configure({ adapter: new Adapter() });

// Define global variable "Ext" for tests
/* TEST JEST
global.Ext = {
	apply: () => ({}),
	define: (className, config) => config,
	create: config => {
		if (config.extend === 'Ext.data.Store') {
			return {
				filterBy: () => {},
				clearFilter: () => {},
				load: () => {}
			};
		} else {
			return {};
		}
	},
	isDate: () => true,
	isNumber: () => true,
	getStore: () => {
		return {
			addListener: () => {},
		};
	},
	require: () => true,
	isString: () => true,
	isArray: (value) => toString.call(value) === '[object Array]',
	isEmpty: (value, allowEmptyString) => value == null || (!allowEmptyString ? value === '' : false) || Ext.isArray(value) && value.length === 0,
	Date: {
		add: () => new Date(),
		subtract: () => new Date(),
		diff: () => 1,
		format: () => '1986-10-24',
		parse: () => new Date(),
		between: () => false,
		isEqual: () => false
	},
	String: {
		capitalize: (string) => {
			if (string) string = string.charAt(0).toUpperCase() + string.substr(1);
			return string || '';
		},
		leftPad: () => ''
	},
	Deferred: () => ({
		promise: {
			then: () => ({
				always: () => ({
					otherwise: () => { }
				}),
				otherwise: () => {}
			}),
			always: () => ({
				otherwise: () => {}
			}),
			otherwise: () => {}
		},
		resolve: () => {},
		reject: () => {}
	}),
	urlEncode: () => {},
	Ajax: {
		request: () => {}
	}
};
 */