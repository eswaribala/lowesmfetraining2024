const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin')
const packageJson=require('./package.json')
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
        mfe1:'mfe1@http://localhost:3001/remoteEntry.js',
        mfe2:'mfe2@http://localhost:3002/remoteEntry.js'
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

