<script setup>
import {enteredColor } from "../stores/myStore"
const checkColor = enteredColor();
const colorArray = ['green', 'orange'];

function randomNumber1or2() {
    return Math.floor(Math.random() *2);
}
const randomNumber = randomNumber1or2();
const myArray = colorArray[randomNumber]

function userClicked(value) {
    if (value == myArray) {
        navigateTo("/rock-paper-scissor")
        checkColor.userColor=false;
        console.log("Same");
    } else {
        console.log("Not Same");
    }
}
</script>
<template>
    <div class="flex justify-center bg-slate-500 w-1/2 items-center m-96">
        <div class="bg-green-300 p-4 m-2 p-24" @click="()=>userClicked(`green`)"></div>
        <div class="bg-red-300 p-4 m-2 p-24" @click="()=>userClicked(`orange`)"></div>
        <h1> Click On {{myArray}}</h1>
    </div>
   
</template>