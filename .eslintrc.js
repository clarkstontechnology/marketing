module.exports = {
  root: true,
  extends: ['./packages/config/eslint-preset.js'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './apps/*/tsconfig.json', './packages/*/tsconfig.json'],
  },
}; 