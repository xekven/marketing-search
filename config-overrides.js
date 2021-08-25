/* eslint-disable */

const {
  override,
  addWebpackAlias,
} = require('customize-cra');
const path = require('path');

/* eslint-enable */

module.exports = override(
  addWebpackAlias({
    ['src']: path.resolve(__dirname, './src'),
    ['store']: path.resolve(__dirname, './src/store'),
    ['actions']: path.resolve(__dirname, './src/store/actions'),
    ['api']: path.resolve(__dirname, './src/store/api'),
    ['reducers']: path.resolve(__dirname, './src/store/reducers'),
    ['constants']: path.resolve(__dirname, './src/constants'),
    ['components']: path.resolve(__dirname, './src/components'),
    ['hooks']: path.resolve(__dirname, './src/hooks'),
    ['utilities']: path.resolve(__dirname, './src/utilities'),
    ['views']: path.resolve(__dirname, './src/views'),
    ['styles']: path.resolve(__dirname, './src/styles'),
  })
);