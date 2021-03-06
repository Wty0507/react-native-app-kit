const gulp = require('gulp')
const rimraf = require('rimraf')
const { src, dest, task, series } = gulp

task('clean', cb => {
  rimraf('dist/src', cb)
})

task('components', () => {
  return src('src/components/**/*.*').pipe(dest('dist/src/components/'))
})

task('icons', () => {
  return src('src/icons/**/*.*').pipe(dest('dist/src/icons/'))
})

task('utils', () => {
  return src('src/utils/**/*.*').pipe(dest('dist/src/utils/'))
})

exports.default = series('clean', 'components', 'icons', 'utils')
