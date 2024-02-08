<script setup>
import { Pokemon } from '@/stores/myStore';
import { onMounted } from 'vue';

definePageMeta({
  layout: 'custom'
});

const pokemon = Pokemon();
const goToFavCardsClicked = ref(false)
const buttonValue = ref('Go To Fav')
const favIconColor = ref("cyan-100")

onMounted(async () => {
  await pokemon.fetchCards()
})
async function handelSubmit() {
  await pokemon.fetchCards();
  const findisThereOrNot = pokemon.userFavCards.some(card => card.id === pokemon.playCards.id);
  findisThereOrNot?favIconColor.value = "red-700" : favIconColor.value = "cyan-100";
}
function handelFavcard() {
  pokemon.fetchCards();
  !pokemon.userCardStatus ? favIconColor.value = "red-700" : favIconColor.value = "cyan-100"
  if (!pokemon.userCardStatus) {
    pokemon.userFavCards.push(pokemon.playCards);
  pokemon.userFavCards = uniqueUserFavCards;
  }else{
    pokemon.userFavCards=pokemon.userFavCards.filter(x=>x.id!=pokemon.playCards.id)
  }
}


function goToFavCards() {
  goToFavCardsClicked.value = !goToFavCardsClicked.value
  goToFavCardsClicked.value ? buttonValue.value = "Go To Cards" : buttonValue.value = "Go To Fav"
}

</script>
<template>
  <div class="flex  flex-col h-screen">
    <div class=" flex justify-between ml-10 mt-3">
      <button @click="goToFavCards" class="bg-green-500 text-white text-md w-24 h-8  rounded-md ">{{ buttonValue }}</button>
      <form @submit.prevent="handelSubmit" v-if="!goToFavCardsClicked">
        <input type="text" v-model="pokemon.searchedPokemon" class="bg-gray-200 rounded-md w-30 h-10 " />
        <button class="bg-green-600 h-10 w-20 rounded-md ml-2 border-none">Submit </button>
      </form>
    </div>
    <div class="" v-if="!goToFavCardsClicked">
      <div v-if="pokemon.playCards"
        class="mx-auto my-4 max-w-md rounded-lg border border-black-900 shadow-md bg-gradient-background bg-180% animate-gradient-animation">
        <div style="background-image: url('{{ pokemon.playCards?.sprites?.front_default }}');"
          class="bg-cover bg-center  rounded-lg overflow-hidden shadow-md">
          <button @click="handelFavcard" :class="`text-${favIconColor}`">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
              <path fillRule="evenodd"
                d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                clipRule="evenodd" />
            </svg>
          </button>
          <img :src="pokemon.playCards?.sprites?.front_default" class="w-44 ml-32" alt="Pokemon Image">
          <div class=" ">
            <h1 class="text-3xl text-white font-black mb-4 text-center">{{ pokemon.playCards.name }}</h1>
            <hr class="my-3 p-2">
            <div class="flex justify-between mb-2 ">
              <p class="text-lg  text-white font-extrabold">Height: {{ pokemon.playCards.height }}</p>
              <p class="text-lg  text-white font-extrabold">Weight: {{ pokemon.playCards.weight }}</p>
              <p class="text-lg  text-white font-extrabold">Rank: {{ pokemon.playCards.order }}</p>
            </div>
            <div
              :style="{ 'background-image': `url(${pokemon.playCards?.sprites?.back_shiny})`, 'background-repeat': 'no-repeat', 'background-size': 'cover' }">
              <h2 class="text-xl text-white ml-5 font-semibold ">Power:</h2>
              <div class="flex flex-wrap">
                <div v-for="type in pokemon.playCards.types" :key="type.type.name" class="mr-2 mb-2 ml-6">
                  <p class="text-lg w-20 h-8 text-white text-center bg-blue-400 rounded-md">{{ type.type.name }}</p>
                </div>
              </div>
              <h2 class="text-xl text-white ml-5 font-semibold">Base Stats:</h2>
              <div>
                <div v-for="stat in pokemon.playCards.stats" :key="stat.stat.name" class="flex justify-between">
                  <p class="text-lg text-white font-medium mt-4 ml-5">{{ stat.stat.name }}</p>
                  <p class="text-lg text-white font-medium  mr-10">{{ stat.base_stat }}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div v-if="goToFavCardsClicked">
      <PokemonCard />
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
#pokeImg {
  width: 70%;
}</style>
  