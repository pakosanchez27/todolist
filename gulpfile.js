const {dest, src, parallel, watch} = require('gulp'); 
const sass = require('gulp-dart-sass'); 

const paths = {
    scss: 'src/scss/**/*.scss',
    
}
function css() {
    return src(paths.scss)
     .pipe( sass() )
     .pipe( dest('desarrollo/css') );
 }
 
 function watchArchivos(){
     watch(paths.scss, css);
 }
 exports.css = css; 
 exports.watchArchivos = watchArchivos; 
 exports.default = parallel(watchArchivos, css);
 