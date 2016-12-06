const config = {
  'extends': 'airbnb',
  installedESLint: true,
  env: {
    browser: true,
  },
  rules: {
    'no-trailing-spaces': 0,
    'react/prop-types': 0,
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ]
};

module.exports = config;