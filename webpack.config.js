let path = require('path');

module.exports = {
	devtool: false,
	entry: {
		'ninelines-sharing': './src/ninelines-sharing.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		library: 'ninelines',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'babel-preset-env',
						],
					}
				},
			},
		],
	}
};
