<script setup>
import { accessFormsData } from "@/stores/allData";
const logindata = accessFormsData();
console.log(logindata.loginData)
definePageMeta({
    layout: 'custom'
})
const type = "Log In to your account"
</script>
<template>
    <LoginRegister :logindata="logindata.loginData" :type="type"/>
</template>

