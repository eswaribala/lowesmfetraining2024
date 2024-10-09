const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin')
const packageJson=require('./package.json')
const devConfig = {
  mode: 'development',
  devServer: {
    port: 3003,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name:'footerComponent',
      filename:'remoteEntry.js',
      exposes:{
        './FooterComponent':'./src/FooterComponent.js'
      },
      shared:packageJson.dependencies


    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
