<script setup>
import {NavData} from '../stores/formsData'
const navdata = NavData();
</script>
<template>
  <LayoutComponentHeader/>
  <div class="relative min-h-screen">
    <LayoutComponentNavBar :NavData="navdata.defaultNav"/>
    <div class="ml-24  overflow-y-auto" style="margin-top: 4rem; position: sticky; top: 0;">
      <div class="w-full">
        <slot/>
      </div>
    </div>
  </div>
</template>