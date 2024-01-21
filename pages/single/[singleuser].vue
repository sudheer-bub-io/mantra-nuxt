<script setup>
import { ref } from 'vue';
definePageMeta({
  layout: 'custom'
})
const { singleuser } = useRoute().params;
const userData = ref({});
async function fetchData() {
    try {
        const response = await fetch(`https://fakestoreapi.com/users/${singleuser}`);
        const jsonData = await response.json();
        userData.value = jsonData;
        console.log(userData)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
onMounted(fetchData);
function previous() {
    window.history.back();
}
</script>
<template>
    <div class=" ml-96">
        <div
            class="flex  h-72 mt-44 w-4/12 ml-60 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] rounded-md">
            <div
                class=" w-44 flex flex-col items-center bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]">
                <img @click="previous" class=" w-10 h-10 mb-10 ml-0" src="@/assets/images/back.png" alt="Day1">
                <img src="@/assets/images/user.jpeg" class="userImg w-28 rounded-md" id="SingleUserImg">
                <h1 class="text-xl font-medium pt-3" id="singleUserH1">{{ userData.username }}</h1>
            </div>
            <div class=" w-96">
                <div class="">
                    <h1 class="text-2xl pt-5"> {{ userData.name && userData.name.firstname }} {{ userData.name &&
                        userData.name.lastname }} </h1>
                    <p class="text-lg"> {{ userData.address && userData.address.city }} </p>
                    <hr>
                </div>
                <div class="pl-3 mt-5">
                    <p class="pt-3  text-lg"><span class="text-neutral-500">Email : </span>{{ userData.email }} </p>
                    <p class="pt-3  text-lg"><span class="text-neutral-500">City : </span>{{ userData.address &&
                        userData.address.city }}</p>
                    <p class="pt-3 text-lg"><span class="text-neutral-500">Address :</span> {{ userData.address &&
                        userData.address.city }}, street {{
        userData.address && userData.address.street }}</p>
                    <p class="pt-3  text-lg"><span class="text-neutral-500">Phone :</span> {{ userData.address &&
                        userData.phone }} </p>
                </div>

            </div>

    </div>
</div></template>