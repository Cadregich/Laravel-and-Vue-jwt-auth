//App init imports
import './bootstrap';
import { createApp } from 'vue';
import store from './vuex';
import router from './router';
import './axios';
// Components
import Index from './components/Index.vue';

const app = createApp({
    el: '#app',

    components: {
        Index,
    }
});

app.use(router);
app.use(store);
app.mount('#app');
