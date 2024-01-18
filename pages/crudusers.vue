<script setup>
import { Crudusers } from "../stores/myStore"
definePageMeta({
    layout:'custom'
})
const users = Crudusers();
</script>
<template>
    <div class="flex justify-center">
        <CrudUsersAddUser />
    </div>
        <div class="flex ">
            <CrudUsersViewAndHandelUsers />
        </div>
</template>