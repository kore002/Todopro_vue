<script>

import ToDoMethod from "../api/ToDoMethod";
import {reactive} from "vue";

export default{
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
        const UpDate_Title = (event) =>{
            var updatedText = event.target.value;
            state.title = updatedText;
        }
        const UpDate_EditTitle = (event) =>{
            var updatedText = event.target.value;
            state.putTODOList.edittitle = updatedText;
        }
        const TodoPost = async() => {
            if(state.title == "" || state.title == null){
                alert("빈값오류");
            }else{
                await ToDoMethod.TODO_POST(state.title);
                TodoGetList();
            }
        }
        const TodoGetList = () => {
           ToDoMethod.TODO_GET().then(
                data => {
                    console.log(data);
                    state.setTODOList = data;
                });
        }
        const TodoDel = async(ID) => {
            await ToDoMethod.TODO_DEL(ID);
            TodoGetList();
        }
        const TodoCheck = async(ID, CHECK) => {
            await ToDoMethod.TODO_CHECK(ID, CHECK);
            TodoGetList();
        }
        const TodoPUT = async(ID, TITLE) =>{
            if(TITLE == "" || TITLE == null){
                alert("빈값오류");
            }else{
                await ToDoMethod.TODO_PUT(ID,TITLE);
                TodoGetList();
                TodoPUT_Open_Close();
            }
        }
        const TodoPUT_Open_Close = (index, item) => {
            if(state.putTODOList.edit){
                state.putTODOList.prevPosX='';
                state.putTODOList.edit=false;
                state.putTODOList.todoitem='';
                state.putTODOList.edittitle='';
            }else{
                state.putTODOList.prevPosX=index;
                state.putTODOList.edit=true;
                state.putTODOList.todoitem=item;
            }
            
        }
        return{
            // Title_state,
            state,
            
            UpDate_Title,
            TodoPost,
            TodoGetList,
            TodoDel,
            TodoCheck,

            TodoPUT_Open_Close,
            UpDate_EditTitle,
            TodoPUT,
        }
    },
    created() {
        this.TodoGetList();
    }

}


</script>


<template>
    <div class="item">
      <h1>TODO</h1>

      <input v-bind:value="state.title" v-on:input="UpDate_Title($event)"/>
      <button @click="TodoPost()">post</button>


      <br/>
      <div>
        <ul>
          <li v-for="(item,index) in state.setTODOList">
            <span v-if="item.todocheck == 'Y'" style="text-decoration: line-through">
              {{ index+1 }} - {{ item.todotitle }}
            </span>
            <span v-else>{{ index+1 }} - {{ item.todotitle }}</span>
                <p v-if="state.putTODOList.prevPosX === index">
                    <input type="text"
                            v-model="state.putTODOList.edittitle"
                            />
                    <button @click="TodoPUT(state.putTODOList.todoitem.todoid,state.putTODOList.edittitle)">put</button>
                    <button @click="TodoPUT_Open_Close()">X</button>
                </p>
     
              
            <span v-if="state.putTODOList.prevPosX !== index" >
            <input type="checkbox" v-if="item.todocheck == 'N'"
            @change="TodoCheck(item.todoid, item.todocheck)">
            <input type="checkbox" v-if="item.todocheck == 'Y'" @change="TodoCheck(item.todoid, item.todocheck)" checked>
            <button @click="TodoDel(item.todoid)">del</button>

            <button class="btn-edit" @click="TodoPUT_Open_Close(index, item)">Edit</button>
                
            </span>
          
          </li>
        </ul>

      </div>
    </div>
</template>