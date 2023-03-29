<script>
import { onMounted, onUpdated, vModelCheckbox } from 'vue';


export default {
    data() {
        return {
            title: ""
            
        };
    },
    data() {
        return {
          settodolist: []
        };
    },
    data() {
        return {
          BASE_URL: import.meta.env.VITE_SOME_TODO_BASE_URL
        };
    },
    methods: {
        updateInput(event) {
            var updatedText = event.target.value;
            this.title = updatedText;
        },
        async todoget() {
            await this.$axios.get("http://localhost:8087/api/v1/todolist")
                .then(res => {  
                console.log(res.data);
                this.settodolist = res.data;               
            }).catch(error => {
                console.log(error.data);
            })
        },
        async todopost() {
            const url = import.meta.env.VITE_SOME_TODO_BASE_URL+import.meta.env.VITE_SOME_TODO_POST_URL;
            if(this.title == "" || this.title == null){
                alert("빈값오류");
            }else{
                const data = {
                    todotitle: this.title
                };
                console.log(url);
                await this.$axios.post(url, data)
                    .then(res => {
                    console.log(res);
                    this.todoget();
                })
                    .catch(function (error) {
                    console.log(error);
                });
            }
            
        },
        async todochecked(TODOid, TODOcheck) {
            const url = "http://localhost:8087/api/v1/todocheck";
            const data = {
                todocheck: TODOcheck,
                todoid: TODOid
            };
            await this.$axios.post(url, data)
                .then(res => {
                this.todoget();
            })
                .catch(function (error) {
                console.log(error);
            });
        },
        async tododel(TODOid) {
            const url = "http://localhost:8087/api/v1/tododel";
            const data = {
                todoid: TODOid
            };
            await this.$axios.post(url, data)
                .then(res => {
                this.todoget();
            })
                .catch(function (error) {
                console.log(error);
            });
        },
    },
    created() {
        // 메서드는 생명 주기 훅 또는 다른 메서드에서 호출할 수 있습니다!
        this.todoget();
    },
}

</script>

<template>
    <div class="item">
      <h1>TODO</h1>

      <input v-bind:value="title" v-on:input="updateInput($event)"/>
      <button @click="todopost()">post</button>


      <br/>
      <div>
        <ul>
          <li v-for="(item,index) in this.settodolist">
            <span v-if="item.todocheck == 'Y'" style="text-decoration: line-through">
              {{ index+1 }} - {{ item.todotitle }}
            </span>
            <span v-else>{{ index+1 }} - {{ item.todotitle }}</span>
            <input type="checkbox" v-if="item.todocheck == 'N'" @change="todochecked(item.todoid, item.todocheck)">
            <input type="checkbox" v-if="item.todocheck == 'Y'" @change="todochecked(item.todoid, item.todocheck)" checked>
            <button @click="tododel(item.todoid)">del</button>
          </li>
        </ul>

      </div>
    </div>
</template>