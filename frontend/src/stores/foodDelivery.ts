import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFoodStore = defineStore('foodStore', () => {
  const foodRestaurants = ref([]);
  const foodPills = ref([]);
  const cartItems =ref([]);

  return { foodRestaurants, foodPills,cartItems }
})
