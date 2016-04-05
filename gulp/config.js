var 
  dest = './build',
  src = './src',
  mui = './node_modules/material-ui/src',
  historyApiFallback = require('connect-history-api-fallback');

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src],
      middleware: [ historyApiFallback() ]
    },
    files: [
      dest + '/**'
    ],
    notify: false,
    open: false
  },
  markup: {
    src: src + "/www/**",
    dest: dest
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/app.jsx',
      dest: dest,
      outputName: 'app.js'
    }],
    extensions: ['.jsx'],
  }
};
