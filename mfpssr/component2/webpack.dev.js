const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin')
const packageJson=require('./package.json')
const path = require("path");
const devConfig = {
  mode: 'development',
  devServer: {
    port: 3002,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2', // For server-side exports
  },
  plugins: [
    new ModuleFederationPlugin({
      name:'component2',
      filename:'remoteEntry.js',
      exposes:{
        './Component2':'./src/Component2.js'
      },
      shared:packageJson.dependencies

    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
