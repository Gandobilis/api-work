<script setup>
import { useStore } from "vuex";
import { ref } from "vue";

const props = defineProps({
  category: Object,
});

const store = useStore();
const newName = ref();

const editing = ref();
const deleting = ref();
const editCategory = async (id) => {
  if (editing.value) {
    await store.dispatch("categories/editCategory", {
      id,
      name: newName.value,
      type: props.category.type,
    });
  } else {
    newName.value = props.category.name;
  }
  editing.value = !editing.value;
};
const deleteCategory = async (id) => {
  if (deleting.value) {
    await store.dispatch("categories/deleteCategory", id);
  } else {
    deleting.value = !deleting.value;
  }
};
</script>

<template>
  <tr>
    <th class="px-6 py-4 font-medium whitespace-nowrap" scope="row">
      {{ category.name }}
    </th>
    <td class="px-6 py-4">{{ category.type }}</td>
    <td class="px-6 py-4 resize">
      <div class="flex w-[100px]">
        <input
          v-if="editing"
          v-model="newName"
          class="outline-none border border-gray-300 rounded-lg p-1"
        />
        <div class="flex justify-center space-x-2">
          <button
            :style="{
              'background-color': editing
                ? 'rgb(34 197 94)'
                : 'rgb(59 130 246)',
            }"
            class="ml-1 inline-block text-white rounded p-1.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]"
            @click="editCategory(category.id)"
          >
            {{ editing ? "Save" : "Edit" }}
          </button>
        </div>
        <div>
          <button
            v-if="editing"
            class="inline-block bg-red-500 text-white ml-1 p-1.5 rounded bg-danger text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]"
            @click="editing = !editing"
          >
            Cancel
          </button>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 w-[210px] flex">
      <div v-if="deleting" class="flex items-center">
        <h1>Are you sure?</h1>
        <div class="ml-1">
          <button
            class="inline-block rounded bg-neutral-800 p-1.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]"
            @click="deleteCategory(category.id)"
          >
            Yes
          </button>
          <button
            class="inline-block rounded bg-neutral-50 ml-1 p-1.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)]"
            @click="deleting = !deleting"
          >
            No
          </button>
        </div>
      </div>
      <div v-else>
        <button
          class="inline-block bg-red-500 text-white ml-1 p-1.5 rounded bg-danger text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]"
          @click="deleteCategory(category.id)"
        >
          Delete
        </button>
      </div>
    </td>
  </tr>
</template>
