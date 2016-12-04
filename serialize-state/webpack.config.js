const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  devtool: 'eval-source-map',

  entry: path.resolve(__dirname, "./src/front/AppContainer.jsx"),
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].[hash].bundle.js",
    sourceMapFilename: '[name].[hash].bundle.js.map'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        babelrc: false,
        query: {
          presets: ['react', 'latest', 'stage-0'],
          plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties']
        }
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },

  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/front/index.html')
    }),
    new ExtractTextPlugin('[name].[hash].css', { disable: false }),
    new CopyWebpackPlugin([{ from: __dirname + '/src/front' }]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  externals: {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },

  devServer: {
    contentBase: "./build",
    colors: true,
    historyApiFallback: true,
    port: process.env.PORT||32199,
    inline: true,
    hot: true
  }
};

module.exports = config;