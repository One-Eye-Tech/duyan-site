module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: ['.no-rem'],
      replace: true,
      mediaQuery: true,
      minPixelValue: 0,
      exclude: /node_modules/i,
    },
    autoprefixer: {},
  },
};

