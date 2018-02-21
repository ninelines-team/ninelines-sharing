import babel from 'rollup-plugin-babel';

export default [
	{
		plugins: [
			babel({
				exclude: 'node_modules/**',
			}),
		],
		input: 'src/ninelines-sharing.js',
		output: {
			file: 'dist/ninelines-sharing.es.js',
			format: 'es',
		},
	},
	{
		plugins: [
			babel({
				exclude: 'node_modules/**',
			}),
		],
		input: 'src/ninelines-sharing.js',
		output: {
			file: 'dist/ninelines-sharing.umd.js',
			format: 'umd',
			name: 'Share',
		},
	},
];
