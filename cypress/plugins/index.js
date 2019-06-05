// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// const webpackConfig = require('../../webpack.config')();
const wp = require('@cypress/webpack-preprocessor');
const path = require('path');

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
          '~': path.resolve(__dirname, '../../src')
        }
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: [/node_modules/],
            use: [
              {
                loader: 'ts-loader'
              }
            ]
          }
        ]
      }
    }
  };
  on('file:preprocessor', wp(options));
};
