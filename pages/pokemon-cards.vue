<script setup>
import { Pokemon } from '@/stores/myStore';
import { onMounted } from 'vue';

definePageMeta({
  layout: 'custom'
});

const pokemon = Pokemon();

onMounted(async () => {
  await pokemon.fetchCards();
});
async function handelSubmit() {
  await pokemon.fetchCards();
}
function handelFavcard(){
  pokemon.userFavCards.push(pokemon.playCards)
  console.log(pokemon.userFavCards)
}
function goToFavCards(){
  navigateTo("/user-fav-cards")
}

</script>
<template>  
  <div class="flex  flex-col h-screen">
    <div class=" flex justify-between ml-10 mt-3">
      <button @click="goToFavCards" class="bg-green-500 text-white text-md w-24 h-8  rounded-md ">fav cards </button>
        <form @submit.prevent="handelSubmit">
          <input type="text" v-model="pokemon.searchedPokemon" class="bg-gray-200 rounded-md w-30 h-10 " />
          <button class="bg-green-600 h-10 w-20 rounded-md ml-2 border-none">Submit </button>
        </form>
    </div>
    <div class="">  
      <div v-if="pokemon.playCards" class="mx-auto my-4 max-w-md rounded-lg border border-black-900 shadow-md bg-gradient-background bg-180% animate-gradient-animation">
        <div style="background-image: url('{{ pokemon.playCards?.sprites?.front_default }}');" class="bg-cover bg-center  rounded-lg overflow-hidden shadow-md">
             <button @click="handelFavcard" class="bg-blue-400 text-white">Add to fav</button>
            <img :src="pokemon.playCards?.sprites?.front_default" class="w-44 ml-32" alt="Pokemon Image">
            <div class=" ">
                <h1 class="text-3xl text-white font-black mb-2 text-center">{{ pokemon.playCards.name }}</h1>
                <div class="flex justify-between mb-2 ">
                    <p class="text-lg  text-white font-extrabold">Height: {{ pokemon.playCards.height }}</p>
                    <p class="text-lg  text-white font-extrabold">Weight: {{ pokemon.playCards.weight }}</p>
                    <p class="text-lg  text-white font-extrabold">Rank: {{ pokemon.playCards.order }}</p>
                </div>
                <div :style="{ 'background-image': `url(${pokemon.playCards?.sprites?.back_shiny})`, 'background-repeat': 'no-repeat', 'background-size': 'cover' }" >
                  <h2 class="text-xl text-white ml-5 font-semibold ">Power:</h2>
                  <div  class="flex flex-wrap">
                    <div v-for="type in pokemon.playCards.types" :key="type.type.name" class="mr-2 mb-2 ml-6">
                        <p class="text-lg w-20 h-8 text-white text-center bg-blue-400 rounded-md">{{ type.type.name }}</p>
                    </div>
                </div>
                <h2 class="text-xl text-white ml-5 font-semibold">Base Stats:</h2>
                <div>
                  <div v-for="stat in pokemon.playCards.stats" :key="stat.stat.name" class="flex justify-between">
                    <p class="text-lg text-white font-medium ml-5">{{ stat.stat.name }}</p>
                    <p class="text-lg text-white font-medium  mr-10">{{ stat.base_stat }}</p>
                </div>
                </div>
                </div>
               
            </div>
        </div>
    </div>
    <div v-else>
        <h1>Loading......</h1>
    </div>
    </div>
  </div>
 
 
































    <!-- <div class="">
      <form @submit.prevent="handelSubmit">
        <input type="text" v-model="pokemon.searchedPokemon" class=" rounded-md  ml-40 mt-8 w-30 h-10 " />
        <button class="bg-green-600 h-10 w-20 rounded-md ml-2 border-none">Submit </button>
      </form>
      <div v-if="pokemon.playCards" class="mx-auto my-8 max-w-md rounded-md">
        <div style="background-image: url('{{ pokemon.playCards?.sprites?.front_default }}');" class="bg-cover bg-center  bg-stone-300  rounded-lg overflow-hidden shadow-md ">
          <img :src="pokemon.playCards?.sprites?.front_default" class="w-full h-56 object-cover" alt="Pokemon Image">
          <div class="bg-white">
            <h1 class="text-2xl font-bold mb-2 text-white">{{ pokemon.playCards.name }}</h1>
            <div class="flex justify-between mb-2 ">
              <p class=" text-">Height: {{ pokemon.playCards.height }}</p>
              <p class=" text-">Weight: {{ pokemon.playCards.weight }}</p>
              <p class="text-">Rank: {{ pokemon.playCards.order }}</p>
            </div>
            <h1 class="text-xl text-">Type:</h1>
            <div v-for="type in pokemon.playCards.types">
                    <p class=" inline text- text-lg ml-5 "> {{ type.type.name }}</p>
              </div>
          </div>
         
              <div class="p-4 bg-white"> 
            <h2 class="text-lg font-semibold mb-2">Base Stats:</h2>
            <div v-for="stat in pokemon.playCards.stats" :key="stat.stat.name" class="flex justify-between">
              <p class="text-">{{ stat.stat.name }}</p>
              <p class="text- font-bold">{{ stat.base_stat }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h1>Hello</h1>
      </div>
    </div> -->

  </template>
  <style>
  #pokeImg{
    width: 70%;
  }
</style>
  