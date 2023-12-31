import {defineStore, storeToRefs} from "pinia";
import { useUserStore } from "@/store/user";
import {computed, ref} from "vue";
import { db } from '@/plugins/firebase'
import { collection, where, getDocs,query } from "firebase/firestore";

export const useObservationStore = defineStore('observations', async () => {

  const store = useUserStore()
  const { loggedUser } = storeToRefs(store)

  const observation = ref({})

  // const queryItem = computed(() => {
  //   return query(collection(db, 'observations'), where("user", "==", loggedUser.value.uid));
  // })
  //
  // const observationsListItem = computed(async () => {
  //   const querySnapshot = await getDocs(queryItem.value);
  //   const truc = []
  //   querySnapshot.forEach((doc) => {
  //     truc.push(doc.data())
  //   });
  //   return truc
  // })

  return {
    observation
  }
})
