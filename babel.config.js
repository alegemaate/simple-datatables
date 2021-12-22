module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['ie >= 11', '> 1%', 'iOS >= 8', 'Android >= 4'],
          node: '6.10',
        },
        useBuiltIns: 'entry',
        debug: false,
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ],
    ['@babel/preset-react'],
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-proposal-object-rest-spread'],
    ['@babel/plugin-transform-async-to-generator'],
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        regenerator: true,
      },
    ],
  ],
};
