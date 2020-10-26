"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var path_1 = require("path");
var clean_webpack_plugin_1 = require("clean-webpack-plugin");
var tsconfig_paths_webpack_plugin_1 = require("tsconfig-paths-webpack-plugin");
//#region Plugins
var tsLoaderConfig = new tsconfig_paths_webpack_plugin_1["default"]({
    configFile: path_1.resolve('./tsconfig.webpack.json'),
    logInfoToStdOut: true
});
//#endregion Plugins
var firstTest = {
    entry: {
        base: path_1.resolve('index.ts')
    },
    output: { path: path_1.resolve('./webpack'), filename: 'regex101.js' },
    devtool: 'inline-source-map',
    target: 'web',
    module: { rules: [
            {
                test: /\.css$/i,
                loaders: ['style-loader', 'css-loader'],
                exclude: /node_modules|src\/(?!injects)/
            },
            {
                test: /injects.*\.ts$/,
                use: [{ loader: 'ts-loader', options: { transpileOnly: true } }]
            },
        ] },
    plugins: [
        new clean_webpack_plugin_1.CleanWebpackPlugin({ verbose: true }),
    ],
    resolve: { plugins: [
            tsLoaderConfig,
        ] },
    optimization: { minimize: false }
};
exports["default"] = (function (env, args) {
    // Do this programmatically after this is up and running 
    // const { entry, output } = firstTest
    return __assign({}, firstTest);
});
