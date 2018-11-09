const gulp = require('gulp')
const sass = require('gulp-sass')
const cmq = require('gulp-merge-media-queries')
const prefix = require('gulp-autoprefixer')
const minifyCSS = require('gulp-cssnano')
const rename = require('gulp-rename')

const srcFiles = './src/*.scss'
const distDir = 'dist'

const buildCSS = () => gulp.src(srcFiles)
    .pipe(sass()).on('error', console.error.bind(console))
    .pipe(prefix())
    .pipe(cmq())
    .pipe(gulp.dest(distDir))
    .pipe(minifyCSS())
    .pipe(rename({
        suffix: ".min",
    }))
    .pipe(gulp.dest(distDir))

gulp.task('default', buildCSS)

gulp.task('watch', () => {
    gulp.watch(srcFiles, gulp.series('default'))
})
