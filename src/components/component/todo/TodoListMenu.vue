<script>

import {ref, watch, reactive} from 'vue';
export default {
  name: 'TodoListMenu',
  setup(){
    const state =reactive({
        perPageList: [
        {
          id:1,
          value: 5,
          text:"모든 작업"
        },
        {
          id:2,
          value: 10,
          text:"지난 작업"
        },
        {
          id:3,
          value: 15,
          text:"현재 작업"
        }
      ],
      perPage: 10 
    })


    const asdfqwer = (e) => {
        
        console.log(e.target.key);
   
    }
    watch(() => state.perPage, (newValue, oldValue) => {
      console.log('state.perPage 의 변이가 감지되었을 때 ', {newValue, oldValue})
    })
    return{
        state
        ,asdfqwer
    }
  },
//   watch: {
//     asdf : function(){
//         console.log("Asdf")
//     },
//     perPage() {
//       console.log(state.perPage) // 5, 10, 15 가 콘솔에 찍힌다.
//     }
//   },
}
</script>
<template>
    <div>
        todolistmenu
        <div  class="flex justify-end">
            <h4>모든작업</h4>
            <select v-model="state.perPage" @change="asdfqwer($event)">
                <option v-for="data in state.perPageList" :key="data.id" :value="data.id">{{ data.text }}</option>
            </select>
        </div>
        <button @click="asdfqwer()">asdfqwer</button>
    </div>
</template>


