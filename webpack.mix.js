const mix = require('laravel-mix');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');


mix.js('resources/assets/js/app-client.js', 'public/js')
   .js('resources/assets/js/app-server.js', 'public/js')
   .sourceMaps()
   .options({
      extractVueStyles: true,
      postCss: [
         require('autoprefixer'),
      ],
   })
   .webpackConfig({
      resolve: {
         extensions: ['.js', '.json', '.vue', '.css', '.scss', '.sass'],
         alias: {
            '~': path.join(__dirname, './resources/assets/js'),
            '@': path.join(__dirname, './resources/assets/js'),
         }
      },
      plugins: [new VuetifyLoaderPlugin()]
   })
   // .options({
   //    extractVueStyles: true,
   // }).webpackConfig({
   //    resolve: {
   //       extensions: ['.js', '.json', '.vue', '.css', '.scss', '.sass'],
   //       alias: {
   //          '~': path.join(__dirname, './resources/js'),
   //          '$comp': path.join(__dirname, './resources/js/components')
   //       }
   //    },
   //    module: {
   //       rules: [
   //          {
   //             test: /\.s(c|a)ss$/,
   //             use: [
   //                'vue-style-loader',
   //                'css-loader',
   //                {
   //                   loader: 'sass-loader',
   //                   // Requires sass-loader@^8.0.0
   //                   options: {
   //                      implementation: require('sass'),
   //                      sassOptions: {
   //                         fiber: require('fibers'),
   //                         indentedSyntax: true // optional
   //                      },
   //                   },
   //                },
   //             ],
   //          },
   //       ]
   //    },
   //    plugins: [
   //       new VuetifyLoaderPlugin()
   //    ]
   // })
   // .webpackConfig({
   //    plugins: [
   //       new VuetifyLoaderPlugin(),
   //    ]
   // });