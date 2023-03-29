
<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  methods: {
    updateInput: function(event, num) {
      var updatedText = event.target.value;
      if(num == 1 ){
        this.firstName = updatedText;
      }else if(num == 2 ){
        this.lastName = updatedText;
      };
      
  },
  change: function() {
    const  Value = [this.firstName, this.lastName];
    console.log(Value)
    //set(Value);
  }
},
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) { 
        // 참고: 분해 할당 문법을 사용함.
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  }
}
</script>

<template>
    <p>{{ fullName }}</p>
    <span>firstName : </span>
    <input v-bind:value="firstName" v-on:input="updateInput($event, 1)"/>
    <p></p>
    <span>lastName : </span>
    <input v-bind:value="lastName" v-on:input="updateInput($event, 2)"/>
    <p></p>
    <button @click="change">change</button>
    
</template>