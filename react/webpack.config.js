/**
 * Created by cuitianhao on 16/4/16.
 */
var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './src/js/entry.js'
    ],
    output: {
        path: path.resolve(__dirname, 'static'),
        publicPath: '/static/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: [ 'react', 'es2015' ]
                }
            }
        ]
    },
    plugins: [
        // Webpack 1.0
        new webpack.optimize.OccurenceOrderPlugin(),
        // Webpack 2.0 fixed this mispelling
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()

    ]
}