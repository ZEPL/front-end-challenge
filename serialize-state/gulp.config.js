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
    watchJavascript: [
      './src/front/**',
      '!./src/front/resources/**',
      '!./src/front/**.css',
      '!./src/front/**.scss',
      '!./src/front/**.htm',
      '!./src/front/**.html',
    ]
  }
};

module.exports = config; 