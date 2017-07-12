var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist/',
        filename: 'Laypage.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

  
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, 
            {
                test: /\.jsx$/, exclude: /node_modules/, 
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },  
            } ,  
        {
            test: /\.css$/,
            loader: 'style!css!autoprefixer'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url?limit=8192'
        }, {
            test: /\.(html|tpl)$/,
            loader: 'vue-html'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    ]
}