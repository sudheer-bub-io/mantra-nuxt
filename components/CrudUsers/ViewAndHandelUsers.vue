<script setup>
import { crudusers } from "@/stores/myStore";
const users = crudusers();
</script>
<template>
  <div>
    <div class="flex">
      <div v-if="users.updateButtonClicked">
        <div class="emitFormContainer bg-slate-300">
          <h2 class="text-center p-5 text-xl font-medium ">Update Users</h2>
          <form @submit.prevent="users.onUpdateUserClicked">
              <div class="form-container">
                  <div class="form-group">
                    <p>{{users.id}}</p>
                      <label for="name" class="myLabel">Name:</label>
                      <input type="text" id="name" v-model="users.updateuserName"
                          class="mr-10 border h-10 border-gray-300 rounded-lg" />
                  </div>
                  <div class="form-group">
                      <label for="age" class="myLabel">Age:</label>
                      <input type="text" id="age" v-model="users.updateuserAge"
                          class="mr-10 border h-10 border-gray-300 rounded-lg" />
                  </div>
              </div>
              <button type="submit" class="formButton">Update</button>
          </form>
      </div>

      </div>
      <div class="users" v-for="user in users.uservalues" :key="user.id">
        <p class="text-xl pt-5 pl-5"><span class="formSpan">userName : </span>{{ user.name }}</p>
        <p class="text-xl pl-5"><span class="formSpan">age :</span> {{ user.age }}</p>
        <div class="flex">
          <button @click="() => users.onUpdateUser(user.id,user.name,user.age)" id="deleteButton">Update</button>
          <button @click="() => users.onDeleteUser(user.id)" id="deleteButton" class="bg-blue-400">delete</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.users {
  width: 250px;
  height: 180px;
  margin: 30px;
  border-radius: 10px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

#deleteButton {
  display: block;
  width: 80px;
  height: 35px;
  border-radius: 20px;
  border: none;
  font-size: 18px;
  background-color: orange;
  margin-top: 10px; 
  margin-left: 30px;
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
.emitFormContainer {
  width: 400px;
  height: 290px;
  margin-left: 30%;
  margin: 30px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

.formButton {
  display: block;
  width: 120px;
  height: 45px;
  border-radius: 20px;
  border: none;
  font-size: 18px;
  background-color: lightgreen;
  margin-left: 38%;
  margin-top: 30px;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-group {
  display: flex;
  align-items: center;
}

.myLabel {
  margin-right: 10px;
  width: 80px;
  margin-left: 30px;
}

.emitInput {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
