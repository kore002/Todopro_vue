
<script>
import { reactive,  ref, readonly, provide } from 'vue';
import TodoListItem from './TodoListItem.vue';
import TodoListNew from './TodoListNew.vue';
import ToDoMethod from '../../api/ToDoMethod';
import TodoListMenu from './TodoListMenu.vue';
import Dateformet from '../../assets/method/Dateformet';
export default {
    name: 'TodoListContainer',
    components: {
        TodoListItem,
        TodoListNew,
        TodoListMenu
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
        // provide('todos', readonly(todos))
  
        const TodoGetList = () => {
           ToDoMethod.TODO_GET().then(
                data => {
                    console.log(data);
                    todos.value = data;
                    state.setTODOList = data;
                });
        }
        const qwer = (param) =>{
            const Today = Dateformet.dateCalfomet(Dateformet.dateViewformet(new Date()));
            var list = [];
            
            console.log(param);
            
            if(param.id == 1){
                TodoGetList();
            }else{
                ToDoMethod.TODO_GET().then(
                    data => {
                        data.forEach(element => {
                            const Dday = Dateformet.dateCalfomet(element.todoed);
                            if(param.id == 2){
                                if(Today>Dday){
                                    list.push(element);
                                }
                            }else{
                                if(Today<=Dday){
                                    list.push(element);
                                }
                            }
                        });  
                        todos.value = list;
                        state.setTODOList = list;

                    })
                }
            // state.listupdate = ! state.listupdate;
        }
        return{
            todos,
            state,
            TodoGetList,
            qwer,
        }
    },
    created() {
        this.TodoGetList();
    },
    watch: {
        
    },
}


</script>

<template>
    <div class="flex place-content-center ">
        <div class="w-1/2 mt-10">
            <h2 class="flex place-content-center mb-10">==TODO==</h2>
            <TodoListNew 
                @TodoGetList = TodoGetList
           
            />
            <TodoListMenu  
                @qwer = qwer
             />
            <br/>
            <ul>
                <li v-for="(item, index) in state.setTODOList">
                    <TodoListItem 
                        :todo = item
                        :no = index
                        @TodoGetList = TodoGetList
                    />
                </li>
            </ul>
            <h2 class="flex place-content-center mt-10">=======</h2>
        </div>
    </div>

</template>