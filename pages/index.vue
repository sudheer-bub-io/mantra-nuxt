<template>
    <h1>Hello From Home</h1>
</template>
<script setup>
definePageMeta({
    middleware: "auth"
})
const isLogin = true;

</script>