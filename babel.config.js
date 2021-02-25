// module.exports = api => {
//   api.cache(false);
//
//   const presets = ['@babel/preset-typescript', '@babel/preset-env'];
//   const plugins = ['@babel/plugin-proposal-class-properties'];
//   return {presets, plugins};
// };

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};
