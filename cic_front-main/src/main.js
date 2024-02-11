
import routes  from './router'



// main.js
import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

const app = createApp(App);

// Инициализация Axios
app.config.globalProperties.$http = axios;
app.use(routes);
const userData = localStorage.getItem('user');
if(userData) {
    app.config.globalProperties.$user = JSON.parse(userData);
}


app.mount('#app');