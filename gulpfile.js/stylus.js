const{src,dest}=require('gulp');
const{nib}=require('nib');
const{stylus}=require('gulp-stylus');
//gulp.task('stylus', function (cb) {
//    gulp.src('stylusExample/src/*.styl')
//        .pipe(stylus(
//            { use: [nib()] }  /* 直接调用nib，就可以一并编译 */
//        ))
//        .pipe(gulp.dest('css/'))
//    cb();
//});
function stylus(cb){
    src('stylusExample/src/*.styl').pipe(stylus({use:[nib()]})).pipe(dest('css/'));
    cb();
}
exports.stylus=stylus;