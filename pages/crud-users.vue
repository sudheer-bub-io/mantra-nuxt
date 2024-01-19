<script setup>
import { crudusers } from "../stores/myStore"
definePageMeta({
    layout: 'custom'
})
const users = crudusers();
console.log("Hi from pages crud")
console.log(users.uservalues);
</script>
<template>
    <div class="flex justify-center">
        <CrudUsersAddUser />
    </div>
    <div>
        <CrudUsersViewAndHandelUsers />
    </div>
</template>