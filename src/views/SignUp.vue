<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref, computed } from "vue";

const store = useStore();
const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");

const singUp = async () => {
  await store.dispatch("signUp/signUp", {
    name: name.value,
    email: email.value,
    password: password.value,
  });
  router.push("/categories");
};
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
          Sign Up to your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="singUp">
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="user-name" class="sr-only">Name</label>
            <input
              v-model="name"
              id="user-name"
              name="text"
              type="text"
              autocomplete="text"
              required
              class="relative block w-full rounded-[10px] mt-[20px] border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="User name"
            />
          </div>
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
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
