<script setup>
import { ref, defineProps } from 'vue';
const props = defineProps(['name', 'formtype']);
const myData = props.name;
const inputValues = {};
myData.forEach(input => {
  inputValues[input.name] = ref("");
});
const sendData = () => {
  const userData = {};
  myData.forEach(input => {
    userData[input.name] = inputValues[input.name].value;
  });
  const storedData = JSON.parse(localStorage.getItem("mydata")) || [];
  storedData.push(userData);
  localStorage.setItem("mydata", JSON.stringify(storedData));
  location.reload();
};
console.log("hello From form")
</script>
<template>
  <div :id="formtype">
    <div class=" flex items-center justify-center  px-4 sm:px-6 lg:px-8 ">
      <div class="max-w-md w-full space-y-8 shadow-lg shadow-cyan-500/50 rounded-lg mt-10">
        <div>
          <h2 class="pt-5 pb-0 text-center text-3xl font-extrabold text-gray-900">
            {{ formtype }}
          </h2>
        </div>

        <div class=" bg-white max-w-md rounded overflow-hidden shadow-xl p-5">
          <form class="space-y-4" action="#" @submit.prevent="sendData">
            <input type="hidden" name="remember" value="True">  
            <div v-for="name in name" class="rounded-md shadow-sm -space-y-px">
              <div class="grid gap-6">
                <div class="col-span-12">
                  <label for="first_name" class="block text-sm font-medium text-gray-700">{{ name.name }} </label>
                  <input :type="name.type" v-model="inputValues[name.name].value" :placeholder="name.placeholder"
                    name="first_name" id="first_name" autocomplete="given-name" bg-cyan-500
                    class="mt-1 h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md">
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox"
                  class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div class="text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                </a>
              </div>
            </div>
            <div>
              <button type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="True">
                    <path fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
