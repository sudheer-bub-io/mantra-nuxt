
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
          users.value= data.filter(user => user.username.includes(userSearchInput.value));
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

  return { fetchUsers, users, userSearchInput,};
});


export const crudusers = defineStore('mydata2', () => {
  const submitUser = [[
    { id: 1, type: "text", name: "userName", placeholder: "userName", value: '' },
    { id: 2, type: "text", name: "UserAge", placeholder: "UserAge", value: '' },
  ], "Save User", "Add User"]
  const uservalues = ref([
    { id: generateRandomNumber(), name: 'sudheer', age: 22, },
    { id: generateRandomNumber(), name: 'lokesh', age: 24, },
  ]);
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
  }
  const updateuserName = ref('');
  const updateuserAge = ref('');
  const updatedId = ref(0)
  const updateButtonClicked = ref(false);
  function onDeleteUser(id) {
    uservalues.value = uservalues.value.filter((user) => user.id !== +id);
  }
  function onUpdateUser(id, name, age) {
    updateButtonClicked.value = !updateButtonClicked.value;
    updateuserAge.value = age
    updateuserName.value = name
    updatedId.value = id
  }
  function onUpdateUserClicked() {
    const updatedObject = {
      id: updatedId.value,
      name: updateuserName.value,
      age: updateuserAge.value
    };
    const index = uservalues.value.findIndex(user => user.id === updatedObject.id);

    if (index !== -1) {
      uservalues.value.splice(index, 1, updatedObject);
      useToast().success('User Updated Successfully');
    } else {
      useToast().error('User not found');
    }
    updateButtonClicked.value = !updateButtonClicked.value;
    updatedId.value = 0;
    updateuserName.value = '';
    updateuserAge.value = '';
  }
  return { uservalues, submitUser, onDeleteUser, onUpdateUser, updateButtonClicked, updateuserName, updateuserAge, onUpdateUserClicked, generateRandomNumber };
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
  const fetchCards = async () => {
    try {
      if(searchedPokemon.value>1000){
        useToast().error(`Enter Values less than 1000`)
        searchedPokemon.value="34"
      }
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
export const currentUser = defineStore('currentUser', () => {
  const User = ref(null);
  return { User }
});