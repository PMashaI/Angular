const helpers = require('./helpers');
//const autoprefixer = require('autoprefixer');
//const cssnano = require('cssnano');

/**
 * Used to merge webpack configs
 */
const webpackMerge = require('webpack-merge');

/**
 * The settings that are common to prod and dev
 */
const commonConfig = require('./webpack.common.js');

/**
 * Webpack Plugins
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HashedModuleIdsPlugin = require('webpack/lib/HashedModuleIdsPlugin');
const TerserPlugin = require('terser-webpack-plugin');

/***
 * Ref: https://github.com/mishoo/UglifyJS2/tree/harmony#minify-options
 * @param supportES2015
 * @param enableCompress disabling compress could improve the performance, see https://github.com/webpack/webpack/issues/4558#issuecomment-352255789
 * @returns {{ecma: number, warnings: boolean, ie8: boolean, mangle: boolean, compress: {pure_getters: boolean, passes: number}, output: {ascii_only: boolean, comments: boolean}}}
 */
function getUglifyOptions(supportES2015, enableCompress) {
  const uglifyCompressOptions = {
    pure_getters: true /* buildOptimizer */,
    // PURE comments work best with 3 passes.
    // See https://github.com/webpack/webpack/issues/2899#issuecomment-317425926.
    passes: 2 /* buildOptimizer */
  };

  return {
    ecma: supportES2015 ? 6 : 5,
    warnings: false, // TODO verbose based on option?
    ie8: false,
    mangle: true,
    compress: enableCompress ? uglifyCompressOptions : false,
    output: {
      ascii_only: true,
      comments: false
    }
  };
}

module.exports = function(env) {
  const ENV = (process.env.NODE_ENV = process.env.ENV = 'production');
 
  return webpackMerge(commonConfig({ env: ENV }), {
    mode: 'production',

    devtool: 'source-map',

    /**
     * Options affecting the output of the compilation.
     *
     * See: https://webpack.js.org/configuration/output/
     */
    output: {
      /**
       * The output directory as absolute path (required).
       *
       * See: https://webpack.js.org/configuration/output/#output-path
       */
      path: helpers.root('dist'),

      /**
       * Specifies the name of each output file on disk.
       * IMPORTANT: You must not specify an absolute path here!
       *
       * See: https://webpack.js.org/configuration/output/#output-filename
       */
      filename: '[name].[chunkhash].bundle.js',

      /**
       * The filename of the SourceMaps for the JavaScript files.
       * They are inside the output.path directory.
       *
       * See: https://webpack.js.org/configuration/output/#output-sourcemapfilename
       */
      sourceMapFilename: '[file].map',

      /**
       * The filename of non-entry chunks as relative path
       * inside the output.path directory.
       *
       * See: https://webpack.js.org/configuration/output/#output-chunkfilename
       */
      chunkFilename: '[name].[chunkhash].chunk.js'
    },

    module: {
      rules: [
        {
          // Processing for page scss files 
          // (that are not used in angular pplication directly. E.g. src/styles/main.scss)
          test: /\.scss$/,
          exclude: helpers.root('src', 'app'),
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          // Processing for component's scss files 
          test: /\.scss$/,
          include: helpers.root('src', 'app'),
          use: [
             'to-string-loader',
             'css-loader', 
             'sass-loader'
           ]
        }
      ]
    },

    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          sourceMap: true,
          parallel: true,
          cache: helpers.root('webpack-cache/uglify-cache'),
          terserOptions : getUglifyOptions(true, true)
        })
      ],
    },

    /**
     * Add additional plugins to the compiler.
     *
     * See: https://webpack.js.org/configuration/plugins/
     */
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name]-[hash].css',
        chunkFilename: '[name]-[chunkhash].css'
      }),
      new HashedModuleIdsPlugin()
    ],

    devServer: {
      port: 5200,
      host: 'localhost',
      historyApiFallback: true,
      contentBase: helpers.root('dist'),
      watchOptions: {
        ignored: /node_modules/
      }
    },

    /**
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.js.org/configuration/node/
     */
    node: {
      global: true,
      crypto: 'empty',
      process: false,
      module: false,
      clearImmediate: false,
      setImmediate: false,
      fs: 'empty'
    }
  });
};