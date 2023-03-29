import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/page/Home.vue';
import About from '../components/page/About.vue';
import NotFound from '../components/page/NotFound.vue';
import test from '../components/page/test.vue';
import ToDoMain from '../components/page/ToDoMain.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound  },
        { path: '/test', component: test },
        { path: '/main', component: ToDoMain}
    ]
})
export default router;