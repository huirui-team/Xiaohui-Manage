const {del}=require('del');
//gulp.task('del',a,function(cb){
 //   del([a]);
//    cb();
//});
function del(a,cb){
    del([a]);
    cb();
}
exports.del=del;