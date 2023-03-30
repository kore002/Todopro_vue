
<script>
import { reactive,  ref, readonly, provide } from 'vue';
import TodoList from './TodoList.vue';
import ToDoMethod from '../../api/ToDoMethod';
export default {
    name: 'TodoListContainer',
    components: {
        TodoList,
    },
    setup(){
        const state = reactive({
            title : "",
            setTODOList: [],
            putTODOList: {
                prevPosX: -1,
                edittitle : '',
                edit: false,
                todoitem: {},
            },
        })
        const todos = ref([]);
        provide('todos', readonly(todos))
        
        const addTodo = (todo, date) => {}
        const removeTodo = (id) => {}
        const completeTodo = (id) => {}

        provide('addTodo', addTodo);
        provide('removeTodo', removeTodo);
        provide('completeTodo', completeTodo);
        
        const TodoGetList = () => {
           ToDoMethod.TODO_GET().then(
                data => {
                    console.log(data);
                    todos.value = data;
                    state.setTODOList = data;
                });
        }
        return{
            todos,
            state,
            TodoGetList
        }
    },
    created() {
        this.TodoGetList();
    },
}


</script>

<template>
    <h2>==TODO==</h2>
    <ul>
        <li v-for="(item, index) in state.setTODOList">
            <TodoList 
                :todo = item
                :no = index        
            />
        </li>
    </ul>
    <h2>=======</h2>
   
</template>