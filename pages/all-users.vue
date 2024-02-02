<script setup>
import { usersdata } from "../stores/myStore";
definePageMeta({
  layout: 'custom'
})
const userdata = usersdata();
console.log(userdata.userSearchInput)
onMounted(async () => {
  await userdata.fetchUsers();
});
</script>
<template>
  <div class=" flex flex-col">
      <div class="flex justify-end">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          
          <input type="text" class="rounded-md h-10 bg-slate-100 mt-2 border-none mr-5" placeholder="Search By User Name" v-model="userdata.userSearchInput"/>
        </div>
      </div>
      <div v-if="userdata.users" class="grid grid-rows-2  sm:grid-cols-2 md:grid-cols-3 ml-20 lg:grid-cols-4 gap-7">
        <div v-for="data in userdata.users" :key="data.id" class="group mt-6">
          <Users :userData="data" />
        </div>
      </div>
      <div v-if="userdata.users.length==0" class="flex justify-center items-center ">
        <img src="../assets/images/noResults.jpg">
      </div>
  </div>
</template>
