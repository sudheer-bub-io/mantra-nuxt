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
    <div class="flex  w-96 bg-white-900 shadow-gray-900 rounded-lg" id="card">
        <div class="mt-0  bg-[url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')] ">
            <img @click="previous" class=" w-7 h-7   mb-8 ml-0" src="@/assets/images/back.png" alt="Day1"> 
            <div class=" w-44">
                <img src="@/assets/images/user.png" class="userImg w-34 rounded-md h-32 ml-8" id="SingleUserImg">
                <h1 class="text-2xl font-medium pt-3 ml-12" id="singleUserH1">{{ userData.username }}</h1>
            </div>
        </div>
        <div>
            <div class=" w-96 bg-[url('https://www.transparenttextures.com/patterns/beige-paper.png')] rounded-md" id="cardDetails">
                <div class="">
                    <h1 class="text-2xl pt-5 ml-3"> {{ userData.name && userData.name.firstname }} {{ userData.name &&
                        userData.name.lastname }} </h1>
                    <p class="text-lg ml-3 mt-0"> {{ userData.address && userData.address.city }} </p>
                    <hr class="border-t-10 border-slate-900 p-3 ">
                </div>
                <div class="">
                    <p class="  text-lg"><span class="text-neutral-500 ml-5">Email : </span>{{ userData.email }} </p>
                    <p class=" text-lg"><span class="text-neutral-500 ml-5">City : </span>{{ userData.address &&
                        userData.address.city }}</p>
                    <p class=" text-lg"><span class="text-neutral-500 ml-5">Address :</span> {{ userData.address &&
                        userData.address.city }}, street {{
        userData.address && userData.address.street }}</p>
                    <p class="  text-lg"><span class="text-neutral-500 ml-5">Contact Number:</span> {{ userData.address &&
                        userData.phone }} </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
#card {
    margin-left: 35%;
    margin-top: 10%;
    position: fixed;    
    width: 570px;
    height: 300px;
}
#cardDetails{
    background-color: rgb(245 245 245);
background-image: url("https://www.transparenttextures.com/patterns/always-grey.png");
}
</style>