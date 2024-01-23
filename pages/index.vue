<template>
    <h1 class="ml-5">logInIn To Enter</h1>
</template>
<script setup>
console.log("hello")
 // you will get access to the myobject1 due to inheritance behaviour 

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


</script>