import { createRouter, createWebHistory } from 'vue-router';

import NotFound from '../components/page/NotFound.vue';
import test from '../components/page/test.vue';
import ToDoMain from '../components/page/ToDoMain.vue'
import TodoListContainer from '../components/component/todo/TodoListContainer.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ToDoMain },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound  },
        { path: '/test', component: test },
        { path: '/main', component: TodoListContainer}
    ]
})
export default router;