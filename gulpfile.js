var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');

var plugins = [
    autoprefixer({browsers: ['last 4 version']})
];
exports.styles= () => ( 
    gulp.src('css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build'))
);
exports.watch= () => (
    gulp.watch('css/style.css',['styles'])
);