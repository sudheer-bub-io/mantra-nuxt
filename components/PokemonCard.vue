<script setup>
import { Pokemon } from '../stores/myStore';
const favStore = Pokemon();
console.log(favStore.userFavCards)
function handelDeleteFav(id) {
    favStore.userFavCards = favStore.userFavCards.filter(x => x.id !== id)
}
</script>
<template>
    <div class="flex ml-10">
        <div v-for="card in favStore.userFavCards" class="flex flex-col bg-cyan-500 text-white w-64 h-96 rounded-md m-2">
            <button class=" flex justify-end z-10 " @click="handelDeleteFav(card.id)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-6 text-red-500 m-3">
                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                  </svg>
                  
            </button>
            <div class="flex justify-center items-center h-1/4">
                <div>
                    <img :src="card?.sprites?.front_default" class="w-44" alt="Pokemon Image">
                </div>
            </div>
            <div>
                <p class="text-xl font-bold ml-2">{{ card.name }}</p>
                <div>
                    <ul class="flex justify-around ml-4">
                        <li class="text-sm">Height:{{ card.height }}</li>
                        <li class="text-sm">Weight:{{ card.weight }}</li>
                    </ul>
                    <h1 class="text-md font-medium ml-2">Power : </h1>
                    <div class="flex flex-wrap justify-start ml-4">
                        <div v-for="type in card.types" :key="type.type.name" class="mr-2 mb-2">
                            <p class="text-md pt-1 pb-1 w-16 h-8 text-white text-center bg-cyan-900 rounded-md">{{ type.type.name }}
                            </p>
                        </div>
                    </div>
                    <h2 class="text-md font-medium ml-2">Base Stats:</h2>
                    <div>
                        <div v-for="(stat, index) in card.stats" :key="stat.stat.name" class="flex justify-between">
                            <div v-if="index < 3">
                                <p class="text-sm  pt-3 ml-5">{{ stat.stat.name }} <span class="text-sm ml-24">{{ stat.base_stat
                                }}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>