// import { createApp } from 'vue'
// import App from './App.vue'

// import './assets/main.css'

// createApp(App).mount('#app')

// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './components/router/index.js';

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')

import { createApp } from 'vue';
import axios from "axios";
import App from './App.vue';
import router from './router/index.js';
import './index.css'
const app = createApp(App);
app.use(router);
app.config.globalProperties.$axios = axios; 
app.mount('#app');

//app.use(router).mount('#app')
// createApp(App).use(router).mount('#app')