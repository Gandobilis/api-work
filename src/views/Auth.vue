<script setup>
import {inject, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();

const auth = inject('auth');

const name = ref();
const email = ref();
const password = ref();
const destination = route.params.destination;
const inOrUp = destination === 'register' ? 'Up' : 'In';

const fAuth = async () => {
  const data = {
    email: email.value,
    password: password.value,
  };
  if (inOrUp === 'Up')
    data.name = name.value

  await auth({data, destination});
};
</script>

<template>
  <div
      class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div>
        <img
            alt="Your Company"
            class="mx-auto h-12 w-auto"
            src="../assets/defaultPicture.jpg"
        />
        <h2
            class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Sign {{ inOrUp }} to your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="fAuth">
        <div class="-space-y-px rounded-md shadow-sm">
          <div v-if="destination === 'register'">
            <label class="sr-only" for="user-name">Name</label>
            <input
                id="user-name"
                v-model="name"
                autocomplete="text"
                class="relative block w-full rounded-[10px] mt-[20px] border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="User name"
                required
                type="text"
            />
          </div>
          <div>
            <label class="sr-only" for="email-address">Email address</label>
            <input
                id="email-address"
                v-model="email"
                autocomplete="email"
                class="relative block w-full rounded-[10px] mt-[20px] border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Email address"
                required
                type="email"
            />
          </div>
          <div>
            <label class="sr-only" for="password">Password</label>
            <input
                id="password"
                v-model="password"
                autocomplete="current-password"
                class="relative block w-full rounded-[10px] mt-[20px] border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="password"
                placeholder="Password"
                required
                type="password"
            />
          </div>
        </div>
        <div>
          <button
              class="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign {{ inOrUp }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>