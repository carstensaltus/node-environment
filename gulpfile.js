'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');
const docs = require('gulp-documentation');
const merge = require('merge2');
const typeScript = require('gulp-typescript');
const tsLint = require('gulp-tslint');
const concat = require('gulp-concat');
const runSequance = require('run-sequence');

gulp.task('default', ['build']);

gulp.task('build', (done) => {
  runSequance('lint', 'compile', done);
});

gulp.task('compile', (done) => {
  runSequance([
    'compile.release',
    'compile.test'
  ], 'compile.docs', done);
});

gulp.task('watch', ['build'], () => {
  gulp.watch('./src/release/**/*.ts', ['build']);
  gulp.watch('./src/test/**/*.ts', ['compile.test']);
  gulp.watch(['./gulpfile.js'], ['build']);
});

gulp.task('lint', () => {
  return gulp.src('./src/**/*.ts').pipe(tsLint({
    formatter: 'stylish'
  })).pipe(tsLint.report())
});

gulp.task('clean.test', () => {
  return gulp.src('./dist/test/*').pipe(clean());
});

gulp.task('compile.test', ['clean.test'], () => {
  let tsProject = typeScript.createProject('tsconfig.json');
  let tsResult = gulp.src([
    './src/test/**/*.ts'
  ]).pipe(tsProject());
  tsResult.js.pipe(gulp.dest('./dist/test'));
});

gulp.task('clean.release', () => {
  return gulp.src([
    './dist/release/*'
  ]).pipe(clean());
});

gulp.task('compile.release', ['clean.release'], () => {
  let tsProject = typeScript.createProject('tsconfig.json');
  let tsResult = gulp.src([
    './src/release/**/*.ts'
  ]).pipe(tsProject());
  return merge([
    tsResult.js.pipe(gulp.dest('./dist/release')),
    tsResult.dts.pipe(gulp.dest('./dist/release'))
  ]);
});

gulp.task('clean.docs', () => {
  return gulp.src('./dist/docs/*').pipe(clean());
});

gulp.task('compile.docs', ['clean.docs'], () => {
	return gulp.src(['./src/release/index.ts'])
    .pipe(docs('md', {
      // https://github.com/documentationjs/documentation/blob/master/docs/USAGE.md
      filename: 'node-env.md',
      polyglot: true
    }))
    .pipe(gulp.dest('./dist/docs'));
});

// gulp.task('pre-test', function () {
//     // Everything file loaded from here uses babel with .babelrc
//     require('babel-core/register'); // https://babeljs.io/docs/usage/require/
//
//     return gulp.src(srcCode)
//         // Covering files (we use isparta for babel support)
//         .pipe(istanbul({instrumenter: require('isparta').Instrumenter}))
//         // Force `require` to return covered files
//         .pipe(istanbul.hookRequire());
// });

// gulp.task('compile.readMe', () => {
//   return gulp.src([
//     './dist/docs/header/*.md',
//     './dist/docs/body/*.md',
//     './dist/docs/footer/*.md',
//   ]).pipe(concat('README.md')).pipe(gulp.dest('./'));
// });
