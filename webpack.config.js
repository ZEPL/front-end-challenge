var path = require('path');

module.exports = {
    devServer: {
      publicPath: '/public/',
      historyApiFallback: true,
      clearBeforeBuild: '!(favicon.ico)'
    },
    devtool: 'source-map',
    eslint: {
      configFile: '.eslintrc.json'
    },
    entry: path.join(__dirname, './app'),
    output: {
        path: path.join(__dirname, '/public/'),
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: /node_modules/,
            },
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
        ]
    },
    resolve: {
      root: path.resolve(__dirname),
      alias: {
        app: 'app'
      },
      extensions: ['', '.js', '.jsx', '.json']
    },
};
