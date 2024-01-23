<script setup>
import { ref, onMounted, computed } from 'vue';
import { accessFormsData } from "@/stores/formsData";
import { useToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

definePageMeta({
  layout: 'custom'
})

const toast = useToast();
const { $checkInputFeild } = useNuxtApp();
const formsData = accessFormsData();
const studentDataForm = ref(formsData.studentData);
const collegeDataForm = ref(formsData.collegeData);
const college = "college Form";
const student = "student Form";
const coll = ref(false);
const stud = ref(true);
const showEnterdedData = ref(false);
const storedData = ref([]);
const studentData = ref([]);
const button = "submit";

const userSubmitedForm = ref(null);

function toggleState(target) {
  console.log(target);
  coll.value = target === 'coll' ? !coll.value : false;
  stud.value = target === 'stud' ? !stud.value : false;
  showEnterdedData.value = target === 'showData' ? !showEnterdedData.value : false;

  if(target==='showData'){
    console.log("Hello I am from Plugin ")
    getStoredData(userSubmitedForm);
  }
}

function getStoredData(value) {
  console.log(value.value)
  const data = localStorage.getItem('CollegeData');
  storedData.value = JSON.parse(data) || [];
}

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
  userSubmitedForm.value=message;
  const isValid = $checkInputFeild(formD);
  if (isValid) {
    if (message == 'student Form') {
      formsData.usersInfo.storeUser({
        studentId: formD.studentid,
        name: formD.name,
        email: formD.email,
        query: formD.enterquery,
        password: formD.entersomething,
      }, "StudentData");
      toast.success(`You're successfully registered`);
    } else if (message == 'college Form') {
      console.log("hello User")
      console.log(formD)
      formsData.usersInfo.storeUser({
        referenceId: formD.referenceid,
        name: formD.name,
        email: formD.email,
        studentId: formD.studentid
      }, "CollegeData");
      toast.success(`You're successfully registered`);
    }

  }
}

onMounted(() => {

});

const filteredData = computed(() => {
  return storedData.value.filter(item => (item['reference Id'] || '').trim() !== '');
});

onMounted(() => {
  studentData.value = filteredData.value;
})
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
          <LoginRegister :fields="formsData.collegeData" @updateFieldValue="updateFieldValue2" @onSubmit="handleFormSubmit"
            :submitButtonText="button" :formMessage="college" :errors="errors" />
        </form>
      </div>
      <div v-if="stud">
        <form @submit.prevent="handleFormSubmit">
          <LoginRegister :fields="formsData.studentData" @updateFieldValue="updateFieldValue" @onSubmit="handleFormSubmit"
            :submitButtonText="button" :formMessage="student" :errors="errors" />
        </form>
      </div>
      <div v-if="showEnterdedData">
        <Tablecomponent :storedData="storedData" />
      </div>
    </div>
  </div>
  
</template>

