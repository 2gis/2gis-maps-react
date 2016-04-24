module.exports = {
  type: 'react-component',
  build: {
    externals: {
      'react': 'React'
    },
    global: 'y',
    jsNext: true,
    umd: true
  }
}
