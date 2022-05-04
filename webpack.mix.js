let mix = require("laravel-mix");
let path = require("path");

require("./mix");

mix.js("resources/js/field.js", "dist/js")
    .sass("resources/sass/field.scss", "dist/css")
    .webpackConfig({
        resolve: {
            symlinks: false,
        },
    })
    .vue({ version: 3 })
    .nova("marshmallow/nova-charcounted-fields");
