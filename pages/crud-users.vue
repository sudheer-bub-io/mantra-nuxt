<script setup>
import { crudusers } from '@/stores/myStore';
import { useToast } from 'vue-toastification';
definePageMeta({
  layout: 'custom'
})
const users = crudusers();
const addUser = ref(users.submitUser[0]);

const updateFieldValue = (fieldName, value) => {
  const field = addUser.value.find(f => f.name === fieldName);
  if (field) {
    field.value = value;
  }
  ;
};

const handleFormSubmit = (formData) => {
  const { $checkInputFeild } = useNuxtApp();
  const userValue = {
    id: users.generateRandomNumber(),
    name: formData.userName,
    age: formData.UserAge,
  };
  const isValid = $checkInputFeild(userValue);
  if (isValid) {
    const ageRegex = /^(?:[1-9]|[1-9][0-9]|120)$/
    if (ageRegex.test(parseInt(formData.UserAge))) {
      users.uservalues.push(userValue)
      useToast().success('User Added Successfully');
      formData.userName = '';
      formData.UserAge = ''
    } else {
      useToast().error('Enter Valid Age');
    }
  } else {
    useToast().error('Enter All The Fields');
  }
};
</script>
<template>
  <div class=" mt-10">
    <FormComponent :fields="addUser" @updateFieldValue="updateFieldValue" @onSubmit="handleFormSubmit"
      :submitButtonText="users.submitUser[1]" :formMessage="users.submitUser[2]" />
    <HandelCrudUsers />
  </div>
</template>