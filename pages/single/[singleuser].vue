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
    <div class="flex  w-96  h-96 shadow-slate-900" id="card">
        <div class="mt-0  bg-[url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png')]">
            <img @click="previous" class=" w-7 h-7   mb-8 ml-0" src="@/assets/images/back.png" alt="Day1">
            <div class=" w-44">
                <img src="@/assets/images/user.png" class="userImg w-34 rounded-md h-32 ml-8" id="SingleUserImg">
                <h1 class="text-2xl font-medium pt-3 ml-10" id="singleUserH1">{{ userData.username }}</h1>
            </div>
        </div>
        <div>
            <div class=" w-96 bg-[url('https://www.transparenttextures.com/patterns/beige-paper.png')]  pb-5"   
                id="cardDetails">
                <div class="">
                    <h1 class="text-2xl font-bold pt-5 ml-3 italic uppercase"> {{ userData.name && userData.name.firstname
                    }} {{ userData.name &&
    userData.name.lastname }} </h1>
                    <div class="flex ml-3 pb-3">
                        <img width="24" height="24" src="https://img.icons8.com/ios/50/1A1A1A/place-marker.png"
                            alt="place-marker" />
                        <p class="text-md font-serif ml-1 mt-0"> {{ userData.address && userData.address.city }} </p>
                    </div>
                    <hr class="border-t-10  border-slate-900  ">
                </div>
                <div class="">
                    <p class="  text-lg font-medium"><span class="text-neutral-500 ml-3">Email : </span>{{ userData.email }}
                    </p>
                    <p class=" text-lg font-medium"><span class="text-neutral-500 ml-3">City : </span>{{ userData.address &&
                        userData.address.city }}</p>
                    <p class=" text-lg font-medium"><span class="text-neutral-500 ml-3">Address :</span> {{ userData.address
                        &&
                        userData.address.city }}, street {{
        userData.address && userData.address.street }}</p>
                    <p class="  text-lg font-medium"><span class="text-neutral-500 ml-3">Contact Number:</span> {{
                        userData.address &&
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

#cardDetails {
    background-color: rgb(245 245 245);
    background-image: url("https://www.transparenttextures.com/patterns/always-grey.png");
    width: 410px;
}</style>