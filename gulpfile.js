const { src, dest, watch, parallel, series } = require('gulp'); // Галп переменные путь, выгрузить в ... следить, параллельный запуск, очередь выполнения
const scss = require('gulp-sass'); // Препроцессор sass
const concat = require('gulp-concat'); // Объединяет переданые в src файлы (в виде массива) в один с заданым именем
const autoprefixer = require('gulp-autoprefixer'); // Добавляет префикс к стилю для корректного отображения в разных браузерах конкретного свойства: -ms--  -webkit--
const uglify = require('gulp-uglify');  // Плагин для компресса js файлов, поскольку с scss используется встроенный компрессор
const browserSync = require('browser-sync').create(); // Плагин для обновления окна браузера при изменении html/css
const imagemin = require('gulp-imagemin'); // Работа с картинками и их конвертация
const del = require('del'); // Плагин для очистки (папки )


// Обновление страницы
function browserUpdate() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        },
        notify: false,
    });
}

// Работа с стилями
function styles() { 
    return src('app/scss/style.scss')
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 versions'],
        grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
}

// Работа с скриптами
function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/mixitup/dist/mixitup.js',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
        'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
        'node_modules/rateyo/src/jquery.rateyo.js',
        'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
        'app/js/main.js',
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream());
}

//Работа с картинками
function images() {
    return src('app/images/**/*.*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]
    ))
    .pipe(dest('dist/images'));
}

/* function fonts() {
    return src ('app/fonts/**')
    .pipe(dest('dist/fonts'));
} */

// Сборка
function build() {
    return src([
        'app/**/*.html',
        'app/fonts/**',
        'app/css/style.min.css',
        'app/js/main.min.js'
    ], {base: 'app'})
    .pipe(dest('dist'));
}

// Удаление содержимого dist
function cleanDist() {
    return del('dist');
}

// Наблюдение за обновлениями
function watching() {
    watch(['app/scss/**/*.scss'], styles);
    watch(['app/js/main.js', '!app/js/main.min.js'], scripts);
    watch(['app/**/*.html']).on('change', browserSync.reload);
}




exports.styles = styles;
exports.scripts = scripts;
exports.browserUpdate = browserUpdate;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, images, build);

exports.default = parallel(styles, scripts, browserUpdate, watching); // Первые два прописаны просто на всякий случай, чтоб не обновлять страницу в ручную, когда мы прописали что-то новое