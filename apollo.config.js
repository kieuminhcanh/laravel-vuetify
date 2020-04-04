// apollo.config.js
module.exports = {
  client: {
    service: {
      name: 'my-app',
      url: 'http://laravel-vuetify.test/graphql',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}