const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin')
const LoadablePlugin = require("@loadable/webpack-plugin");

const devConfig = {
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes:{
        headerComponent:'headerComponent@http://localhost:3001/remoteEntry.js',
        bodyComponent:'bodyComponent@http://localhost:3002/remoteEntry.js',
        footerComponent:'footerComponent@http://localhost:3003/remoteEntry.js'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),

    new LoadablePlugin({ filename: 'loadable-stats.json' }), // Add this plugin to generate the file

  ],

};

module.exports = merge(commonConfig, devConfig);
