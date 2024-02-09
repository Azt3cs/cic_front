import { createRouter, createWebHashHistory} from 'vue-router';
import Main from './components/HelloWorld.vue'
import HomePage from './components/HomePage.vue'



export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/dsds', component: Main},
        { path: '/', component: HomePage}
    ]
})
