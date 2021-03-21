const devMode = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const path = require('path');

const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const OptmizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin');


const browserConfig = (env) => ({
    mode: devMode ? 'development' : 'production',
    entry: path.join(__dirname, './src/browser/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        port: 8081,
        contentBase: 'public',
    },
    optimization: {
        minimize: devMode ? false : true,
        minimizer: [
            new OptmizeCSSAssetsPlugin({}),
            new TerserPlugin()
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules',
            '@web/images': path.resolve(__dirname, './public/images'),
            '@web/fonts': path.resolve(__dirname, './public/fonts'),
            '@web/videos': path.resolve(__dirname, './public/videos'),
            '@web/shared': path.resolve(__dirname, './src/shared'),
            '@web/assets': path.resolve(__dirname, './src/shared/assets'),
            '@web/components': path.resolve(__dirname, './src/shared/components'),
            '@web/redux': path.resolve(__dirname, './src/shared/redux'),
            '@web/config': path.resolve(__dirname, './src/config'),
        }
    },
    plugins: devMode ? [
        new MiniCssExtractPlugin({
            filename: "app.css"
        }),
        new webpack.ProvidePlugin({
            _map: ['lodash', 'map'],
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.DefinePlugin({
            __isBrowser__: "true"
        })
    ] : [
            new CompressionPlugin(),
            new MiniCssExtractPlugin({
                filename: "app.css"
            }),
            new webpack.ProvidePlugin({
                _map: ['lodash', 'map'],
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),
            new webpack.DefinePlugin({
                __isBrowser__: "true"
            })
        ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ]
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.gif|.jpg*.*$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: 'resources',
                    publicPath: 'resources',
                },
            }]
        }, {
            test: /\.mp4$/,
            use: [{
                loader: 'file-loader?name=videos/[name].[ext]',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: 'resources',
                    publicPath: 'resources',
                },
            }]
        }, {
            test: /\.(js|jsx)$/,
            // exclude: /(node_modules|bower_components)/,
            use: ['babel-loader']
        }]
    }
})

const serverConfig = (env) => ({
    mode: devMode ? 'development' : 'production',
    target: 'node',
    entry: path.join(__dirname, './src/server/index.jsx'),
    externals: [nodeExternals({
        allowlist: [/\.s?(a|c)ss$/, /\.woff|.woff2|.ttf|.eot|.svg|.png|.gif|.jpg*.*$/, /\.mp4$/]
    })],
    output: {
        path: path.resolve(__dirname),
        filename: 'server.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        port: 8081,
        contentBase: 'public',
    },
    optimization: {
        minimize: devMode ? false : true,
        minimizer: [
            new OptmizeCSSAssetsPlugin({}),
            new TerserPlugin()
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules',
            '@web/images': path.resolve(__dirname, './public/images'),
            '@web/fonts': path.resolve(__dirname, './public/fonts'),
            '@web/videos': path.resolve(__dirname, './public/videos'),
            '@web/shared': path.resolve(__dirname, './src/shared'),
            '@web/assets': path.resolve(__dirname, './src/shared/assets'),
            '@web/components': path.resolve(__dirname, './src/shared/components'),
            '@web/redux': path.resolve(__dirname, './src/shared/redux'),
            '@web/config': path.resolve(__dirname, './src/config'),
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            _map: ['lodash', 'map'],
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.DefinePlugin({
            __isBrowser__: "false"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?(a|c)ss$/,
                use: 'null-loader'
            }, {
                test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.gif|.jpg*.*$/,
                use: 'null-loader'
            }, {
                test: /\.mp4$/,
                use: 'null-loader'
            }, {
                test: /\.(js|jsx)$/,
                // exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            }]
    }
})

module.exports = [browserConfig, serverConfig]