const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    watch: true,
    entry: {
        main: path.resolve(__dirname, './src/client/index.js'),
    },
    mode: 'development',
    devtool: 'source-map',
    stats: {
        logging: 'verbose',
        colors: true,
    },
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/client/views/index.html'),
            filename: 'index.html', // output file
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules:[
            // JavaScript
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
            },
            // Images
            {
                test:/\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            // Fonts and SVGs
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            // CSS and Sass
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    devServer: {
        open: true,
        watchOptions: {
            poll: true,
            ignored: "/node_modules/"
        }
    }
}