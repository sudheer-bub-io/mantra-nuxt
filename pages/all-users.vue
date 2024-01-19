<!-- pages/index.vue -->
<script setup>
import { userDataStore } from "../stores/myStore";
import { usersdata } from "../stores/myStore";
definePageMeta({
  layout: 'custom'
})
const usestore = userDataStore();
const userdata = usersdata();
console.log(userdata.users)
console.log(usestore.data)
onMounted(async () => {
  await userdata.fetchUsers();
});
</script>
<template>
  <div>
    <div class="ml-24">
      <div v-if="userdata.users" class="grid grid-rows-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
        <div v-for="data in userdata.users" :key="data.id">
          <Users :userData="data" />
        </div>
      </div>
    </div>
  </div>
</template>
