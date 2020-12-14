module.exports = {
  // exclude: /node_modules/,
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
        modules: 'commonjs',
        targets: {
          browsers: [
            'ie >= 11',
            'Chrome >= 21',
            'Firefox >= 1',
            'Edge >= 13'
          ]
        }
      }
    ]
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-runtime',
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'React.createElement'
      }
    ]
  ]
}
