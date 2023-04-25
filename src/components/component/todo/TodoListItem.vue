<script>
import ItemButton from '../../assets/button.vue';
import ToDoMethod from  "../../api/ToDoMethod";
import Datefomet from "../../assets/method/datefomet";
export default {
  name: 'TodoListItem',
  components: {
    ItemButton,
  },
  
  props:{
    todo: {
        type: Object,   
    },
    no: {
        type: Number,
    },
    onUpdate: {
        type: Boolean,
    },
  },
  setup(props, context){
    const edit = () =>{
        console.log('###');
    }
    const del = async() =>{
      const todoid = props.todo.todoid
      console.log(props.todo);
      await ToDoMethod.TODO_DEL(todoid);
      context.emit("TodoGetList");
    }
    return{
        edit,
        del
    }
  },
  emits:[
    'TodoGetList'
  ] 
}

</script>
<template>
    <div className="flex flex-row">

    <span className="basis-1/2">{{no+1}} - {{ todo.todotitle }}</span>
    <span class="mr-5">{{ todo.todoed }}</span>
    <ItemButton 
        text = "edit"
        :OnClick = edit
        />
    <ItemButton
        text = "del"
        :OnClick = del
        />
    </div>
</template>