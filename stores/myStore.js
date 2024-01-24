
import { defineStore } from "pinia";
import { useToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const toast = useToast();

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}
export const userDataStore = defineStore('mydata', () => {
  return { data };
});

export const usersdata = defineStore('userdata', () => {
  const users = ref([]);
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/users');
      const data = await response.json();
      if (response.ok) {
        users.value = data;
      } else {
        console.error("Error fetching users:", data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  return {
    fetchUsers,
    users,

  };
});

export const crudusers = defineStore('mydata2', () => {
  const uservalues = ref([
    {id: generateRandomNumber(),name: 'sudheer',age: 22,},
    {id: generateRandomNumber(),name: 'lokesh',age: 24,},
  ]);

  const userName = ref('');
  const userAge = ref('');
  function onFormUserSubmit() {
    const { $checkInputFeild } = useNuxtApp();
    const userValue = {
      id: generateRandomNumber(),
      name: userName.value,
      age: userAge.value,
    };
    const isValid = $checkInputFeild(userValue);

    if (!isValid) {
      toast.error('Enter All The Fields');
    } else {
      const ageRegex = /^(?:[1-9]|[1-9][0-9]|120)$/
      if (!ageRegex.test(userAge.value)) {
        toast.error('Enter Valid Age');
      } else {
        uservalues.value.push(userValue);
        toast.success('User Added Successfully');
        userName.value = '';
        userAge.value = '';
      }
    }

  }
  function onDeleteUser(id) {
    uservalues.value = uservalues.value.filter((user) => user.id !== +id);
  }

  return { uservalues, userName, userAge, onFormUserSubmit, onDeleteUser };
});
export const isSign = defineStore('mydata', () => {
  const userSigned = ref(false);
  return { userSigned };
});

export const enteredColor = defineStore('mydata', () => {
  const userColor = ref(true);
  return { userColor }
});
export const Pokemon = defineStore('pokemon', () => {
  const searchedPokemon = ref("bulbasaur")
  const playCards = ref([]);
  const fetchCards = async () => {
    try {
      const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchedPokemon.value}/`);
      const data = await response.json();
      if (response.ok) {
        playCards.value = data;
      } else {
        console.error("Error fetching users:", data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  return {
    fetchCards,
    playCards,
    searchedPokemon
  };
});