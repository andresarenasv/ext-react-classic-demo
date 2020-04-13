module.exports = {
	stories: ['../src/**/*.stories.[tj]s'],
	webpackFinal: (config) => {
		const disableEsLint = (e) => {
			return e.module.rules.filter(e =>
				e.use && e.use.some(e => e.options && void 0 !== e.options.useEslintrc)).forEach(s => {
				e.module.rules = e.module.rules.filter(e => e !== s)
			}), e
		}

		// Same config, except it is missing the eslint rule
		return disableEsLint(config);
	}
};