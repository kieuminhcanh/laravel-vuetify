// import Vue from 'vue';

// import VueApollo from 'vue-apollo';
// import ApolloClient from 'apollo-boost'
// // import fetch from 'node-fetch';

// import fetch from 'cross-fetch'
// import { createHttpLink } from 'apollo-link-http'


// Vue.use(VueApollo);

// export function createProvider(options = { ssr: true }) {

//   const link = createHttpLink({ uri: 'http://laravel-vuetify.test/graphql', fetch: fetch });

//   const client = new ApolloClient({
//     link,
//     connectToDevTools: true,
//     ssrMode: true
//   });


//   const apolloProvider = new VueApollo({
//     defaultClient: client,
//   })
//   return apolloProvider
// }

// export default apolloProvider

import Vue from 'vue'
import fetch from 'cross-fetch'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from '@vue/apollo-option'


// Install the vue plugin
Vue.use(VueApollo)
export function createProvider(options = { ssr: true }) {

  // Create the apollo client
  const link = createHttpLink({
    // You should use an absolute URL here
    fetch,
    uri: "http://laravel-vuetify.test/graphql",
  })

  const cache = new InMemoryCache()


  const apolloClient = new ApolloClient({
    link,
    cache, 
    // connectToDevTools: true,
    ssrMode: true
  })

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
  })
  return apolloProvider

}
// export default createProvider

// import Vue from 'vue'
// import VueApollo from 'vue-apollo'

// import { createApolloClient, restartWebsockets } from 'vue-cli-plugin-apollo/graphql-client'
// Vue.use(VueApollo)

// const httpEndpoint = 'http://laravel-vuetify.test/graphql'

// // // Create the apollo client

// const defaultOptions = {
//   // You can use `https` for secure connection (recommended in production)
//   httpEndpoint,
//   // You can use `wss` for secure connection (recommended in production)
//   // Enable Automatic Query persisting with Apollo Engine
//   persisting: false,
//   // Use websockets for everything (no HTTP)
//   // You need to pass a `wsEndpoint` for this to work
//   websocketsOnly: false,
//   // Is being rendered on the server?
//   ssr: true,
//   // defaultHttpLink: false,
//   httpLinkOptions: { fetch }

// }


// export function createProvider(options = { ssr: true }) {

//   // Create apollo client
//   const { apolloClient } = createApolloClient({
//     ...defaultOptions,
//     ...options,
//   })

//   // Create vue apollo provider
//   const apolloProvider = new VueApollo({
//     defaultClient: apolloClient,
//     defaultOptions: {
//       $query: {
//         // fetchPolicy: 'cache-and-network',
//       },
//     },
//     errorHandler(error) {
//       // eslint-disable-next-line no-console
//       console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message)
//     },
//   })

//   return apolloProvider
// }