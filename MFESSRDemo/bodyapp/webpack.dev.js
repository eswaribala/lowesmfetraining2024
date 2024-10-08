const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin')
const packageJson=require('./package.json')
const devConfig = {
  mode: 'development',
  devServer: {
    port: 3002,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name:'bodyComponent',
      filename:'remoteEntry.js',
      exposes:{
        './BodyComponent':'./src/bootstrap.js'
      },
      shared:packageJson.dependencies


    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
