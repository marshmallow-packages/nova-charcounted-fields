let mix = require("laravel-mix");
let path = require("path");

require("./mix");

mix.setPublicPath("dist")
    .js("resources/js/field.js", "dist/js/nova-charcounted-fields.js")
    .sass("resources/sass/field.scss", "dist/css/nova-charcounted-fields.css")
    .vue({ version: 3 })
    .nova("marshmallow/nova-charcounted-fields");
