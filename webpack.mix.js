const mix = require('laravel-mix');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
require('laravel-mix-merge-manifest');


if (process.env.npm_config_section === 'server') {
   mix.js('resources/js/app-server.js', 'public/js')
      .options({
         extractVueStyles: "public/css/app.css",
         postCss: [
            require('autoprefixer'),
         ],
      })
      .webpackConfig({
         target: 'node',
         resolve: {
            extensions: ['.js', '.json', '.vue', '.css', '.scss', '.sass'],
            alias: {
               '~': path.join(__dirname, './resources/js'),
               '@': path.join(__dirname, './resources/js'),
            }
         },
         plugins: [
            // new webpack.optimize.LimitChunkCountPlugin({
            //    maxChunks: 1,
            // }),
            new VuetifyLoaderPlugin()
         ],
      })
      .mergeManifest()
      .version();

} else if (process.env.npm_config_section === 'client') {
   mix.js('resources/js/app-client.js', 'public/js')
      .webpackConfig({
         resolve: {
            extensions: ['.js', '.json', '.vue', '.css', '.scss', '.sass'],
            alias: {
               '~': path.join(__dirname, './resources/js'),
               '@': path.join(__dirname, './resources/js'),
            }
         },
         plugins: [new VuetifyLoaderPlugin()]
         // target: 'web',
         // output: {
         //    chunkFilename: 'js/chunks/[name].js?id=[chunkhash]',
         //    publicPath: '/',
         // },
      })
      .options({
         extractVueStyles: "public/css/app.css",
         postCss: [
            require('autoprefixer'),
         ],
      })
      .mergeManifest()
      .sourceMaps()
      .version();

   // Only build css with the client build, server build only needs
   // the html and not the css
   // mix.sass('resources/sass/app.scss', 'public/css')
} else {
   throw new Error('Provide correct --section argument to build command!')
}



// mix.js('resources/js/app-client.js', 'public/js')
//    .js('resources/js/app-server.js', 'public/js')
//    .sourceMaps()
//    .options({
//       extractVueStyles: "public/css/app.css",
//       postCss: [
//          require('autoprefixer'),
//       ],
//    })
//    .webpackConfig({
//       resolve: {
//          extensions: ['.js', '.json', '.vue', '.css', '.scss', '.sass'],
//          alias: {
//             '~': path.join(__dirname, './resources/js'),
//             '@': path.join(__dirname, './resources/js'),
//          }
//       },
//       target: 'node',
//       plugins: [new VuetifyLoaderPlugin()]
//    })