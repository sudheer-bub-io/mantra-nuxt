<script setup>
import { crudusers } from "../stores/myStore"
const employeeData = crudusers();
const employeeFormdata = ref(employeeData.submitUser)
const buttonTxt = "AddUser"
const buttonTxt2 = "UpdateUser"
const crudType = "uservalues"
const adduserClicked = ref(false)
const beforeUpdatedEmployeeValues = ref([])
const deleteId = ref(null)
const addUser = ref(true)
definePageMeta({
  layout: 'custom'
});

const handleAddEmployee = (formData) => {
  console.log(formData)
  const addEmployee = {
    id: employeeData.generateRandomNumber(),
    name: formData.userName,
    age: formData.userAge
  }
  employeeData.addEmployee(addEmployee, crudType)
  adduserClicked.value = !adduserClicked.value
}
function onUpdateEmployee(id, name, age) {
  addUser.value=false
  console.log(id)
  deleteId.value = id
  employeeData.updateUserClicked = !employeeData.updateUserClicked
  const obj2 = [
    { id: 1, type: "text", name: "userName", placeholder: "userName", value: name },
    { id: 2, type: "text", name: "userAge", placeholder: "UserAge", value: age },
  ]
  beforeUpdatedEmployeeValues.value = obj2;
}

function handleUpdateEmployee(formData) {
  addUser.value=true
  const updatedObject = {
    id: deleteId.value,
    name: formData.userName,
    age: formData.userAge
  };
  employeeData.onUpdated(updatedObject, crudType);
}
function deleteEmployee(id) {
  employeeData.deleteEmployee(id, crudType)
}
</script>

<template>
  <div class="m-3" v-if="addUser">
    <FormComponent :fields="employeeFormdata" @onSubmit="handleAddEmployee" :submitButtonText="buttonTxt" :formMessage="buttonTxt" />
  </div>
  <div v-if="!addUser" class="m-3">
    <FormComponent :fields="beforeUpdatedEmployeeValues" @onSubmit="handleUpdateEmployee"
      :submitButtonText="buttonTxt2" :formMessage="buttonTxt2" />
  </div>
  <div class="flex">
    <div  v-for="item in employeeData.alldata.uservalues" :key="item.id">
      <div class="w-56 h-36 rounded-lg bg-stone-100  border border-stone-400 m-5 shadow shadow-teal-900">
        <p class="text-lg p-2"><span class="">user : </span>{{ item.name }}</p>
        <p class="text-lg p-2"><span class="">age :</span> {{ item.age }}</p>
        <div class="flex  ml-3">
          <button @click="onUpdateEmployee(item.id, item.name, item.age)" class="bg-orange-400 rounded-lg w-16 h-8 m-3 text-white">Update</button>
          <button  @click="deleteEmployee(item.id)"  class="bg-red-900 rounded-lg w-16 text-white h-8 m-3">Delete</button>
      </div>
      </div>
    </div>
  </div>
</template>

<style>
.styled-table {
  width: 80%;
  margin-left: 10%;
  border-collapse: collapse;
}

.styled-table th,
.styled-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.styled-table th {
  background-color: #f2f2f2;
}</style>