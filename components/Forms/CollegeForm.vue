<script setup>
const type = "College_Form"
const data = [
    {
        id:1,
        type:"text",
        name:"reference Id",    
        placeholder:"refernnce Id"
    },
    {
        id:2,
        type:"text",
        name:"Name",
        placeholder:"user Name"
    },
    {
        id:3,
        type:"text",
        name:"Email",
        placeholder:"Enter Your Email"
    },
    {
        id:4,
        type:"text",
        name:"student Id",
        placeholder:"Student Id"
    },
  ]
</script>
<template>
    <FormsFirstFormComponent :name="data" :formtype="type"/>
</template>