<template>
  <div class="relative min-h-screen">
    <div
      class="fixed top-0 z-50 w-full bg-gradient-background bg-180% animate-gradient-animation bg-slate-700 h-16 flex items-center  ">
      <img class="w-18 h-16 mx-10" src="../assets/images/learn.png" alt="book" />
      <h1 class="flex-auto w-64 text-xl text-white font-bold xl:text-3xl">Mantra NuxtJs Learnings</h1>
      <img class="w-18 h-18 mx-10" width="68" height="48" src="../assets/images/sudheer.png" alt="Sudheer" />
    </div>
    <div class="bg-slate-700 w-26 h-full fixed">
      <nav class="flex flex-col p-5">
        <NuxtLink to="/userAuthentication/register" class="mb-5 text-lg text-white">Register</NuxtLink>
        <NuxtLink to="/userAuthentication/login" class="mb-5 text-lg text-white">login</NuxtLink>
      
      </nav>
    </div>
    <div class="ml-24  overflow-y-auto" style="margin-top: 4rem; position: sticky; top: 0;">
      <div class="w-full">
        <slot />
      </div>
    </div>
  </div>
</template>