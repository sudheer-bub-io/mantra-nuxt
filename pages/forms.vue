<script setup>
import { ref} from 'vue';
import { AccessFormData } from "@/stores/formsData";
import { useToast } from 'vue-toastification';

definePageMeta({
  layout: 'custom'
});
const formsData = AccessFormData();
const { $checkInputFeild } = useNuxtApp();
const {$reloadFunction} = useNuxtApp();

const studentDataForm = ref(formsData.studentData[0]);
const collegeDataForm = ref(formsData.collegeData[0]);
const state = ref({
  coll: true,
  stud: false,
  showEnteredData: false
});
const storedData = ref([]);
const selectedForm = ref(null);
const selectedHeader = ref([]);

function toggleState(target) {
  for (const key in state.value) {
    state.value[key] = key === target ? !state.value[key] : false;
  }
}

const handleFormChange = () => {
  selectedForm.value=='StudentData'?selectedHeader.value=formsData.studentData[2]:selectedHeader.value=formsData.collegeData[2]
  const data = localStorage.getItem(selectedForm.value);
  storedData.value = JSON.parse(data) || [];
};


const updateFieldValue = (fieldName, value) => {
  const field = studentDataForm.value.find(f => f.name === fieldName);
  if (field) {
    field.value = value;
  }
};

const updateFieldValue2 = (fieldName, value) => {
  const field = collegeDataForm.value.find(f => f.name === fieldName);
  if (field) {
    field.value = value;
  }
};

const handleFormSubmit = (formD, message) => {
  const isValid = $checkInputFeild(formD);
  if (isValid) {
    if (message == 'studentForm') {
      formsData.userData.storeUser({
        studentid: formD.studentid,
        name: formD.name,
        email: formD.email,
        query: formD.enterquery,
        password: formD.entersomething,
      }, "StudentData");
      useToast().success(`You're successfully registered`);
      $reloadFunction(1500);
    } else if (message == 'collegeForm') {
      formsData.userData.storeUser({
        reference: formD.referenceid,
        name: formD.name,
        email: formD.email,
        studentid: formD.studentid
      }, "CollegeData");
      useToast().success(`You're successfully registered`);
      $reloadFunction(1500);
    }
  }
}
</script>

<template>
      <div class="">
        <div class="buttons">
          <button @click="() => toggleState('coll')" class="day2">College</button>
          <button @click="() => toggleState('stud')" class="day2">Student</button>
          <button @click="() => toggleState('showEnteredData')" class="day2">User data </button>
        </div>
        <div v-if="state.coll"> 
          <form @submit.prevent="handleFormSubmit">
            <FormComponent :fields="formsData.collegeData[0]" @updateFieldValue="updateFieldValue2"
              @onSubmit="handleFormSubmit" :submitButtonText="formsData.collegeData[3]" :formMessage="formsData.collegeData[1]" :errors="errors" />
          </form>
        </div>
        <div v-if="state.stud">
          <form @submit.prevent="handleFormSubmit">
            <FormComponent :fields="formsData.studentData[0]" @updateFieldValue="updateFieldValue" @onSubmit="handleFormSubmit"
              :submitButtonText="formsData.studentData[3]" :formMessage="formsData.studentData[1]" :errors="errors" />
          </form>
        </div>
      </div>
      <div v-if="state.showEnteredData">
        <div class="relative inline-block ml-36">
          <h1>Select Form Type</h1>
          <select v-model="selectedForm" @change="handleFormChange"
            class="block appearance-none w-32 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:border-blue-500">
            <option value="StudentData">Student Form</option>
            <option value="CollegeData">College Form</option>
          </select>
        </div>
        <Tablecomponent :storedData="storedData" :Header="selectedHeader" />
      </div>
</template>