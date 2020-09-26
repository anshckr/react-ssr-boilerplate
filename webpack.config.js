const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const MODE = (argv.mode || 'development').toLowerCase();
  const IS_DEV = MODE === 'development';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: IS_DEV ? '[name].js' : '[name]-[contenthash].js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
        filename: IS_DEV ? 'index.html' : 'index-[contenthash].html',
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devtool: IS_DEV ? 'eval-source-map' : false,
  };
};
