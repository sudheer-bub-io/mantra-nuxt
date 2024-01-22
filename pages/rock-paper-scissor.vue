<script setup>
import { ref } from 'vue';

definePageMeta({
    layout: 'custom',
    middleware:['auth']
})

const {$randomNumber} = useNuxtApp();
const img1 = "https://img.icons8.com/stickers/100/hand-rock-skin-type-1.png";
const img2 = "https://img.icons8.com/fluency/48/paper-hand.png";
const img3 = "https://img.icons8.com/emoji/48/victory-hand-emoji.png";
let number = "";
const answer = ref(true);
const result = ref(false);
const userValue = ref(0);

function clickedImage(value) {
    userValue.value = value;
    setTimeout(callbackFunction, 100);
}

function callbackFunction() {
    const rpsArray = ['rock', 'paper', 'scissor'];
    const num = $randomNumber(3);
    const type = rpsArray[num-1];

    switch (type) {
        case 'rock':
            number = img1;
            break;

        case 'paper':
            number = img2;
            break;

        case 'scissor':
            number = img3;
            break;

        default:
            console.log("Something went wrong");
    }

    if (userValue.value == type) {
        result.value = null; 
    } else if (
        (userValue.value == 'rock' && type === 'scissor') ||
        (userValue.value == 'paper' && type === 'rock') ||
        (userValue.value == 'scissor' && type === 'paper')
    ) {
        result.value = true; 
    } else {
        result.value = false; 
    }
    answer.value = false;
}
</script>

<template>
    <div class="m-0">
        <div>
            <h1 class="text-2xl text-center font-bold xl:text-4xl mt-16">Rock Paper Scissors</h1>
        </div>
        <div class="flex justify-evenly ">
            <button @click="() => clickedImage('rock')" class="w-5/12 "><img :src="img1" class="w-5/12  m-auto"></button>
            <button @click="() => clickedImage('paper')" class="w-5/12 "><img :src="img2" class="w-5/12   m-auto"></button>
            <button @click="() => clickedImage('scissor')" class="w-5/12"><img :src="img3" class="w-5/12  m-auto"></button>
        </div>
        <br>
        <div class="flex justify-center ml-16">
            <div v-if="result === null">
                <p class="text-2xl text-center font-bold xl:text-4xl text-orange-400">It's a Tie!</p>
            </div>
            <div v-else-if="result">
                <h1 class="text-2xl text-center font-bold xl:text-4xl text-green-400">Congratulations You Won </h1>
            </div>
            <div v-else>
                <div v-if="answer">
                    <h1 class="text-2xl text-center font-bold xl:text-4xl text-blue-400">Start the Game</h1>
                </div>
                <div v-else>
                    <h1 class="text-2xl text-center font-bold xl:text-4xl text-red-700">Oops! Computer Wins!</h1>
                </div>
            </div>
        </div>
        <br>
        <div class="flex justify-center">
            <button class="w-5/12"><img :src="number" class="w-5/12 m-auto"></button>
        </div>
    </div>
</template>
