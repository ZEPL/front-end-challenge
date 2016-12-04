const config = {
  front: {
    javascriptSource: [
      './src/front/**',
      '!./src/front/resources/**',
      '!./src/front/**.css',
      '!./src/front/**.scss',
      '!./src/front/**.htm',
      '!./src/front/**.html',
    ],
    watchSource: [
      './src/front/**'
    ]
  }
};

module.exports = config; 