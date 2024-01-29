<script setup>
import { crudusers } from '@/stores/myStore';
import { useToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const toast = useToast();
definePageMeta({
    layout: 'custom'
})
const users = crudusers();
const addUser = ref(users.submitUser[0]);

const updateFieldValue = (fieldName, value) => {
  console.log(fieldName)
  const field = addUser.value.find(f => f.name === fieldName);
  if (field) {
    field.value = value;
    console.log(field.value)
  }
  ;
};

const handleFormSubmit = (formData) => {
    const { $checkInputFeild } = useNuxtApp();
    console.log(formData)
    const userValue = {
      id: users.generateRandomNumber(),
      name: formData.userName,
      age: formData.UserAge,
    };
    const isValid = $checkInputFeild(userValue);
    users.uservalues.push(userValue)
     toast.success('User Added Successfully');
    // if (!isValid) {
    //   toast.error('Enter All The Fields');
    // } else {
    //   const ageRegex = /^(?:[1-9]|[1-9][0-9]|120)$/
    //   if (!ageRegex.test(parseInt(formData.userAge))) {
    //     toast.error('Enter Valid Age');
    //   } else {
    //     users.uservalues.push(userValue)
    //     toast.success('User Added Successfully');
    //     formData.userName = '';
    //     formData.userAge= '';
    //   }
    // }
};
</script>
<template>
    <div class="flex justify-center">
    </div>
    <div>
        <FormComponent :fields="addUser" @updateFieldValue="updateFieldValue" @onSubmit="handleFormSubmit"
        :submitButtonText="users.submitUser[1]" :formMessage="users.submitUser[2]"/>
        <HandelCrudUsers />
    </div>
</template>