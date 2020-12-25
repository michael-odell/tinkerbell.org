let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.options({
	processCssUrls: false,
	publicPath: 'static/'
})

mix
.sass('src/scss/theme-tinkerbell.scss', 'css')
.sass('src/scss/theme-tinkerbell-docs.scss', 'css')
.browserSync({
	proxy: 'http://localhost:1313',
	files: ['src/**/*.{js,scss}'],
	notify: false
})
.disableNotifications();