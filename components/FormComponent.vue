<template>
  <section class="dark:bg-gray-900">
    <div class="flex flex-col items-center mx-auto lg:py-0">
      <div class="w-full shadow-lg border border-slate-200 mb-4 p-1 rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-4 md:p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">{{ formMessage }}</h1>
          <div class="space-y-4 md:space-y-6">
            <div v-for="field in fields" :key="field.id">
              <label :for="field.name" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">{{ field.name }}</label>
              <template v-if="field.type === 'text' || field.type === 'date' || field.type === 'email' || field.type === 'password'">
                <input :type="field.type" :name="field.name" :placeholder="field.placeholder" :value="field.value" required
                  @input="updateFieldValue(field.name, $event.target.value)"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </template>
              <template v-else-if="field.type === 'select'">
                <select :name="field.name" :id="field.id" v-model="field.value" required
                  @change="updateFieldValue(field.name, $event.target.value)"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option v-for="option in field.options" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
              </template>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start"></div>
            </div>
            <button @click.prevent="handleSubmit"
              class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              {{ submitButtonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps(['fields', 'label', 'submitButtonText', 'formMessage', 'formsInfo']);
const emits = defineEmits(['onSubmit', 'updateFieldValue']);
const updateFieldValue = (fieldName, value) => {
  const fieldToUpdate = props.fields.find(field => field.name === fieldName);
  if (fieldToUpdate) {
    fieldToUpdate.value = value;
  }
  emits('updateFieldValue', fieldName, value);
};

const handleSubmit = () => {
  const formData = {};
  props.fields.forEach(field => {
    if (field.type === 'select' || field.type === 'date') {
      formData[field.name] = field.value;
    } else {
      formData[field.name] = field.value;
    }
  });
  emits('onSubmit', formData,props.formMessage);
};
</script>
  
<style scoped>
.custom-shadow {
  position: relative;
}

.custom-shadow:before {
  content: '';
  position: absolute;
  top: -8px;
  left: 0;
  right: 0;
  height: 8px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
}
</style>
  