<template>
  <div>
    <div class="flex">
      <div class="users" v-for="user in users.uservalues" :key="user.id">
        <p class="text-xl pt-5 pl-5"><span class="formSpan">userName : </span>{{ user.name }}</p>
        <p class="text-xl pl-5"><span class="formSpan">age :</span> {{ user.age }}</p>
        <button @click="() => users.onDeleteUser(user.id)" class="deleteButton">delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { crudusers } from "@/stores/myStore";
const users = crudusers();
console.log(users.uservalues);
</script>

<style>
.users {
  width: 250px;
  height: 160px;
  margin: 30px;
  border-radius: 10px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

.deleteButton {
  display: block;
  width: 80px;
  height: 35px;
  border-radius: 20px;
  border: none;
  font-size: 18px;
  background-color: orange;
  margin-left: 58%;
}

.userInfo {
  font-size: 22px;
}

.formSpan {
  width: 80px;
  color: gray;
  font-weight: 800px;
}

p {
  margin-top: 20px;
}
</style>
