<script setup>
const type = "Student Form"
const array = [
    {
        id:1,
        type:"text",
        name:"student Id",
        placeholder:"Student Id"
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
        type:"textArea",
        name:"Enter Query",
        placeholder:"Enter Query"
    },
    {
        id:5,
        type:"text",
        name:"Enter Something",
        placeholder:"Enter Something"
    },
]
;
</script>
<template>
    <FormsFirstFormComponent :name="array" :formtype="type" />
</template>