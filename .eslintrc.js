
module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
		jest: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: ['react'],
	globals: {
		Ext: "readonly"
	},
	rules: {
		// You can do your customizations here...
		// For example, if you don't want to use the prop-types package,
		// you can turn off that recommended rule with: 'react/prop-types': ['off']
		"quotes": "off",
		"no-unused-vars": "warn",
		"react/prop-types": "warn",
		"no-debugger": "warn",
		"semi": "warn"
	}
};