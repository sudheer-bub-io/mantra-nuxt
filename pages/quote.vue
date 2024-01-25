<template>
    <div class="flex w-6/12 h-8/12 bg-slate-300 flex justify-center ml-96 mt-20 relative">
      <h1 class="absolute top-0 left-30 text-white z-10 text-3xl text-blue-950">Quote Of The Day</h1>
      <img src="`@/assets/images/quote1.jpg`" class="w-12/12 z-0" alt="Random Quote Image">
      <h2 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-2xl text-blue-950">
        {{ quotes.quote }}
      </h2>
      <p class="absolute bottom-0 right-10 text-white text-xl z-10 text-blue-950">{{ quotes.author }}</p>
    </div>
    <button @click="getNewQuote" class="ml-96 bg-green-400 rounded-md h-8 mt-2 text-lg text-white">Get New One</button>

    
  </template>
  <script setup>
  import { ref } from 'vue';
  const {$randomNumber} = useNuxtApp();
  const number = $randomNumber(3);
  definePageMeta({
    layout: 'custom',
})
  const QuoteService = (() => {
    const quotes = ref([]);
    let currentIndex = -1;
    const url = 'https://dummyjson.com/quotes/random';
  
    const fetchQuotes = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        quotes.value = result;
        currentIndex = -1;
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };
  
    const getQuote = async () => {
      if (currentIndex === -1 || currentIndex === quotes.value.length - 1) {
        await fetchQuotes();
      }
      currentIndex++;
      return { quote: quotes.value[currentIndex].quote, author: quotes.value[currentIndex].author };
    };
  
    fetchQuotes();
  
    return {
      fetchQuotes,
      getQuote,
      quotes
    };
  })();
  
  const { getQuote, quotes } = QuoteService;
  const { quote: currentQuote, author: currentAuthor } = ref('');
  
  const getNewQuote = async () => {
    const { quote, author } = await getQuote();
    currentQuote.value = quote;
    currentAuthor.value = author;
    console.log(quote);
  };
  
  </script>
  




    <!-- //Practiced About Prototypes and learn about how prototype inheritence happening 
const array = ["sudheer", "lokesh"]
console.log(array.__proto__)  //Proto type of this 1st level array Array  ProtoTypes
console.log(array.__proto__.__proto__) // proto type of 2nd level you get Object prototyps
console.log(array.__proto__.__proto__.__proto__) // prototype of 3rd level you get object prototype is null.

// object chaining for function 
function checkFun() {
    let a = 10;
}
console.log(checkFun.__proto__) // prototype of a function you will get function Prototype
console.log(Function.__proto__) // both are Same 
console.log(checkFun.__proto__.__proto__) // you will get  object prototye if log checkFun.__proto__.__proto__.
// every thing in js will come into the object in js .

// prototype Inheritance 

let myObject = {
    name: "sudheer",
    age: "22",
    gender: "male"
}

let myObject2 = {
    name: "Janga"
}
console.log(myObject2.__proto__)
myObject2.__proto__ = myObject
console.log(myObject2.__proto__) // you will get the access of object1 
console.log(myObject2.name) // you will get janga 
console.log(myObject2.age)
 };
  
 // </script> -->
  