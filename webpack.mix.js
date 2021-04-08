let mix = require("laravel-mix");

mix.vue()
    .js("resources/js/field.js", "dist/js")
    .sass("resources/sass/field.scss", "dist/css")
    .webpackConfig({
        resolve: {
            symlinks: false,
        },
    });
