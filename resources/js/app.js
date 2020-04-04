import Vue from 'vue';
import { createRouter } from './router'
import { createStore } from './store'
import vuetify from './plugins/vuetify'
import App from './App.vue';
import { createProvider } from './plugins/apollo'

import { sync } from 'vuex-router-sync'

export function createApp() {
    // create router and store instances
    const router = createRouter()
    const store = createStore()

    // sync so that route state is available as part of the store
    sync(store, router)

    const apolloProvider = createProvider({
        ssr: true,
    })

    // create the app instance, injecting both the router and the store
    const app = new Vue({
        router,
        store,
        vuetify,
        apolloProvider,
        render: h => h(App),
    })

    // expose the app, the router and the store.
    return { app, router, store, apolloProvider }
}
