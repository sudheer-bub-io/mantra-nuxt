<script setup>
import { crudusers } from "../stores/myStore"
definePageMeta({
    layout: 'custom'
})
const users = crudusers();
</script>
<template>
    <div class="flex justify-center">
        <CrudUsersAddUser />
    </div>
    <div>
        <CrudUsersViewAndHandelUsers />
    </div>
</template>