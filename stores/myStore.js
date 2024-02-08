
import { defineStore } from "pinia";
import { useToast } from 'vue-toastification';
export const userDataStore = defineStore('mydata', () => {
  return { data };
});

export const usersdata = defineStore('userdata', () => {
  const users = ref([]);
  const userSearchInput = ref("");

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/users');
      const data = await response.json();
      if (response.ok) {
        if (userSearchInput.value === "") {
          users.value = data;
        } else {
          users.value = data.filter(user => user.username.includes(userSearchInput.value));
        }
      } else {
        console.error("Error fetching users:", data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  watch(userSearchInput, async (newValue, oldValue) => {
    if (newValue !== oldValue) {
      await fetchUsers();
    }
  });

  return { fetchUsers, users, userSearchInput, };
});


export const crudusers = defineStore('mydata2', () => {
  const submitUser = [
    { id: 1, type: "text", name: "userName", placeholder: "userName", value: '' },
    { id: 2, type: "text", name: "userAge", placeholder: "UserAge", value: '' },
  ]


  const updateUserClicked = ref(false)

  const alldata = {
    uservalues: ref([
      { id: generateRandomNumber(), name: 'sudheer', age: 22, },
      { id: generateRandomNumber(), name: 'lokesh', age: 24, },
    ])
  }
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
  }
  function addEmployee(addEmployee, crudType) {
    alldata[crudType].value.push(addEmployee)
  }
  function onUpdated(updatedObject, crudType) {
    const index = alldata[crudType].value.findIndex(user => {
      return user.id == updatedObject.id;
    });

    if (index !== -1) {
      alldata[crudType].value.splice(index, 1, updatedObject);
    } else {
      console.log("Error");
    }

    updateUserClicked.value = !updateUserClicked.value;
  }
  function deleteEmployee(id, crudType) {
    alldata[crudType].value = alldata[crudType].value.filter(x => x.id !== id);
  }
  return { submitUser, updateUserClicked, alldata, addEmployee, onUpdated, deleteEmployee, generateRandomNumber };
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
  const searchedPokemon = ref("34")
  const playCards = ref([]);
  const userFavCards = ref([]);
  const userCardStatus = ref(null)
  const fetchCards = async () => {
    try {
      if (searchedPokemon.value > 1000) {
        useToast().error(`Enter Values less than 1000`)
        searchedPokemon.value = "34"
      }
      const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchedPokemon.value}/`);
      const data = await response.json();
      if (response.ok) {
        playCards.value = data;
        console.log(data)
        userCardStatus.value =userFavCards.value.some(card => card.id === data.id);
        console.log(userCardStatus.value)
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
    searchedPokemon,
    userFavCards,
    userCardStatus
  };
});
export const currentUser = defineStore('currentUser', () => {
  const User = ref(null);
  return { User }
});