var webpack = require('webpack');
var path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {

} catch (e) {
}

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      // 'process.env.TODOAPP_G_FIREBASE_API_KEY': JSON.stringify(process.env.TODOAPP_G_FIREBASE_API_KEY)
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        TODOAPP_G_FIREBASE_API_KEY: JSON.stringify(process.env.TODOAPP_G_FIREBASE_API_KEY),
        TODOAPP_G_FIREBASE_AUTHDOMAIN: JSON.stringify(process.env.TODOAPP_G_FIREBASE_AUTHDOMAIN),
        TODOAPP_G_FIREBASE_DATABASEURL: JSON.stringify(process.env.TODOAPP_G_FIREBASE_DATABASEURL),
        TODOAPP_G_FIREBASE_STORAGEBUCKET: JSON.stringify(process.env.TODOAPP_G_FIREBASE_STORAGEBUCKET),
        TODOAPP_G_FIREBASE_MESSAGINGSENDERID: JSON.stringify(process.env.TODOAPP_G_FIREBASE_MESSAGINGSENDERID),
        TODOTEST_G_FIREBASE_API_KEY: JSON.stringify(process.env.TODOTEST_G_FIREBASE_API_KEY),
        TODOTEST_G_FIREBASE_AUTHDOMAIN: JSON.stringify(process.env.TODOTEST_G_FIREBASE_AUTHDOMAIN),
        TODOTEST_G_FIREBASE_DATABASEURL: JSON.stringify(process.env.TODOTEST_G_FIREBASE_DATABASEURL),
        TODOTEST_G_FIREBASE_STORAGEBUCKET: JSON.stringify(process.env.TODOTEST_G_FIREBASE_STORAGEBUCKET),
        TODOTEST_G_FIREBASE_MESSAGINGSENDERID: JSON.stringify(process.env.TODOTEST_G_FIREBASE_MESSAGINGSENDERID)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, './app/components'),
      path.resolve(__dirname, './app/api'),
      'node_modules'],
    alias: {
      app: 'app',
      applicationStyles: path.resolve(__dirname, './app/styles/app.scss'),
      actions: path.resolve(__dirname, './app/actions/actions.jsx'),
      reducers: path.resolve(__dirname, './app/reducers/reducers.jsx'),
      configureStore: path.resolve(__dirname, './app/store/configureStore.jsx')
      // firebase: path.resolve(__dirname, './app/firebase/index.js')

    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-0']
            }
          }]
      },{
        test: /\.scss?$/,
        use: [
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, './node_modules/foundation-sites/scss'),
                path.resolve(__dirname, './app/styles/')
              ]
            }
          }]
      }]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined :'eval-source-map'
};