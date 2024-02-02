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
}  
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
}
</script>

<template>
  <div class="mt-20">
    <form @submit.prevent="handleFormSubmit">
      <FormComponent :fields="logindata" @updateFieldValue="updateFieldValue" @onSubmit="handleFormSubmit"
        :submitButtonText="store.loginData[1]" :formMessage="store.loginData[2]" :formsInfo="store.loginData[3]" />
    </form>
  </div>
</template>
















<!-- <template>
  <h1 class="ml-5">logInIn To Enter</h1>
</template>

     <div class="flex items-center">
      <div class="bg-green-500 m-10 h-10 rounded-lg" :style="{ width: `${width1}px` }" @click="width1 = 10">one</div>
      <div class="bg-green-500 m-10 w-32 h-10 rounded-lg" :style="{ width: `${width2}px` }"  @click="width2 = 70">two</div>
      <div class="bg-green-500 m-10 w-32 h-10 rounded-lg" :style="{ width: `${width3}px` }">three</div>
    </div>
    <div class="flex items-center">
        <div class="bg-blue-500 m-10 h-20 rounded-lg" :style="{ width: widthObject.width + 'px', 'border-radius': widthObject.borderRadius + 'px' }" @click="updateWidthAndRadius(10)">one</div>
        <div class="bg-blue-500 m-10 w-32 h-20 rounded-lg" :style="{ width: widthObject2.width + 'px', 'border-radius': widthObject2.borderRadius + 'px' }">two</div>
        <div class="bg-blue-500 m-10 w-32 h-20 rounded-lg" :style="{ width: widthObject3.width + 'px','border-radius': widthObject2.borderRadius + 'px' }">three</div>       
      </div>
    
  </template>
  <script setup>
  import { ref } from 'vue';
  const width1 = ref(400);
  const width2 = ref(width1.value);
  const width3 = ref(width1.value);
  const widthObject = ref({ width: 200, borderRadius: 0 });
const widthObject2 = widthObject;
const widthObject3 = widthObject;

const updateWidthAndRadius = (newValue) => {
  widthObject.value.width += newValue;
  widthObject.value.borderRadius = widthObject.value.width / 2; 
}; -->


<!-- 
// const QuoteService = (() => {
//     let quotes = ref([]);
//     let currentIndex = -1;
//     const url = 'https://dummyjson.com/quotes/random';

//     const fetchQuotes = async () => {
//         try {
//             const response = await fetch(url);
//             const result = await response.json();
//             quotes.value = result; 
//             console.log(quotes);
//             currentIndex = -1;
//         } catch (error) {
//             console.error('Error fetching quotes:', error);
//         }
//     };

//     const getQuote = async () => {
//         if (currentIndex === -1 || currentIndex === quotes.length - 1) {
//             await fetchQuotes();
//         }
//         currentIndex++;
//         return quotes[currentIndex];
//     };

//     // const getRandomQuote = async () => {
//     // await QuoteService.fetchQuotes(); 
//     // const randomQuote = await QuoteService.getQuote();
//     // console.log(randomQuote);
//     // };

//     // getRandomQuote();

//     return {
//         fetchQuotes,
//         getQuote,
//         quotes
//     };
// })();



// const quoteApi = QuoteService()

// const {fetchQuotes, getQuote, quotes} = quoteApi;
// console.log(quotes)


</script> -->