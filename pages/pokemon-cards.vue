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
</script>
<template>
    <div class="">
      <form @submit.prevent="handelSubmit">
        <input type="text" v-model="pokemon.searchedPokemon" class="bg-slate-200 rounded-md  ml-40 mt-8 w-30 h-10 " />
        <button class="bg-green-600 h-10 w-20 rounded-md ml-2 border-none">Submit </button>
      </form>
      <div v-if="pokemon.playCards" class="mx-auto my-8 max-w-md bg-blue-100 rounded-md">
        <div class=" rounded-lg overflow-hidden shadow-md">
          <img :src="pokemon.playCards?.sprites?.front_default" class="w-full h-56 object-cover" alt="Pokemon Image">
          <div class="bg-slate-500">
            <h1 class="text-2xl font-bold mb-2 text-white">{{ pokemon.playCards.name }}</h1>
            <div class="flex justify-between mb-2 bg-slate-500">
              <p class=" text-white">Height: {{ pokemon.playCards.height }}</p>
              <p class=" text-white">Weight: {{ pokemon.playCards.weight }}</p>
              <p class="text-white">Rank: {{ pokemon.playCards.order }}</p>
            </div>
            <h1 class="text-xl text-white">Type:</h1>
            <div v-for="type in pokemon.playCards.types">
                    <p class=" inline text-white text-lg ml-5 "> {{ type.type.name }}</p>
              </div>
          </div>
         
              <div class="p-4 bg-slate-900 text-white"> 
            <h2 class="text-lg font-semibold mb-2">Base Stats:</h2>
            <div v-for="stat in pokemon.playCards.stats" :key="stat.stat.name" class="flex justify-between">
              <p class="text-white">{{ stat.stat.name }}</p>
              <p class="text-white font-bold">{{ stat.base_stat }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h1>Hello</h1>
      </div>
    </div>
  </template>
  <style>
  #pokeImg{
    width: 70%;
  }
</style>
  