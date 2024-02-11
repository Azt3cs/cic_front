import { createRouter, createWebHashHistory} from 'vue-router';
import Main from './components/TheMaps.vue'
import HomePage from './components/HomePage.vue'
import TheHeader from './components/TheHeader.vue'
import AboutEvents from './components/AboutEvents.vue'
import TheProfile from './components/TheProfile'
import AuthForm from "./components/AuthForm.vue";
import AchivmentsPage from "@/components/AchivmentsPage.vue";
import MyAchivments from "@/components/MyAchivments.vue";
import CreateEvent from "@/components/CreateEvent.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/dsds', component: Main},
        { path: '/', component: HomePage},
        { path: '/head',component: TheHeader},
        { path: '/AbotEvent',component:AboutEvents},
        {path: '/Profile', component:TheProfile},
        {path:'/auth',component:AuthForm},
        {path:'/achivments', component:AchivmentsPage},
        {path:'/myachivment',component:MyAchivments},
        {path:'/createevent', component:CreateEvent}

    ]
})
