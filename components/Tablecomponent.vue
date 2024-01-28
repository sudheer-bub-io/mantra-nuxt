<script setup>
import { defineProps } from 'vue';
const userData = defineProps(['storedData', 'Header'])
</script>
<template>
  <table class="styled-table">
    <thead>
      <tr>
        <th v-for="header in Header" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody> 
      <tr v-for="(item, index) in storedData" :key="index">
        <td v-for="key in Header" :key="key">{{ item[key.toLowerCase()] || item[key.toLowerCase() + 'Id'] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
}

.day2 {
  margin-left: 20px;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: lightgreen;
  color: white;
  font-size: 18px;
}

.styled-table {
  width: 80%;
  margin-left: 10%;
  border-collapse: collapse;
  margin-top: 50px;
}

.styled-table th,
.styled-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.styled-table th {
  background-color: #f2f2f2;
}
</style>