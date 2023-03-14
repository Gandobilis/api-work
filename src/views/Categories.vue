<script setup>
import defaultPicture from "../assets/defaultPicture.jpg";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import {computed} from "vue";

const store = useStore();
const router = useRouter();

const user = computed(() => store.getters["signIn/getUser"]);

const renderDefaultAvatar = (e) => {
  e.target.src = defaultPicture;
};

const signOut = () => {
  store.commit("signIn/signOut");
  router.push("/");
};
</script>

<template>
  <div class="flex absolute top-5 left-5 border-red-100">
    <img
      class="h-[150px] w-auto"
      :src="user.avatar"
      @error="renderDefaultAvatar"
      :alt="`Avatar of ${user.name}`"
    />
    <div class="flex justify-center items-center">
      <button
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        @click="signOut"
      >
        Sign Out
      </button>
    </div>
  </div>
</template>
