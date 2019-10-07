document.write("<script type='text/javascript' src='stylus.js'></script>");
document.write("<script type='text/javascript' src='del.js'></script>");
const{series}=require('gulp');
exports.default=series(stylus);