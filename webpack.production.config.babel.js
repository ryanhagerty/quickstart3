/* Webpack production config file */
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  entry: [
    `./src/main`
  ],

  output: {
    path: path.join(__dirname, `build`),
    filename: `app.js`
  },

  plugins: [
    new ExtractTextPlugin(`style.css`, { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: `babel-loader`
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(`style-loader`, `css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader`)
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file?name=images/[name].[ext]'
      },
      {
        test: /\.svg(\?v=\d+.\d+.\d+)?$/,
        loader: 'file?mimetype=image/svg+xml&name=images/[name].[ext]'
      }
    ]
  },

  resolve: {
    extensions: [``, `.js`, `.jsx`, `.css`]
  },

  postcss: [
    require(`postcss-import`)({
      path: `src/common/base`
    }),
    require(`level4`),
    require(`autoprefixer`)({
      browsers: ['last 2 versions']
    })
  ]
}
