const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry : './src/index.js',
    module : {
        rules: [
            { test : /\.(js|jsx)$/, use : "babel-loader" },
            { test : /\.css$/, use : ['style-loader', 'css-loader'] }
        ]
    },

    output: {
        path : path.resolve( __dirname + '/dist' ),
        filename: "bundle.js"
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                template: __dirname + "/index.html",
                inject: "body"
            }
        ),
        new webpack.DefinePlugin({
            'process.env' : {
                'API_URL' : JSON.stringify('https://api.covid19api.com/'),
                'AUTH_KEY' : JSON.stringify("5cf9dfd5-3449-485e-b5ae-70a60e997864")
            }
        }),
    ],

    devServer: {
        contentBase : path.join( __dirname + './src' )
    },

    mode : "development"
}