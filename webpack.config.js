var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractPlugin = require('extract-text-webpack-plugin');
var production = process.env.NODE_ENV === 'production';

var plugins = [
	// new ExtractPlugin('bundle.css'), // <=== where should content be piped
	new webpack.optimize.CommonsChunkPlugin({
		name: 'main', // Move deps to main file
		children: true, // Look for common deps in all children
		minChunks: 2, // How many times a dep must come up before being extracted
	}),
];

if (production) {
	plugins = plugins.concat([

		// Cleanup the builds/ folder before
    // compiling our final assets
    new CleanPlugin('builds'),

		// This plugin looks for similar chunks and files
    // and merges them for better caching by the user
    new webpack.optimize.DedupePlugin(),

    // This plugin optimizes chunks and modules by
    // how much they are used in your app
    new webpack.optimize.OccurenceOrderPlugin(),

    // This plugin prevents Webpack from creating chunks
    // that would be too small to be worth loading separately
    new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 51200, // ~50kb
    }),

    // This plugin minifies all the Javascript code of the final bundle
    new webpack.optimize.UglifyJsPlugin({
      mangle:   true,
      compress: {
      	warnings: false, // Suppress uglification warnings
      },
    }),

    // This plugin defines various variables that we can set to false
    // in production to avoid code related to them from being compiled
    // in our final bundle
    new webpack.DefinePlugin({
      __SERVER__			: !production,
      __DEVELOPMENT__	: !production,
      __DEVTOOLS__		: !production,
      'process.env'		: {
      	BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
	]);
}

module.exports = {
	debug: !production,
	devtool: production ? false : 'eval',
	context: __dirname + "/src",
	entry: './app/app.js',
	output: {
		path: __dirname + '/builds',
		filename: production ? '[name]-[hash].js' : 'bundle.js',
		chunkFilename: '[name]-[chunkhash].js',
		publicPath: 'builds/',
	},
	plugins: plugins,
	module: {
		preLoaders: [
			{
				test: /\.(js|jsx)/,
				loader: 'eslint',
			},
			{
				test: /\.(js|jsx)/,
				loader: 'baggage?[file].html=template&[file].scss',
			}
		],
		loaders: [
			{
				test: /\.(js|jsx)/,
				loader: 'babel',
				include: __dirname + '/src',
			},
			{
				test: /\.scss/,
				// loader: ExtractPlugin.extract('style', 'css!sass'),
				loader: 'style!css!sass',
			},
			{
				test: /\.html/,
				loader: 'html',
			},
			{
				test: /\.(png|gif|jpe?g|svg)$/i,
				loader: 'url?limit=10000',
			}
		],
	}
};