<script>
import { reactive, toRefs, inject, ref } from 'vue'
import CalendarSVG from '../../../assets/calendar-svg.vue';
import ToDoMethod from '../../api/ToDoMethod';


export default {
  name: 'TodoListNew',
  props:{
    listupdate: {
        type: Boolean,
    }
  },
  setup(props) {
    const state = reactive({
            title : "",
            enddate : ""
        })
    const date = ref(new Date());
    const qwer = 0;
    const popover = ref({
      visibility: 'click',
      placement: 'right',
    });
    const UpDate_Title = (event) =>{
            var updatedText = event.target.value;
            state.title = updatedText;
        }
    const TodoPost = async() => {
          asdf();
          console.log(state.title)
          console.log(state.enddate)
          if(state.title == "" || state.title == null){
              alert("빈값오류");
          }else{
              await ToDoMethod.TODO_POST(state.title, state.enddate);
              props.listupdate = !props.listupdate
          }
        }

    const asdf = () => {
       var js_date = new Date(date._value);

        // 연도, 월, 일 추출
        var year = js_date.getFullYear();
        var month = js_date.getMonth() + 1;
        var day = js_date.getDate();

        // 월, 일의 경우 한자리 수 값이 있기 때문에 공백에 0 처리
        if(month < 10){
          month = '0' + month;
        }

        if(day < 10){
          day = '0' + day;
        }

        // 최종 포맷 (ex - '2021-10-08')
        state.enddate =  year + '-' + month + '-' + day;
    }
    return {
      state,
      date,
      popover,
      asdf,
      UpDate_Title,
      TodoPost
    }
  },
  components: {
    CalendarSVG,
  },
}
</script>


<template>
  <section class="mb-5" >
    <div class="w-full h-14">

        <div class="flex border-solid justify-center space-x-24">
          <input
            type="text"
            id="todo_input"
            class="flex-initial w-2/5 h-10 border-slate-950 rounded-md border-2"
            v-bind:value="state.title" 
            v-on:input="UpDate_Title($event)"
            placeholder="여기에 할일을 적으세요"
          />

          <div class="flex-initial">
         
            <div class="col-6">
              <button
                type="button"
                class="btn btn-primary btn-sm float-end h-10 border-slate-950 rounded-md border-2"
                @click="TodoPost()"
              >
                작업추가
              </button>
            </div>
          </div>
    
      </div>
 
      </div>
      <VDatePicker v-model="date" :popover="false">
        <template #default="{ togglePopover, inputValue, inputEvents }">
          <div
            class="flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden w-min"
          >
            <button
              class="flex justify-center items-center px-2 bg-accent-100 hover:bg-accent-200 text-accent-700 border-r border-gray-300 dark:bg-gray-700 dark:text-accent-300 dark:border-gray-600 dark:hover:bg-gray-600"
              @click="togglePopover()"
            >
              <CalendarSVG class="w-5 h-5" />
            </button>
            <input
              :value="inputValue"
              v-on="inputEvents"
              class="flex-grow px-2 py-1 bg-white dark:bg-gray-700"
              
            />
          </div>
        </template>
    </VDatePicker>
  </section>
</template>