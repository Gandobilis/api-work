<script setup>
import defaultPicture from "../assets/defaultPicture.jpg";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";
import Category from "../components/Category.vue";

const store = useStore();
const router = useRouter();

const name = ref("");

const user = computed(() => store.getters["signIn/getUser"]);
const categories = computed(() => store.getters["categories/getCategories"]);

const addCategory = async () =>
  await store.dispatch("categories/addCategory", name.value);

const renderDefaultAvatar = (e) => {
  e.target.src = defaultPicture;
};

const signOut = () => {
  store.commit("signIn/SIGN_OUT");
  router.push("/");
};

onMounted(() => {
  store.dispatch("categories/getCategories");
});
</script>

<template>
  <div class="sticky flex border-red-100">
    <img
      class="h-[150px] w-auto"
      :src="user?.avatar"
      @error="renderDefaultAvatar"
      :alt="`Avatar of ${user?.name}`"
    />
    <div class="flex justify-center items-center flex-col">
      <h1 class="mb-[10px]">{{ user?.name }}</h1>
      <button
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        @click="signOut"
      >
        Sign Out
      </button>
    </div>
    <form
      class="w-full flex justify-center items-center max-w-sm"
      @submit.prevent="addCategory"
    >
      <div class="flex items-center border-b border-teal-500 py-2">
        <input
          v-model="name"
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Name"
          aria-label="Full name"
        />
        <button
          class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  </div>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Type</th>
          <th scope="col" class="px-6 py-3"></th>
          <th scope="col" class="px-6 py-3"></th>
        </tr>
      </thead>
      <tbody>
        <Category v-for="category in categories" :category="category" />
      </tbody>
    </table>
  </div>
</template>
