import { createRouter, createWebHashHistory} from 'vue-router';
import HomePage from './components/HomePage.vue'
import ProfilePage from './components/ProfilePage'
import AboutEvents from './components/AboutEvents'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomePage},
        { path: '/profile', component: ProfilePage},
        { path: '/aboutevents', component: AboutEvents}
    ]
})
