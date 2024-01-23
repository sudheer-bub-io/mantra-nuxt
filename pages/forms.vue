<script setup>
import { ref, onMounted, computed } from 'vue';
import { AccessFormData } from "@/stores/formsData";
import { useToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

definePageMeta({
  layout: 'custom'
});

const toast = useToast();
const { $checkInputFeild } = useNuxtApp();
const formsData = AccessFormData();
const studentDataForm = ref(formsData.studentData);
const collegeDataForm = ref(formsData.collegeData);
const college = "collegeForm";
const student = "studentForm";
const coll = ref(false);
const stud = ref(true);
const showEnterdedData = ref(false);
const storedData = ref([]);
const studentData = ref([]);
const button = "submit";
const selectedForm = ref(null);

const userSubmitedForm = ref(null);

function toggleState(target) {
  console.log(target);
  coll.value = target === 'coll' ? !coll.value : false;
  stud.value = target === 'stud' ? !stud.value : false;
  showEnterdedData.value = target === 'showData' ? !showEnterdedData.value : false;
}

const handleFormChange = () => {
  console.log('Selected Form:', selectedForm.value);
  const data = localStorage.getItem(selectedForm.value);
  console.log(data);
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
  userSubmitedForm.value = message;
  const isValid = $checkInputFeild(formD);
  if (isValid) {
    if (message == 'studentForm') {
      formsData.userData.storeUser({
        studentId: formD.studentid,
        name: formD.name,
        email: formD.email,
        query: formD.enterquery,
        password: formD.entersomething,
      }, "StudentData");
      toast.success(`You're successfully registered`);
    }
    else if (message == 'collegeForm') {
      formsData.userData.storeUser({
        referenceId: formD.referenceid,
        name: formD.name,
        email: formD.email,
        studentId: formD.studentid
      }, "CollegeData");
      toast.success(`You're successfully registered`);
    }
  }
}

onMounted(() => { });

const filteredData = computed(() => {
  return storedData.value.filter(item => (item['reference Id'] || '').trim() !== '');
});

onMounted(() => {
  studentData.value = filteredData.value;
});
</script>

<template>
  <div class="">
    <div class="">
      <div class="buttons">
        <button @click="() => toggleState('coll')" class="day2">College</button>
        <button @click="() => toggleState('stud')" class="day2">Student</button>
        <button @click="() => toggleState('showData')" class="day2">User data </button>
      </div>
      <div v-if="coll">
        <form @submit.prevent="handleFormSubmit">
          <LoginRegister :fields="formsData.collegeData" @updateFieldValue="updateFieldValue2"
            @onSubmit="handleFormSubmit" :submitButtonText="button" :formMessage="college" :errors="errors" />
        </form>
      </div>
      <div v-if="stud">
        <form @submit.prevent="handleFormSubmit">
          <LoginRegister :fields="formsData.studentData" @updateFieldValue="updateFieldValue" @onSubmit="handleFormSubmit"
            :submitButtonText="button" :formMessage="student" :errors="errors" />
        </form>
      </div>
      <div v-if="showEnterdedData">
        <div class="relative inline-block ml-36">
          <select v-model="selectedForm" @change="handleFormChange"
            class="block appearance-none w-32 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:border-blue-500">
            <option value="StudentData">Student Form</option>
            <option value="CollegeData">College Form</option>
          </select>
        </div>
        <Tablecomponent :storedData="storedData" />
      </div>
    </div>
  </div>
</template>