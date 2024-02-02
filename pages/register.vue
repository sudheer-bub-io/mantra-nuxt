<script setup>
import { ref } from 'vue';
import { AccessFormData } from '~/stores/formsData';
import { useToast } from 'vue-toastification';
const store = AccessFormData();

const { $checkInputFeild } = useNuxtApp();

const registerdata = ref(store.registerData[0]);

const updateFieldValue = (fieldName, value) => {
  console.log(fieldName)
  const field = registerdata.value.find(f => f.name === fieldName);
  if (field) {
    field.value = value;
    console.log(field.value)
  }
}

const handleFormSubmit = (formData) => {
  const isValid = $checkInputFeild(formData);
  if (isValid) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*_-]+$/
    if (!emailRegex.test(formData.email)) {
      useToast().error('Invalid email format');
    }
    else if (!passwordRegex.test(formData.password)) {
      useToast().error('Enter Valid password')
    }
    else {
      store.userData.storeUser({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      },"registeredUsers");
      useToast().success(`You're successfully registered`);
      navigateTo('/');
    }
  }
  else {
    useToast().error('Enter all the feild values ')
  }
};
</script>


<template>
  <div class="mt-20">
    <form @submit.prevent="handleFormSubmit">
      <FormComponent :fields="registerdata" @updateFieldValue="updateFieldValue" @onSubmit="handleFormSubmit"
        :submitButtonText="store.registerData[1]" :formMessage="store.registerData[2]" :formsInfo="store.registerData[3]"/>
    </form>
  </div>
  
</template>

