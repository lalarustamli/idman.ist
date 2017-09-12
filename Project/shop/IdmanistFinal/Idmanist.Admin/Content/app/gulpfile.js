var gulp = require('gulp');
var gulpFilter = require('gulp-filter');
var fs = require('fs');
$ = require('gulp-load-plugins')();
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var gulpBowerFiles = require('main-bower-files');
var sass = require('gulp-sass');



gulp.task('vendor', function(){
  var jsFilter = $.filter('**/*.js', {restore: true});
  var cssFilter = $.filter('**/*.css', {restore: true});
  var fontsFilter = $.filter('**/*.{ttf,woff,woff2,eof,svg}', {restore: true});
  var imgFilter = $.filter('**/*.{png,jpg}', {restore: true});
  var vendorSrc = JSON.parse(fs.readFileSync('vendor.json', 'utf8'));

      return gulp.src(vendorSrc, {
          base: 'bower_components'
      })
      .pipe(jsFilter)
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('../dist/assets/js'))
      .pipe(rename('vendor.bundle.js'))
      .pipe(uglify())
      .pipe(gulp.dest('../dist/assets/js'))
      .pipe(jsFilter.restore)
      .pipe(cssFilter)
      .pipe(concat('vendor.css'))
      .pipe(gulp.dest('../dist/assets/css'))
      .pipe(rename('vendor.bundle.css'))
      .pipe(minifyCSS())
      .pipe(gulp.dest('../dist/assets/css'))
      .pipe(cssFilter.restore)
      .pipe(imgFilter)
      .pipe($.flatten())
      .pipe(gulp.dest('../dist/assets/img'))
      .pipe(imgFilter.restore)
      .pipe(fontsFilter)
      .pipe($.flatten())
      .pipe(gulp.dest('../dist/assets/fonts'))
      .on("error", errorAlert);
});


gulp.task('sass', function () {
  return gulp.src('sass/app.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sass({includePaths: ['sass']}))
    .pipe(gulp.dest('../dist/assets/css'))
    .pipe(rename('app.bundle.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('../dist/assets/css'));
});

gulp.task('themes', function () {
  return gulp.src('sass/themes/*')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sass({includePaths: ['sass/themes']}))
    .pipe(gulp.dest('../dist/assets/css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('../dist/assets/css'));
});

gulp.task('watch', function () {
  gulp.watch('sass/**/*.scss', ['sass','themes']);
});

//Error handeling
function errorAlert(err) {
	console.log(err.toString());
	this.emit("end");
}

gulp.task('default', ['vendor','sass','themes','watch']);
