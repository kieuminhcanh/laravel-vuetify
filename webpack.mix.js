const mix = require('laravel-mix');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');


mix.js('resources/js/app-client.js', 'public/js')
   .js('resources/js/app-server.js', 'public/js')
   .sourceMaps()
   .options({
      extractVueStyles: "public/css/app.css",
      postCss: [
         require('autoprefixer'),
      ],
   })
   .webpackConfig({
      resolve: {
         extensions: ['.js', '.json', '.vue', '.css', '.scss', '.sass'],
         alias: {
            '~': path.join(__dirname, './resources/js'),
            '@': path.join(__dirname, './resources/js'),
         }
      },
      target: 'node',
      plugins: [new VuetifyLoaderPlugin()]
   })