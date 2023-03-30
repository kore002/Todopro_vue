<script>
import ButtonS from '../../assets/Button.vue';
export default {
  components: {
    ButtonS
  },
  
  props:{
    todo: {
        type: Object,
    },
    no: {
        type: Number,
    }
  },
  setup(){
    const edit = () =>{
        console.log('###');
    }
    const del = () =>{
        console.log('@@@');
        // console.log(index)
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
    
    <ButtonS 
        text = "edit"
        :OnClick = edit
        />
    <ButtonS 
        text = "del"
        :OnClick = del
        />
    </div>
</template>