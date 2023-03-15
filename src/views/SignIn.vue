<script setup>
import {inject, ref} from "vue";

const auth = inject('auth');

const email = ref();
const password = ref();

const singIn = async () =>
    await auth({
      email: email.value,
      password: password.value,
      destination: "login",
    });

</script>

<template>
  <div
      class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div>
        <img
            class="mx-auto h-12 w-auto"
            src="../assets/defaultPicture.jpg"
            alt="Your Company"
        />
        <h2
            class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Sign In to your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="singIn">
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
                v-model="email"
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="relative block w-full rounded-[10px] mt-[20px] border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
                v-model="password"
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="relative block w-full rounded-[10px] mt-[20px] border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Password"
            />
          </div>
        </div>
        <div>
          <button
              type="submit"
              class="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
