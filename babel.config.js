module.exports = api => {
  api.cache(false);

  const presets = ['@babel/preset-typescript', '@babel/preset-env'];
  const plugins = ['@babel/plugin-proposal-class-properties'];
  return {presets, plugins};
};