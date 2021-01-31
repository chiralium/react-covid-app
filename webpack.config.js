const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    module : {
        rules: [
            { test : /\.(js|jsx)$/, use : "babel-loader" },
            { test : /\.css$/, use : ['style-loader', 'css-loader'] }
        ]
    },

    output: {
        path : path.resolve( __dirname + 'dist' ),
        filename: "bundle.js"
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                template: __dirname + "/index.html",
                inject: "body"
            }
        )
    ],

    devServer: {
        contentBase : path.join( __dirname + './src' )
    },

    mode : "development"
}