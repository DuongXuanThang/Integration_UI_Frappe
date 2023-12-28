<template>
 <ListView
        class="h-[250px]"
        :columns="simple_columns"
        :rows="simple_rows"
        :options="{
          getRowRoute: (row) => ({ name: 'User', params: { userId: row.id } }),
          selectable: state.selectable,
          showTooltip: state.showTooltip,
        }"
        row-key="id"
      />
  
</template>

<script setup>
import ListView from '@/components/ListView/ListView.vue';
import { reactive } from 'vue'
const state = reactive({
  selectable: true,
  showTooltip: true,
})
const simple_columns = [
  {
    label: 'Name',
    key: 'name',
    width: 3,
  },
  {
    label: 'Email',
    key: 'email',
    width: '200px',
  },
  {
    label: 'Role',
    key: 'role',
  },
  {
    label: 'Status',
    key: 'status',
  },
]

const simple_rows = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@doe.com',
    status: 'Active',
    role: 'Developer',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@doe.com',
    status: 'Inactive',
    role: 'HR',
  },
]

</script>
<style scoped>
/* Add styling for the about page */
div {
  background-color: #ecf0f1;
  padding: 10px;
}
</style>