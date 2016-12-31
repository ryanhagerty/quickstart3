/* Webpack local development config file */
import path from 'path';
import webpack from 'webpack';

module.exports = {
  devtool: `inline-source-map`,

  entry: [
    `webpack-hot-middleware/client`,
    `./src/main`
  ],

  output: {
    path: path.join(__dirname, `build`),
    filename: `app.js`,
    publicPath: `/build/`
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        // See .babelrc for loader presets
        loaders: [
          `react-hot`,
          `babel-loader`,
          `eslint-loader`
        ],
        include: path.join(__dirname, `src`)
      },
      {
        test: /\.css$/,
        loaders: [
          `style`,
          `css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]`,
          `postcss`,
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?mimetype=image/svg+xml'
      }
    ]
  },

  // Automatically transform files with these extensions
  resolve: {
    extensions: [``, `.js`, `.jsx`, `.css`]
  },

  // PostCSS plugins go here.
  postcss: [
    // Stylelint should stay in this position.
    require(`stylelint`),
    require(`postcss-import`)({
      path: `src/common/base`,
    }),
    require(`level4`),
    require(`autoprefixer`)({
      browsers: ['last 2 versions']
    })
  ]
}
