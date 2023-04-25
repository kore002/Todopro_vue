<template>
      <div>
        <button @click="plus()" class="bg-stone-200 mr-8">earn money</button>
        <button @click="minus()" class="bg-stone-200 mr-8">spend money</button>
        <input type="text" v-model="localParam" />
        <div>{{ localParam }}</div>
      </div>
  </template>
  <script>
//import {onUpdated, reactive} from "vue";

  export default{
    props:{
        count:{
            type: Number,
        }
    },
    computed: {
        localParam: {
            get: function() {
                return this.count
            },
            set: function(value) {
                this.$emit('input', count) 
            }
        }
    },
    setup() {
    const plus = () =>{
      
       this.localParam += 100;
    }
    const minus = () =>{
        this.localParam -= 100;
    }
      return{
        plus,
        minus
      }
    }
  }
  </script>
  