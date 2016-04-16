var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config      = require('../config').browserSync;
var spa         = require("browser-sync-spa");

gulp.task('browserSync', ['build'], function() {

  browserSync.use(spa({

      // Options to pass to connect-history-api-fallback.
      // If your application already provides fallback urls (such as an existing proxy server),
      // this value can be set to false to omit using the connect-history-api-fallback middleware entirely.
      history: {
          index: '/index.html'
      }
  }));

  browserSync(config);
});
