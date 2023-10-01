const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // Set alias for '@' to resolve to 'src' directory
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src/'));

    // Add a rule for handling PDF files
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[ext]',
        outputPath: 'assets/files/', // adjust the output path as needed
      });
  },
});
