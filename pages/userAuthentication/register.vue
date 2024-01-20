<template>
  <form @submit.prevent="handleFormSubmit">
    <LoginRegister :fields="registerdata" @updateFieldValue="updateFieldValue" @onSubmit="handleFormSubmit" :submitButtonText="Register" :formMessage="message" />
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { AccessFormData } from '../stores/allData';

const store = AccessFormData();
const registerdata = ref(store.registerData);
const Register = "Register"
const message ="Register to Login "

const updateFieldValue = (fieldName, value) => {
  const field = registerdata.value.find(f => f.name === fieldName);
  if (field) {
    field.value = value;
  }
};

const handleFormSubmit = (formData) => {
  store.userData.storeUser({
    username: formData.username,
    email: formData.email,
    password: formData.password,
  });

  console.log('User registered successfully');
};
</script>
