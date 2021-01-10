
var gulp   = require('gulp'),             // import gulp
    concat = require('gulp-concat'),    // import gulp concat
    autoprefixer = require('gulp-autoprefixer'),  // prefix of css3
    sass   = require('gulp-sass'),
    pug   = require('gulp-pug'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify'),
    notify = require("gulp-notify"),
    zip = require('gulp-zip'),
    newer = require('gulp-newer');
    imagemin = require('gulp-imagemin');


// All tasks


// strat task of convert all pages of pug to html 

function convert_pages(page_name , page_src){
    gulp.task(page_name, function(){
        // get all files of pugs to html page
        return gulp.src(page_src+'.pug')
            .pipe(pug(
                {pretty:true}
            ))
             // reload changes 
            .pipe(newer(page_src+'*/*.pug'))

            // concat files
            .pipe(concat(page_name+'.html'))

            .pipe(gulp.dest('dist/html/'+ page_name))
            // notification of task
            .pipe(notify('the end of Html Task !--'))
            // live loader to watch any change 
            .pipe(livereload());
    });
}

convert_pages('home_page' , 'stages/html/pug/home_page/*')
convert_pages('food' , 'stages/html/pug/All_Menus/food/*')
convert_pages('drink' , 'stages/html/pug/All_Menus/drink/*')
convert_pages('candy' , 'stages/html/pug/All_Menus/candy/*')


// end task of convert all pages of pug to html 


//////////////////////////////////////////////////////////////////////////////
// css

// start task of convert all pages of sass to css


function convert_pages_css(page_name , page_src){

    gulp.task(page_name, function(){
        return gulp.src(page_src)
            // reload changes 
            .pipe(newer(page_src))                                                                                          
            //start source map
            .pipe(sourcemaps.init())                      
                .pipe(sass({outputStyle: 'compressed'}))      
                // add autoprefixer  
                .pipe(autoprefixer())
            // concat files of css
            .pipe(concat(page_name+'.css'))
            //write source map in a file and put it in dist folder
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dist/css/' + page_name))
            // notification of task
            .pipe(notify('the end of CSS Task !--'))
            // live loader to watch any change 
            .pipe(livereload())
    }); 
}

convert_pages_css('home_pages_css' , 'stages/css/scss/home-page/*.scss')
convert_pages_css('All_Menu_css' , 'stages/css/scss/All_Menu_pages/*.scss')


// end task of convert all pages of sass to css

//////////////////////////////////////////////////////////////////////////////



// task one (css)




// task of minify javascript files

gulp.task('Minfiy_js',function(){
return gulp.src('stages/js/*.js')
    // reload changes 
    .pipe(newer('stages/js/*.js'))

    .pipe(gulp.dest('dist/js'))
    .pipe(minify())
    // notification of task
    .pipe(notify('the end of JS Task !--'))
    // live loader to watch any change 
    .pipe(livereload())
})




// task of minify images

gulp.task('Minfiy_images',function(){
var img_src = ['stages/images/**/*.jpg' , 'stages/images/**/*.jpeg' , 'stages/images/**/*.png'];
return gulp.src(img_src)
    // reload changes 
    .pipe(gulp.dest('dist/images'))
    .pipe(imagemin())
    // notification of task
    //.pipe(notify('the end of images Task !--'))
    // live loader to watch any change 
    .pipe(livereload())
})


// task of compressed all files in distripution(dist)
gulp.task('compressed_files',function(){
return gulp.src('dist/**/*.*')
    .pipe(zip('website.zip'))
    .pipe(gulp.dest('Final_Application'))
    .pipe(notify('files are compressd'))
}) 


// task of watch:

gulp.task('watch', function() {
    require('./server.js')

    // watch html files
    gulp.watch('stages/html/pug/home_page/**/*.pug' , gulp.series('home_page'));
    gulp.watch('stages/html/pug/All_Menus/food/*.pug' , gulp.series('food'));
    gulp.watch('stages/html/pug/All_Menus/drink/*.pug' , gulp.series('drink'));
    gulp.watch('stages/html/pug/All_Menus/candy/*.pug' , gulp.series('candy'));
    // watch js files

///////////////////////////////////////////////////////////////////////
    
    // watch css files
    gulp.watch('stages/css/scss/home-page/**/*.scss' , gulp.series('home_pages_css'));
    gulp.watch('stages/css/scss/All_Menu_pages/*.scss', gulp.series('All_Menu_css'));


    ///////////////////////////////////////////////////////////////////////

    // watch js files
    gulp.watch('stages/js/*.js' , gulp.series('Minfiy_js'));


    // watch js files
    gulp.watch(['stages/images/**/*.jpg' , 'stages/images/**/*.jpeg' , 'stages/images/**/*.png'] , gulp.series('Minfiy_images'));
    
    // watch compressed files
    gulp.watch('dist/**/*.*', gulp.series('compressed_files'));

});
