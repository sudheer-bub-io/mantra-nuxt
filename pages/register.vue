<template>
  <form @submit.prevent="register">
    <div class="flex flex-col justify-center ml-96 mt-20">
      <div>
        <label>Username:</label>
        <input v-model="username" class="bg-slate-200" type="text" required />
      </div>
      <div>

        <label>Email:</label>
        <input v-model="email" type="email" required class="bg-slate-200" />
      </div>
      <div>

        <label>Password:</label>
        <input v-model="password" type="password" required class="bg-slate-200" />
        <button type="submit">Register</button>
      </div>




    </div>

  </form>
</template>
<script setup>
const username = ref('');
const email = ref('');
const password = ref('');

async function register() {
  console.log(username.value)
console.log(email.value)
console.log(password.value) 
  try {
    localStorage.setItem('username', username.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
  } catch (error) {
    console.error('Registration failed:', error);
  }
}
</script>