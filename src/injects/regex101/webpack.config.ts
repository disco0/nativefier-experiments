import { resolve } from 'path';

import type *  as Webpack from 'webpack';
import type { Configuration as WebpackConfig } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import TsLoaderPaths from 'tsconfig-paths-webpack-plugin';

/**
 * TODO: Finish stylus config 
 * [Docs](https://github.com/slightlyfaulty/stylus-native-loader)
 */

//#region Plugins

const tsLoaderConfig = new TsLoaderPaths({
    configFile:      resolve('./tsconfig.webpack.json'),
    logInfoToStdOut: true
});

//#endregion Plugins

const firstTest = 
{
    entry: 
    {
        base: resolve('index.ts')
    },
    
    output: { path: resolve('./webpack'), filename: 'regex101.js' },
    devtool: 'inline-source-map',
    target: 'web',
    module: { rules: [
        {
            test: /\.css$/i,
            loaders: ['style-loader', 'css-loader'],
            exclude: /node_modules|src\/(?!injects)/,
        },
        {  
            test: /injects.*\.ts$/,
            use:  [ { loader: 'ts-loader', options: { transpileOnly: true } } ],
        },
    ]},
    plugins:
    [
        new CleanWebpackPlugin({verbose: true}),
    ],
    resolve: { plugins: [
        tsLoaderConfig,
    ]},
    optimization: { minimize: false }
} as WebpackConfig;

export default ((env, args) => {
    // Do this programmatically after this is up and running 
    // const { entry, output } = firstTest
    return {
        ...firstTest
    }
}) as Webpack.ConfigurationFactory