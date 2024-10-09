module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,

        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      // CSS rules
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },

      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'file-loader?name=images/[name].[ext]',

          }


        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader?name=images/[name].[ext]',

          }


        ]
      },
    ],
  },
};
