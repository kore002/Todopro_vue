<script>
import ItemButton from '../../assets/button.vue';
import ToDoMethod from  "../../api/ToDoMethod";
import Dateformet from "../../assets/method/Dateformet";
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
    const dateCal = () => {
      const Today = Dateformet.dateCalfomet(Dateformet.dateViewformet(new Date())); 
      const Dday = Dateformet.dateCalfomet(props.todo.todoed);
     
      if(Today > Dday){
        console.log("TODAY _ " + Today);
        console.log("D-DAY _ " + Dday);
        
        return false;
      }else {
        console.log("TODAY _ " + Today);
        console.log("D-DAY _ " + Dday);
        
        return true;
      }
      //return false
    }
    return{
        edit,
        del,
        dateCal
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
    <span :class="dateCal() ? 'text-stone-950' : 'text-red-500'" class="mr-5">{{ todo.todoed }}</span>
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