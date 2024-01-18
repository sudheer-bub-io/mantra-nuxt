<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const { userData } = defineProps(['userData']);
const router = useRouter();
console.log(userData);
console.log("Hi");
</script>

<template> 
<div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-4 bg-[url('https://www.transparenttextures.com/patterns/absurdity.png')]">
        <img class="w-1/3 ml-28 h-18 object-cover object-center" src="../assets/images/user.jpeg" alt="avatar">
        <div class="py-4 px-6">
            <h1 class="text-2xl font-semibold text-gray-800"> {{ userData.name && userData.name.firstname }} {{ userData.name && userData.name.lastname
          }}</h1>
            <div class="flex items-center mt-4 text-gray-700">
                  <img width="48" height="48" class="h-6 w-6 fill-current" src="https://img.icons8.com/ios-filled/50/phone.png" alt="phone"/>
                <h1 class="px-2 text-sm">{{ userData.phone }}</h1>
            </div>
            <div class="flex items-center mt-4 text-gray-700">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 512 512">
                    <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"/>
                </svg>
                <h1 class="px-2 text-sm">{{ userData.email }}</h1>
            </div>
            <div class="flex items-center justify-end mt-4 text-gray-700">
              <a class="px-2 text-sm text-right" @click="router.push(`single/${userData.id}`)"> view More details</a>
            </div>
        </div>
    </div>
</template>