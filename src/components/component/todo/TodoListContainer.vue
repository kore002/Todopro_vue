
<script>
import { reactive,  ref, readonly, provide } from 'vue';
import TodoListItem from './TodoListItem.vue';
import TodoListNew from './TodoListNew.vue';
import ToDoMethod from '../../api/ToDoMethod';

export default {
    name: 'TodoListContainer',
    components: {
        TodoListItem,
        TodoListNew
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
            onUpdate: false,
            listupdate: false,

        })
        const todos = ref([]);
        // provide('todos', readonly(todos))
  
        const TodoGetList = () => {
           ToDoMethod.TODO_GET().then(
                data => {
                    console.log(data);
                    todos.value = data;
                    state.setTODOList = data;
                });
        }
        const qwer = () =>{
            console.log("qwer")
        }
        return{
            todos,
            state,
            TodoGetList,
            qwer
        }
    },
    created() {
        this.TodoGetList();
    },
    watch: {
        // onUpdate(newOnUpdate){
        //     this.TodoGetList()
        // }
        onUpdate(newlistupdate){
            this.TodoGetList()
        }
    },
}


</script>

<template>
    <div class="flex place-content-center ">
        <div class="w-1/2 mt-10">
            <h2 class="flex place-content-center mb-10">==TODO==</h2>
            <TodoListNew 
                :listupdate = state.listupdate
            />

            <br/>
            <ul>
                <li v-for="(item, index) in state.setTODOList">
                    <TodoListItem 
                        :todo = item
                        :no = index
                    />
                </li>
            </ul>
            <h2 class="flex place-content-center mt-10">=======</h2>
        </div>

   
    </div>

</template>