<script>
// import { Options ,inject } from 'vue';

export default {
    props: {
        text: {
            type: String,
        },
        OnClick:{
            type: Function,
        }
    }
}
</script>
<template>
    <button 
    class="w-20 rounded-md  bg-cyan-200"
    @click="OnClick">{{ text }}</button>    
</template>