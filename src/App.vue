<template>
  <router-view />
</template>

<script setup>
  import {onBeforeMount} from "vue";
  import { useUserStore } from "@/store/user";

  const store = useUserStore()
  const { fetchUser } = store

  onBeforeMount(() => {
    fetchUser()
  })
</script>
