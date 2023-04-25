<template>
  <div class="ml-10 mt-10">
    <h1>Watchers</h1>
    <h2>current money :: {{ state.money }}</h2>
    <Test_Ch
      :count = state.money @input="state.money = $event"
      />
    <div>
      <button @click="state.money += 100" class="bg-stone-200 mr-8">earn money</button>
      <button @click="state.money -= 100" class="bg-stone-200 mr-8">spend money</button>

    </div>
  </div>
</template>
<script>
import {onUpdated, reactive} from "vue";
import Test_Ch from "./test_ch.vue";

export default{
  components: {
    Test_Ch
  },
  setup() {
    const state = reactive({
          money: 0,
    })
    return{
      state
    }
  }
}
</script>
