<!-- ListView.vue -->
<template>
  <div class="list-view">
    <!-- Header -->
    <div class="mb-1 grid items-center rounded bg-gray-100 py-2 pl-2 pr-4 overflow-x-hidden" :style="{ gridTemplateColumns: columnWidths }">
      <div v-for="(column, colIndex) in columns" :key="colIndex" class="space-x-2 text-base text-gray-800">
        <div class="text-base" v-if="column.field" :style="{ flexBasis: column.width }">{{ column.label }}</div>
      </div>
    </div>
    
    <!-- Rows -->
    <div v-for="(row, rowIndex) in rows" :key="row[rowKey]" class="entity grid items-center cursor-pointer mb-1 rounded pl-2 pr-4 py-1.5 hover:bg-gray-50 group" :style="{ gridTemplateColumns: columnWidths }">
      <div v-for="(column, colIndex) in columns" :key="colIndex" class="space-x-2 text-base text-gray-800">
        <div class="text-base" v-if="column.field" :style="{ flexBasis: column.width }">{{ row[column.field] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    class: String,
    columns: Array,
    rows: Array,
    options: Object,
    rowKey: String,
  },
  computed: {
    columnWidths() {
    return this.columns.map(column => column.width).join(' ');
  },
    state() {
      return {
        selectable: this.options && this.options.selectable,
        showTooltip: this.options && this.options.showTooltip,
      };
    },
  },
};
</script>

<style scoped>
.list-view {
  /* ... */
}

/* Thêm các lớp CSS để tùy chỉnh giao diện theo ý muốn */
</style>
