<script setup>
import { currentUser } from '@/stores/myStore';
const user = currentUser();
</script>
<template>
    <div
      class="fixed top-0 z-50 w-full bg-gradient-background2 bg-180% animate-gradient-animation bg-slate-500 h-16 flex items-center  ">
      <img class="w-18 h-16 mx-10" src="@/assets/images/learn.png" alt="book" />
      <h1 class="flex-auto w-64 text-xl text-white font-bold xl:text-3xl">Mantra NuxtJs Learnings</h1>
      <div class="flex">
        <img class="w-18 h-18   " width="68" height="48" src="@/assets/images/sudheer.png" alt="Sudheer" @click="showLogoutBtn" />
        <p class="ml-3 mr-4">{{user.User}}</p>
      </div>
    </div>
</template>