const path = require('path');

module.exports = {
	entry: {
		bundle: './src/index.js'
	} ,
	output: {
		path: path.resolve(__dirname, '../dist'), //Output Directory
		filename: "jquery.form-validator.min.js", //Output file
	},
	devServer: {
		port: 3000,
		open: true,
		historyApiFallback: {
			index: 'examples/form-basic.html',
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/, //Regular expression
				exclude: /(node_modules)/,//excluded node_modules
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]  //Preset used for env setup
					}
				}
			}
		]
	},
};