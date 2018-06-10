const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { join, resolve } = require('path');

const modes = {
  dev: 'development',
  prod: 'production'
};

const srcDir = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

module.exports = (env = modes.dev) => {
  const isProd = env === modes.prod;

  return {
    mode: isProd ? modes.prod : modes.dev,
    entry: [
      require.resolve('normalize.css'),
      join(srcDir, 'global.css'),
      join(srcDir, 'index.js')
    ],
    output: {
      filename: isProd ? '[name].[chunkhash].js' : '[name].js',
      path: outDir
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: join(srcDir, 'index.html')
      }),
      new MiniCssExtractPlugin({
        filename: isProd ? '[name].[hash].css' : '[name].css',
        chunkFilename: isProd ? '[id].[hash].css' : '[id].css'
      })
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: [outDir, resolve(__dirname, 'public')]
    }
  };
};
