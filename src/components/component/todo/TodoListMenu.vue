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
        },
        {
          id:2,
          value: 10,
        },
        {
          id:3,
          value: 15,
        }
      ],
      perPage: 10 
    })


    const asdfqwer = () => {
        
        console.log(state.perPage);
   
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
        <div>
            <h4>모든작업</h4>
            <select v-model="state.perPage">
                <option v-for="data in state.perPageList" :key="data.id" :value="data.value">{{ data.value }}/page</option>
            </select>
        </div>
        <button @click="asdfqwer()">asdfqwer</button>
    </div>
</template>


