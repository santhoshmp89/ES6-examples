const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports={
	entry: {
		app: './src/app.js',
		block: './src/block-level.js',
		arrow: './src/arrow.js',
		restspread : './src/restspread.js',
		objectliteralext : './src/objectliteralext.js',
		destructuring : './src/destructuring.js',
		classesFirst: './src/classesFirst.js'
	},
	output: {
		filename: './js/[name]-bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer : {
		contentBase : path.join(__dirname, "src"),
		open: true
	},
	module: {
		rules: [
		    { 
		    	test: /\.js$/, 
		    	exclude: /node_modules/, 
		    	use: {
			        loader: 'babel-loader',
			        options: {
			          presets: ['env']
			        }
			    }
		    },
		    {
	            test: /\.css$/,
	            use: ExtractTextPlugin.extract({
	            	 fallback: "style-loader",
			         use: "css-loader",
			         publicPath: "/dist"
	            })
	        },
		    {
	            test: /\.scss$/,
	            use: ExtractTextPlugin.extract({
	                use: [{
	                    loader: "css-loader"
	                }, {
	                    loader: "sass-loader"
	                }],
	                
	                fallback: "style-loader"
	            })
	        }

		]
	},
	plugins: [
	    new HtmlWebpackPlugin({
	      title: 'ES6 Demo Test',
	      template: 'src/index.html',
	      filename: 'index.html',
	      chunks: ['app']
	    }),
	    new HtmlWebpackPlugin({
	      title: 'let and const',
	      template: 'src/block.html',
	      filename: 'block.html',
	      chunks: ['block']
	    }),
	    new HtmlWebpackPlugin({
	      title: 'Arrow Functions',
	      template: 'src/arrow.html',
	      filename: 'arrow.html',
	      chunks: ['arrow']
	    }),
	    new HtmlWebpackPlugin({
	      title: 'Rest Parameters and Spread Operators',
	      template: 'src/restandspread.html',
	      filename: 'restandspread.html',
	      chunks: ['restspread']
	    }),
	    new HtmlWebpackPlugin({
	      title: 'Object Literal Extension',
	      template: 'src/objectliteralext.html',
	      filename: 'objectliteralext.html',
	      chunks: ['objectliteralext']
	    }),
	    new HtmlWebpackPlugin({
	      title: 'Destructuring',
	      template: 'src/destructuring.html',
	      filename: 'destructuring.html',
	      chunks: ['destructuring']
	    }),
	    new HtmlWebpackPlugin({
	      title: 'Classes',
	      template: 'src/classesFirst.html',
	      filename: 'classesFirst.html',
	      chunks: ['classesFirst']
	    }),
	    new ExtractTextPlugin({
		    filename: "./css/[name].css"
		})
	  ]
};