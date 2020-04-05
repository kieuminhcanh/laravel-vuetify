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
    connectToDevTools: true,
    ssrMode: true
  })

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
  })
  return apolloProvider

}
