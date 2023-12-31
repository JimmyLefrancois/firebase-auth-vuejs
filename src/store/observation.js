import {defineStore, storeToRefs} from "pinia";
import { useUserStore } from "@/store/user";
import {computed} from "vue";

const store = useUserStore()

const { loggedUser } = storeToRefs(store)
console.log(loggedUser.value)

const observation = computed(() => {
  return {
    user: loggedUser.value
  }
})

export const useObservationStore = defineStore('observations', () => {


  return {observation}
})
