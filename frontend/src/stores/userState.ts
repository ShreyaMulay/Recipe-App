import { defineStore } from 'pinia';
import { ref } from 'vue';

export const userState = defineStore('state', () => {
 let userinfo = ref();

 return {
    userinfo,
 } 
})