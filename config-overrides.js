const {override, fixBabelImports, addLessLoader, addDecoratorsLegacy, addWebpackAlias} = require('customize-cra');
const { resolve } = require('path');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {'@primary-color': '#1DA57A'},
  }),
  addDecoratorsLegacy(),
  addWebpackAlias({
    '@comps': resolve(__dirname, 'src/components'),
    '@conts': resolve(__dirname, 'src/containers'),
    '@config': resolve(__dirname, 'src/config'),
    '@redux': resolve(__dirname, 'src/redux'),
    '@api': resolve(__dirname, 'src/api'),
    '@utils': resolve(__dirname, 'src/utils'),
    '@assets': resolve(__dirname, 'src/assets'),
  })
);