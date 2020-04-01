import Vue from 'vue';
import vuetify from './plugins/vuetify'

import App from './components/App';

export default new Vue({
    vuetify,
    render: h => h(App),
});
