<!-- TableBody.vue -->
<template>
    <div>
      <div v-for="(row, rowIndex) in rows" :key="rowIndex" class="grid items-center rounded p-2">
        <div v-for="(column, colIndex) in columns" :key="colIndex" class="flex items-center space-x-2 text-base text-gray-800">
          <div>{{ row[column.field] }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      columns: {
        type: Array,
        required: true,
      },
      rows: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  