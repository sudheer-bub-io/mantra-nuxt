
import { defineStore } from "pinia";

function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}
export const userDataStore = defineStore('mydata', () => {
  const data = ref("sudheer from store");
  console.log("Hi Maom")
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

export const Crudusers = defineStore('mydata', () => {
  const uservalues = ref([
    {
      id: generateRandomNumber(),
      name: 'sudheer',
      age: 22,
    },
    {
      id: generateRandomNumber(),
      name: 'lokesh',
      age: 24,
    },
  ]);
  const userName = ref('');
  const userAge = ref('');

  console.log('userName Empty ' + userName.value);
  console.log('userAge Empty ' + userAge.value);

  function onFormUserSubmit() {
    const userValue = {
      id: generateRandomNumber(),
      name: userName.value,
      age: userAge.value,
    };
    uservalues.value.push(userValue);
    userName.value = '';
    userAge.value = '';
  }
  function onDeleteUser(id){
    uservalues.value = uservalues.value.filter((user) => user.id !== +id);
  }
  return {  uservalues, userName, userAge, onFormUserSubmit ,onDeleteUser};
});