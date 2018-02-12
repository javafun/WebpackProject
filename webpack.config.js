const webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var debug = process.env.NODE_ENV !== "production";
const prod = process.argv.indexOf('-p') !== -1;


const VENDOR_LIBS = [
  'faker','lodash','react','react-redux','react-dom',
  'react-router','react-input-range','redux-form','redux-thunk',
  'redux'
];

console.log(prod);

const config = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module:{
    rules:[
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader','css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      // add manifest to signalify whether vendor js file has changed.
      names: ['vendor','manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': 
    //   //JSON.stringify('production')
    //   JSON.stringify(process.env.NODE_ENV)
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: true,
    //   compress: {
    //     warnings: false, // Suppress uglification warnings
    //     pure_getters: true,
    //     unsafe: true,
    //     unsafe_comps: true,
    //     screw_ie8: true
    //   },
    //   output: {
    //     comments: false,
    //   },
    //   exclude: [/\.min\.js$/gi] // skip pre-minified libs
    // }),
    //new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    //new webpack.optimize.AggressiveMergingPlugin()
  ]
};

config.plugins = config.plugins||[];
if (prod) {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }));
} else {
  config.plugins.push(new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': `""`
      }
  }));
}

module.exports = config;