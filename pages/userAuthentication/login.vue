<template>
  <div class="mt-20">
    <form @submit.prevent="handleFormSubmit">
      <FormComponent :fields="logindata" @updateFieldValue="updateFieldValue" @onSubmit="handleFormSubmit"
        :submitButtonText="store.loginData[1]" :formMessage="store.loginData[2]" :formsInfo="store.loginData[3]" />
    </form>
  </div>
</template>
  
<script setup>
import { ref} from 'vue';
import { AccessFormData } from '../stores/formsData';
import { useToast } from 'vue-toastification'
import { currentUser } from '@/stores/myStore';
const user = currentUser();


const store = AccessFormData();
const logindata = ref(store.loginData[0]);
const { $checkInputFeild } = useNuxtApp();

const updateFieldValue = (fieldName, value) => {
  if (logindata.value) {
    const field = logindata.value.find(f => f.name === fieldName);
    if (field) {
      field.value = value;
    }
  }
};  
const handleFormSubmit = (formData) => {
  const loggedInUser = store.userData.checkLogin(formData.username, formData.password);
  const isValid = $checkInputFeild(formData);
  if (!isValid) {
    useToast().error(` UserName and Password Cannot be empty`)
  } else {
    if (loggedInUser) {
      store.userData.loggedInUser = loggedInUser;
      user.User=formData.username
      useToast().success(`you're successfully Logged In `);
      navigateTo('/all-users');
    } else {
      useToast().error('InValid Login Credentials');
    }
  }
};
</script>
