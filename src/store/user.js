import {defineStore} from "pinia";
import { auth } from '@/plugins/firebase'
import {computed, ref} from "vue";
import {signInAnonymously} from "firebase/auth";

export const useUserStore = defineStore('users', () => {

  const currentUser = ref(null)

  function setCurrentUser(user) {
    currentUser.value = user
  }

  const loggedUser = computed(() => {
    return currentUser.value
  })

  function fetchUser() {
    auth.onAuthStateChanged(async user => {
      if (user) {
        console.log(user.uid)
        setCurrentUser(user)
      } else {
        signInAnonymously(auth)
      }
    })
  }

  return {
    loggedUser,
    currentUser,
    fetchUser
  }
})
