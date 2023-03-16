<script setup>
import {useStore} from "vuex";
import {ref} from "vue";

const props = defineProps({
  category: Object,
});

const store = useStore();
const newName = ref();

const editing = ref();
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
const deleteCategory = async (id) =>
    await store.dispatch("categories/deleteCategory", id);
</script>

<template>
  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
    <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {{ category.name }}
    </th>
    <td class="px-6 py-4">{{ category.type }}</td>
    <td class="px-6 py-4 resize">
      <div class="flex w-[100px]" >
        <input v-if="editing" v-model="newName"/>
        <button
            @click="editCategory(category.id)"
            class="font-medium ml-2 text-blue-600 dark:text-blue-500 hover:underline"
        >
          {{ editing ? 'Save' : 'Edit' }}
        </button>
        <div>
          <button
              v-if="editing"
              @click="editing=!editing"
              class="font-medium text-red-600 dark:text-red-500 hover:underline ml-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </td>
    <td class="px-6 py-4">
      <button
          @click="deleteCategory(category.id)"
          class="font-medium text-red-600 dark:text-red-500 hover:underline"
      >
        Delete
      </button>
    </td>
  </tr>
</template>
