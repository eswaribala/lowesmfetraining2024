const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin')
const LoadablePlugin = require('@loadable/webpack-plugin'); // Loadable plugin
const path = require('path');
const devConfig = {
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3004/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes:{

        headerComponent:'headerComponent@http://localhost:3001/remoteEntry.js',
        bodyComponent:'bodyComponent@http://localhost:3002/remoteEntry.js',
        footerComponent:'footerComponent@http://localhost:3003/remoteEntry.js'

      },

      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),

    new LoadablePlugin({ filename: 'loadable-stats.json' }), // Add this plugin to generate the file
  ],
};

module.exports = merge(commonConfig, devConfig);
