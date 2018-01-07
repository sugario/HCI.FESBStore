const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


const CONFIG = {
    target: 'web',
    
    srcDir: 'src',
    targetDir: 'public',
    bundleName: 'index',
    title: 'FESBStore',
    template: 'index.html',

    styles: {
        path: 'css',
        dev: ['style-loader', 'css-loader'],
        prod: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
        }) 
    },

    scripts: { path: 'js' },

    copy: [
        { from: 'data.json' },
        { from: 'img', to: 'img' }
    ]
};

const isProduction = process.env.NODE_ENV === 'production';

const getStylesConfig = () => isProduction ? CONFIG.styles.prod :  CONFIG.styles.dev

const getOutput = () => {
    let output = {
        path: path.resolve(__dirname, CONFIG.targetDir)
    }
    
    if (isProduction) return ({
        ...output, 
        filename: path.join(CONFIG.scripts.path, '[name].[chunkhash:8].js')
    })

    return ({
        ...output,
        filename: '[name].js'
    })
}

const getPlugins = () => {
    // Common plugins
    let plugins = [
        // Automatically generates index.html with all scripts included.
        new HtmlWebpackPlugin({ 
            title: CONFIG.title,
            template: CONFIG.template})
    ]

    // Production plugins
    if (isProduction) return [...plugins,
        new ExtractTextPlugin({
            filename: path.join(CONFIG.styles.path, `${CONFIG.bundleName}.[contenthash:8].css`)
        }),        
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: { discardComments: { removeAll: true } }
        }),            
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'runtime'],
            minChunks: Infinity
        }),
        new CopyWebpackPlugin(CONFIG.copy),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }), 
        new webpack.optimize.UglifyJsPlugin(),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8})
    ]

    // Development plugins          
    return [...plugins,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}


module.exports = {
    target: CONFIG.target,

    context: path.resolve(__dirname, CONFIG.srcDir),
    
    entry: {
        vendor: ['react', 'react-dom'],        
        [CONFIG.bundleName]: CONFIG.bundleName + '.js'
    },

    output: getOutput(),

    resolve: { modules: [CONFIG.srcDir, 'node_modules'] },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env', 'react'],
                    plugins: [
                        'transform-object-rest-spread', 
                        'transform-class-properties',
                        'transform-runtime'
                        // Enables dynamic loading of modules;
                        // useful for progressive web apps. 
                        // 'syntax-dynamic-import' 
                    ]
                },

            },

            {   
                test: /\.(css)$/,                
                use: getStylesConfig()
            }                
        ]
    },

    plugins: getPlugins(),

    devtool: isProduction ? false : 'source-map',

    target: 'web',
    
    devServer: {
        // We're using Hot Module Replacement
        hot: true,
        contentBase: CONFIG.srcDir,
        compress: true,
        stats: 'minimal',
        port: 3000
    }    
};