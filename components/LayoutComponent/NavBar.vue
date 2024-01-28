<script setup>
import {defineProps} from 'vue'
const props=defineProps(['NavData'])
</script>
<template>
    <div class="bg-slate-500 w-26 h-full fixed bg-gradient-background2 bg-180% animate-gradient-animation ">
        <nav class="flex flex-col p-5 ">
            <NuxtLink v-for="data in props.NavData" :key="data.id" :to="data.toAddress" class="mb-5 text-lg text-white">{{ data.navName }}</NuxtLink>
          </nav>
      </div>
</template>
