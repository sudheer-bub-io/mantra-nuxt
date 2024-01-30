<script setup>
import { currentUser } from '@/stores/myStore';
import { useRouter } from 'vue-router';
const router = useRouter();
const user = currentUser();
const btnShowed = ref(false)
function logoutUser(){
  router.push("/")
}
function showLogoutBtn(){
  btnShowed.value=!btnShowed.value
}
</script>
<template>
    <div
      class="fixed top-0 z-50 w-full bg-gradient-background2 bg-180% animate-gradient-animation bg-slate-500 h-16 flex items-center  ">
      <img class="w-18 h-16 mx-10" src="@/assets/images/learn.png" alt="book" />
      <h1 class="flex-auto w-64 text-xl text-white font-bold xl:text-3xl">Mantra NuxtJs Learnings</h1>
      <div class="flex">
        <img class="w-18 h-18   " width="68" height="48" src="@/assets/images/sudheer.png" alt="Sudheer" @click="showLogoutBtn" />
        <p class="ml-3 mr-4">{{user.User}}</p>
        <div v-if="user.User">
          <div v-if="btnShowed">
            <button @click="logoutUser" class="bg-orange-400 text-white w-20 rounded-md h-8 mt-4">logout</button>
          </div>
        </div>
      </div>
    </div>
</template>