<script setup>
  import { enteredColor } from "../stores/myStore"

  const checkColor = enteredColor()
  const colors = ["green", "blue", "pink", "yellow"];
  const shuffledColors = shuffleArray(colors);
  const userEnteredArray = ref([]);
  const EnterdWrongOrder = ref(false);
  const userClicked = (value) => {
    if (!userEnteredArray.value?.includes(value)) {
      EnterdWrongOrder.value=false;
      userEnteredArray.value.push(value);
    }
  }

  function handelColorCheck(){
    if (arraysAreEqual(shuffledColors, userEnteredArray.value)) {
      navigateTo("/rock-paper-scissor")
      checkColor.userColor=false;
    } else {
      if(userEnteredArray.value.length==4){
        EnterdWrongOrder.value=true;
        userEnteredArray.value=[];
        shuffledColors=shuffleArray(colors)
      }
      console.log("Not Same");
    }
  }
  
  function arraysAreEqual(array1, array2) {
    const string1 = JSON.stringify(array1);
    const string2 = JSON.stringify(array2);
    return string1 === string2;
  } 
  
  function shuffleArray(array) {                                                   
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  </script>
  <template>
    <div class="flex justify-center items-center mt-44">
      <div class="flex flex-col bg-green-50 border border-green-300 shadow-lg rounded-md justify-center items-center w-3/12">
        <h1 class="p-5 text-xl font-black"> Pick Correct Colors to Unlock Game!</h1>
        <ul class="flex flex-wrap">
          <li v-for="color in shuffledColors" :key="color" class="inline-block m-1 text-lg">{{ color }}</li>
        </ul>
          <div class="flex justify-center items-center">
            <div>
              <div class="bg-green-300 p-4 m-2 p-24 w-28 h-20 rounded-md" @click="() => userClicked('green')" :class="{ 'blur-sm': userEnteredArray?.includes('green') }"></div>
              <div class="bg-blue-300 p-4 m-2 p-24 w-28 h-20 rounded-md" @click="() => userClicked('blue')" :class="{ 'blur-sm': userEnteredArray?.includes('blue') }"></div>
            </div>
            <div>
              <div class="bg-pink-300 p-4 m-2 p-24 w-28 h-20 rounded-md" @click="() => userClicked('pink')" :class="{ 'blur-sm': userEnteredArray?.includes('pink') }"></div>
              <div class="bg-yellow-200 p-4 m-2 p-24 w-28 h-20 rounded-md" @click="() => userClicked('yellow')" :class="{ 'blur-sm': userEnteredArray?.includes('yellow') }"></div>
            </div>
          </div>
          <p v-if="EnterdWrongOrder" class="text-red-600 text-lg text-bold">Picked wrong colors Try Again! </p>
          <button @click="handelColorCheck" class="w-24 bg-orange-500 h-10 m-10 rounded-md text-white">submit</button>
      </div>
    </div>
  </template>
  
  <style scoped>
  .blur-sm{
    filter: blur(5px);
    border-color: brown;
  }
  </style>
  