const path = require('path');
const config = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
  }
};

module.export = config;

// npm run build