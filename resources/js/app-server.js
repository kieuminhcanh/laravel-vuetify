import { createApp } from './app'
import renderVueComponentToString from 'vue-server-renderer/basic';
import ApolloSSR from 'vue-apollo/ssr'

// app.$router.push(context.url);

// renderVueComponentToString(app, (err, html) => {
//     if (err) {
//         throw new Error(err);
//     }

//     dispatch(html);
// });

new Promise((resolve, reject) => {
    const { app, router, store, apolloProvider } = createApp()

    app.$router.push(context.url);

    app.$router.onReady(() => {
        // This `rendered` hook is called when the app has finished rendering
        context.rendered = () => {
            // After the app is rendered, our store is now
            // filled with the state from our components.
            // When we attach the state to the context, and the `template` option
            // is used for the renderer, the state will automatically be
            // serialized and injected into the HTML as `window.__INITIAL_STATE__`.
            context.state = store.state
            context.apolloState = ApolloSSR.getStates(app.$apolloProvider.clients)
        }
        resolve(app)
    }, reject)
}).then(app => {
    renderVueComponentToString(app, (err, html) => {
        if (err) {
            throw new Error(err);
        }

        dispatch(html);
    });
}).catch((err) => {
    console.log(err);
    throw new Error(err);
});


// new Promise((resolve, reject) => {
//     app.$router.push(context.url);
//     app.$router.onReady(() => {

//         dispatch('Đã render xong');

//         app.$on('')
//         resolve(app);
//     }, reject);
// }).then(app => {
//     app.$
//     renderVueComponentToString(app, (err, html) => {
//         if (err) {
//             throw new Error(err);
//         }

//         dispatch(html);
//     });
// }).catch((err) => {
//     throw new Error(err);
// });
