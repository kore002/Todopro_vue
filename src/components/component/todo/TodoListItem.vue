<script>
import { async } from 'q';
import ItemButton from '../../assets/button.vue';
import ToDoMethod from  "../../api/ToDoMethod";
export default {
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
  setup(props){
    const edit = () =>{
        console.log('###');
    }
    const del = async() =>{
      const todoid = props.todo.todoid
      console.log(props.todo);
      await ToDoMethod.TODO_DEL(todoid);
      
    }
    
    return{
        edit,
        del
    }
  },
  
}

</script>
<template>
    <div className="flex flex-row">

    <span className="basis-1/2">{{no+1}} - {{ todo.todotitle }}</span>
    
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