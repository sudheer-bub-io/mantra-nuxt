<template>
    <form @submit.prevent="handleFormSubmit">
      <LoginRegister :fields="logindata" @updateFieldValue="updateFieldValue" @onSubmit="handleFormSubmit" :submitButtonText="Login" :formMessage="message"/>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { AccessFormData} from '../stores/allData';
  
  const store = AccessFormData();
  const logindata = ref(store.loginData);
  const Login= "Login"
  const message = "Login to Your Account "
  
  const updateFieldValue = (fieldName, value) => {
    const field = logindata.value.find(f => f.name === fieldName);
    if (field) {
      field.value = value;
    }
  };
  
  const handleFormSubmit = (formData) => {
    const loggedInUser = store.userData.checkLogin(formData.username, formData.password);
  
    if (loggedInUser) {
      store.userData.loggedInUser = loggedInUser;
      console.log('Login successful');
      navigateTo('/all-users');
    } else {
      console.log('Invalid credentials');
    }
  };
  </script>
  