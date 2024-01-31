<template>
    <div class="flex flex-col bg-slate-500 justify-center items-center m-80 ml-96 w-80">
        <div v-for="color in shuffledColors" class="flex flex-col">
            <p class="text-white">{{color}}</p>
        </div>
        <div class="flex justify-center items-center">
          <div>
            <div class="bg-green-300 p-4 m-2 p-24 w-24 h-16" @click="() => userClicked('green')" :id="{ 'blur-sm': userEnteredArray.includes('green') }"></div>
            <div class="bg-blue-300 p-4 m-2 p-24 w-24 h-16" @click="() => userClicked('blue')" :id="{ 'blur-sm': userEnteredArray.includes('blue') }"></div>
          </div>
          <div>
            <div class="bg-pink-300 p-4 m-2 p-24 w-24 h-16" @click="() => userClicked('pink')" :id="{ 'blur-sm': userEnteredArray.includes('pink') }"></div>
            <div class="bg-orange-300 p-4 m-2 p-24 w-24 h-16" @click="() => userClicked('orange')" :id="{ 'blur-sm': userEnteredArray.includes('orange') }"></div>
          </div>
        </div>
        <button @click="handelColorCheck" class="w-24 bg-orange-500 h-10 m-10 rounded-md text-white">submit</button>
    </div>
  
  </template>
  
  <script setup>
  import { enteredColor } from "../stores/myStore"
  const checkColor = enteredColor();
  
  const userEnteredArray = [];
  
  const userClicked = (value) => {
    if (!userEnteredArray.includes(value)) {
      userEnteredArray.push(value);
    }
  };
  
  function handelColorCheck(){
    if (arraysAreEqual(shuffledColors, userEnteredArray)) {
      navigateTo("/rock-paper-scissor")
      checkColor.userColor=false;
    } else {
      console.log("Not Same");
    }
  }
  
  function arraysAreEqual(array1, array2) {
    const string1 = JSON.stringify(array1);
    const string2 = JSON.stringify(array2);
    return string1 === string2;
  } 
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  const colors = ["green", "blue", "pink", "orange"];
  const shuffledColors = shuffleArray(colors);
  </script>
  
  <style scoped>
  #blur-sm {
    filter: blur(5px);
    background-color: black;
    border-color: brown;
  }
  </style>
  