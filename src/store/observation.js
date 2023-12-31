import {defineStore, storeToRefs} from "pinia";
import { useUserStore } from "@/store/user";
import {computed, ref} from "vue";
import { db } from '@/plugins/firebase'
import { collection, where, getDocs,query } from "firebase/firestore";

export const useObservationStore = defineStore('observations', async () => {

  const store = useUserStore()
  const { loggedUser } = storeToRefs(store)
  console.log(loggedUser.value)

  const observationsList = ref([])

    console.log('yo')
    const q = query(collection(db, 'observations'), where("user", "==", loggedUser.value.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      observationsList.value.push(doc.data())
    });

  return {
    observationsList
  }
})
