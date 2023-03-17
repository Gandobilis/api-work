<template>
  <div class="flex items-center justify-center min-h-screen">
    <h1>https://items.magischer.de</h1>
    <div class="border w-fit rounded-xl m-5 shadow-sm">
      <router-link to="/auth/register">
        <button
          class="px-4 py-2 rounded-l-xl text-white m-0 bg-red-500 hover:bg-red-600 transition"
        >
          Sign up
        </button>
      </router-link>
      <router-link to="/auth/login">
        <button
          class="px-4 py-2 rounded-r-xl bg-neutral-50 hover:bg-neutral-100 transition"
        >
          Sign in
        </button>
      </router-link>
    </div>
  </div>
</template>
