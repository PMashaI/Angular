const helpers = require('./helpers');

/**
 * Webpack Plugins
 *
 */
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(options) {
  return {
    /**
     * The entry point for the bundle
     * Our Angular.js app
     *
     * See: https://webpack.js.org/configuration/entry-context/#entry
     */
    entry: {
      polyfills: './src/polyfills.ts',
      main: ['./src/main.ts', './src/styles/main.scss'],
      vendors : ['./src/vendors.js']
    },

    optimization: {},

    /**
     * Options affecting the resolving of modules.
     *
     * See: https://webpack.js.org/configuration/resolve/
     */
    resolve: {
      /**
       * An array of extensions that should be used to resolve modules.
       *
       * See: https://webpack.js.org/configuration/resolve/#resolve-extensions
       */
      extensions: ['.js', '.ts', '.html'],

      /**
       * An array of directory names to be resolved to the current directory
       */
      modules: [helpers.root('src'), helpers.root('node_modules')]
    },

    module: {
      rules: [
        // Javascript
        {
          test: /.js$/,
          parser: {
            system: true
          }
        },

        // Typescript
        {
          test: /\.ts$/,
          exclude: [/node_modules/, /\.spec\.ts$/],
          use: '@ngtools/webpack'
        },

        // Templates
        {
          test: /\.html$/,
          exclude: helpers.root('src','index.html'),
          use: 'raw-loader'
        },

        /**
         * File loader for supporting images, for example, in CSS files.
         */
        {
          test: /\.(jpg|png|gif)$/,
          use: 'file-loader'
        },

        /* File loader for supporting fonts, for example, in CSS files.
          */
        {
          test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
          use: 'file-loader'
        } 
      ]
    },
    plugins: [
      /**
       * Plugin: CopyWebpackPlugin
       * Description: Copy files and directories in webpack.
       *
       * Copies project static assets.
       *
       * See: https://www.npmjs.com/package/copy-webpack-plugin
       */
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/assets', to: 'assets' },
          { from: 'src/favicon.ico', to: './' }
        ],
        options: {
          concurrency: 100,
        }
      }),

      new AngularCompilerPlugin({
        tsConfigPath: './tsconfig.app.json',
        mainPath: './src/main.ts',
        platform: 0
      }),

      /*
      * Plugin: HtmlWebpackPlugin
      * Description: Simplifies creation of HTML files to serve your webpack bundles.
      * This is especially useful for webpack bundles that include a hash in the filename
      * which changes every compilation.
      *
      * See: https://github.com/ampedandwired/html-webpack-plugin
      */
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        title: 'Scrum Pocker',
        inject: true,
        hash: true,
        metadata: {
          baseUrl: '/'
        }
      })
    ]
  };
};