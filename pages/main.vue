<script setup>
import { ref, onMounted, computed } from 'vue';
definePageMeta({
  layout: 'custom'
})

const coll = ref(false);
const stud = ref(true);
const showEnterdedData = ref(false);
const storedData = ref([]);
const studentData = ref([]);

function toggleState(target) {
  coll.value = target === 'coll' ? !coll.value : false;
  stud.value = target === 'stud' ? !stud.value : false;
  showEnterdedData.value = target === 'showData' ? !showEnterdedData.value : false;
}


function getStoredData() {
  const data = localStorage.getItem('mydata');
  storedData.value = JSON.parse(data) || [];
}

onMounted(() => {
  getStoredData();
});

const filteredData = computed(() => {
  return storedData.value.filter(item => (item['reference Id'] || '').trim() !== '');
});

onMounted(() => {
  studentData.value = filteredData.value;
  console.log(studentData.value);
});
</script>

<template>
  <div class="flex flex-col">
    <div class="buttons">
      <button @click="() => toggleState('coll')" class="day2">College</button>
      <button @click="() => toggleState('stud')" class="day2">Student</button>
      <button @click="() => toggleState('showData')" class="day2">User data </button>
    </div>
    <div v-if="coll">
      <FormsCollegeForm />
    </div>
    <div v-if="stud">
      <FormsStudentForm />
    </div>
    <div v-if="showEnterdedData">
      <table class="styled-table">
        <thead>
          <tr>
            <th>Reference Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Student Id</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in storedData" :key="index">
            <td>{{ item['reference Id'] }}</td>
            <td>{{ item['Name'] }}</td>
            <td>{{ item['Email'] }}</td>
            <td>{{ item['student Id'] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.day2 {
  margin-left: 20px;
  width: 100px;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: lightgreen;
  color: white;
  font-size: 18px;
}

.styled-table {
  width: 100%;
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

