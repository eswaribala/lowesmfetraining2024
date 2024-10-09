const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin')
const packageJson=require('./package.json')
const devConfig = {
  mode: 'development',
  devServer: {
    port: 3001,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  output: {
    publicPath: 'http://localhost:3001/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name:'mfe1',
      filename:'remoteEntry.js',
      exposes:{
        './App':'./src/App.js'
      },
      shared:packageJson.dependencies,
      shared: {
        react: {
          singleton: true,
          eager: true, // React can be loaded eagerly if necessary, or change to false if lazy loading is acceptable
          requiredVersion: '^18.3.1', // Ensure this matches your React version
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: '^18.3.1',
        }
      }

    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
