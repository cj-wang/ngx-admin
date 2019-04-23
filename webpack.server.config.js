const webpack = require('webpack');
const WebpackConfigFactory = require('@nestjs/ng-universal')
  .WebpackConfigFactory;

const config = WebpackConfigFactory.create(webpack, {
  // Nest server for SSR
  server: './server/main.ts'
});

// Fix style-loader path in dist/server/main.js
config.module.rules.push({
  test: /main\.js$/,
  loader: 'string-replace-loader',
  options: {
    search: 'require("!../../style-loader/lib/addStyles.js")',
    replace: 'require("style-loader/lib/addStyles.js")',
  }
});

module.exports = config;
