<script setup>
import defaultPicture from "../assets/defaultPicture.jpg";
import { useStore } from "vuex";
import { computed, inject, onMounted, ref } from "vue";
import Category from "../components/Category.vue";

const logOut = inject("logOut");

const store = useStore();

const name = ref();
const type = ref("news");

const user = computed(() => store.getters["auth/getUser"]);
const categories = computed(() => store.getters["categories/getCategories"]);

const addCategory = async () => {
  await store.dispatch("categories/addCategory", {
    name: name.value,
    type: type.value,
  });
  name.value = null;
  type.value = "news";
};

const renderDefaultAvatar = (e) => {
  e.target.src = defaultPicture;
};

const signOut = () => logOut();

const changeSearchName = (e) => {
  store.commit("categories/CHANGE_SEARCH_NAME", e.target.value);
};
const changeSearchType = (e) => {
  store.commit("categories/CHANGE_SEARCH_TYPE", e.target.value);
};

onMounted(() => store.dispatch("categories/getCategories"));
</script>

<template>
  <div v-if="user">
    <div class="flex row justify-between">
      <div class="m-1.5 flex">
        <img
          :alt="`Avatar of ${user.name}`"
          :src="user.avatar"
          class="h-[150px] w-auto"
          @error="renderDefaultAvatar"
        />
        <div class="flex justify-center items-center flex-col">
          <h1 class="mb-[10px]">{{ user.name }}</h1>
          <button
            class="ml-1.5 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            @click="signOut"
          >
            Sign Out
          </button>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <form
          class="flex justify-center items-center"
          @submit.prevent="addCategory"
        >
          <div class="flex items-center border-b border-teal-500 py-2">
            <select
              v-model="type"
              class="focus:outline-none border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option selected value="news">News</option>
              <option value="product">Product</option>
              <option value="social">Social</option>
            </select>
            <input
              v-model="name"
              aria-label="Full name"
              class="ml-3 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Name"
              required
              type="text"
            />
            <button
              class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <div class="px-10 py-20">
        <form>
          <div>
            <label>Choose type</label>
            <select
              class="focus:outline-none border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              @change="changeSearchType"
            >
              <option selected value="">All</option>
              <option selected value="news">News</option>
              <option value="product">Product</option>
              <option value="social">Social</option>
            </select>
          </div>
          <div class="max-w-xl">
            <div class="flex space-x-4">
              <div class="flex rounded-md overflow-hidden w-full flex-col">
                <label>Enter Name</label>
                <input
                  class="border-solid border-2 border-indigo-600 w-full rounded-md rounded-r-none"
                  type="text"
                  @input="changeSearchName"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div
      class="overflow-x-auto shadow-md sm:rounded-lg flex justify-center items-center"
    >
      <table class="w-full text-sm text-left text-neutral-900">
        <thead class="text-xs text-gray-700 uppercase">
          <tr>
            <th class="px-6 py-3" scope="col">Name</th>
            <th class="px-6 py-3" scope="col">Type</th>
            <th class="px-6 py-3" scope="col"></th>
            <th class="px-6 py-3" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <Category v-for="category in categories" :category="category" />
        </tbody>
      </table>
    </div>
  </div>
</template>
