var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});


module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname + '/build',
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{test: /\.less/, loaders: ['style-loader', 'css-loader?importLoaders=1&modules&localIdentName=[local]---[hash:base64:5]', 'less-loader?sourceMap=true']}
		]
	},
	plugins: [HtmlWebpackPluginConfig]
}