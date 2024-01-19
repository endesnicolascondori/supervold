module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};