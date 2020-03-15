const mix = require('laravel-mix');

require('mix-tailwindcss');

mix.react('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css')
   .tailwind('./tailwind.config.js');
