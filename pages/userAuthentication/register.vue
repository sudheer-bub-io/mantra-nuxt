<template>
  <form @submit.prevent="handleFormSubmit">
    <LoginRegister :fields="registerdata" @updateFieldValue="updateFieldValue" @onSubmit="handleFormSubmit"
      :submitButtonText="Register" :formMessage="message" :errors="errors" />
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { AccessFormData } from '~/stores/formsData';
import { useToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const toast = useToast();
const store = AccessFormData();
const registerdata = ref(store.registerData);
const { $checkInputFeild } = useNuxtApp();
const Register = 'Register';
const message = 'Register to Login ';
const errors = ref(store.errors);

const updateFieldValue = (fieldName, value) => {
  const field = registerdata.value.find(f => f.name === fieldName);
  if (field) {
    field.value = value;
  }
  ;
};

const handleFormSubmit = (formData) => {
  console.log(formData)
  const isValid = $checkInputFeild(formData);
  if (isValid) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*_-]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error('Invalid email format');
    }
    else if (!passwordRegex.test(formData.password)) {
      toast.error('Enter Valid password')
    }
    else {
      store.userData.storeUser({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      toast.success(`You're successfully registered`);
      navigateTo('/userAuthentication/login');
    }
  }
  else {
    toast.error('Enter all the feild values ')
  }
};
</script>
