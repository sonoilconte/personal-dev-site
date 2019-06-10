const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () =>
  gulp.src('public/js/src/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('public/js/dist'))
);
