const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config');
const gulpConfig = require('./gulp.config');

gulp.task('lint:front', () => {
  return gulp
    .src(gulpConfig.front.javascriptSource)
    .pipe(eslint({
      rules: {
        'no-trailing-spaces': 0
      },
      envs: [
        'browser'
      ]
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
});

gulp.task('webpack', () => {
  return gulp
    .src('./src/front/app.jsx')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./public'));
});

gulp.task('watch:front', () => { 
  return gulp
    .watch(gulpConfig.front.watchSource, ['lint']); 
});

gulp.task('lint', ['lint:front']);
gulp.task('watch', ['lint', 'watch:front']);
gulp.task('default', ['lint', 'webpack']);