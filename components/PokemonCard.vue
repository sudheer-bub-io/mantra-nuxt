<script setup>
import { Pokemon } from '../stores/myStore';
const favCards = Pokemon();
function goToCards23(){
    console.log('I got Clicked ')
    navigateTo('/pokemon-cards')
}
function handelDeleteFav(id){
    console.log(id)
   const pressedCard =  favCards.userFavCards.filter()
   console
}
</script>
<template> 
    <div class="flex justify-end"> <button @click="goToCards23" class="bg-green-500 text-white text-md w-24 h-8 ml-10 mt-5 rounded-md">Go to Search</button></div>
    <div  class="flex ml-10">
        <div v-for="card in favCards.userFavCards"   class="flex flex-col bg-slate-100  w-56 h-96 rounded-md m-2">
            <button class=" flex justify-end"  @click="handelDeleteFav(card.id)"  >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 bg-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
            <div class="flex justify-center items-center h-1/4">
                <div>
                    <img :src="card?.sprites?.front_default" class="w-44" alt="Pokemon Image">
                </div>
            </div>
            <div>
                <p class="text-xl font-bold ml-2">{{card.name}}</p>
                <div>
                    <ul class="flex justify-around ml-4">
                        <li class="text-sm">Height:{{card.height}}</li>
                        <li class="text-sm">Weight:{{card.weight}}</li>
                    </ul>
                    <h1 class="text-md font-medium ml-2">Power</h1>
                    <div class="flex flex-wrap justify-start ml-4"> <!-- Added justify-start class -->
                        <div v-for="type in card.types" :key="type.type.name" class="mr-2 mb-2">
                            <p class="text-md w-14 h-6 text-white text-center bg-blue-400 rounded-md">{{ type.type.name }}</p>
                        </div>
                    </div>
                    <h2 class="text-md font-medium ml-2">Base Stats:</h2>
                    <div>
                        <div v-for="(stat, index) in card.stats" :key="stat.stat.name" class="flex justify-between">
                            <div v-if="index<2">
                                <p class="text-sm  ml-5">{{ stat.stat.name }} <span class="text-sm ml-24">{{ stat.base_stat }}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    
</template>