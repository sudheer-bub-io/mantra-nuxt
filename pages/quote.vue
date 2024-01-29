<template>
  <div class="flex w-6/12 h-8/12 bg-slate-300 flex justify-center ml-96 mt-20 relative">
    <h1 class="absolute top-0 left-30 text-white z-10 text-3xl text-blue-950">Quote Of The Day</h1>
    <img src="../assets/images/quote1.jpg" class="w-12/12 z-0" alt="Random Quote Image">
    <h2 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-2xl text-blue-950">
      {{ quotes.quote }} Hello Man 
    </h2>
    <p class="absolute bottom-0 right-10 text-white text-xl z-10 text-blue-950">{{ quotes.author }}</p>
  </div>
  <button @click="getNewQuote" class="ml-96 bg-green-400 rounded-md h-8 mt-2 text-lg text-white">Get New One</button>
</template>
<script setup>
import { ref, onMounted } from 'vue';

definePageMeta({
  layout: 'custom',
});
const quotes = ref([]);
const QuoteService = (() => {
  const url = 'https://dummyjson.com/quotes/random';

  const fetchQuotes = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      quotes.value = result;
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  const getQuote = async () => {
    await fetchQuotes();
    return quotes.value.length > 0 ? { quote: quotes.value[0].quote, author: quotes.value[0].author } : { quote: '', author: '' };
  };

  return { fetchQuotes, getQuote };
})();

onMounted(() => {
  QuoteService.fetchQuotes();
});

const currentQuote = ref('');
const currentAuthor = ref('');

const getNewQuote = async () => {
  const { quote, author } = await QuoteService.getQuote();
  currentQuote.value = quote;
  currentAuthor.value = author;
};
</script>
