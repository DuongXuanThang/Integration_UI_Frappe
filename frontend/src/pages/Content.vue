<!-- Content.vue -->
<template>
    <div>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import Toast from '@/components/Toast.vue'
  export default {
    components: {
    }
    // Add component logic here
  };
  </script>
  
  <style scoped>
  /* Add styling for the content */
  div {
    padding: 10px;
    width: 100%; /* Set width to 80% for 1:4 ratio */
    background-color: #F9FAFB;
  }
  </style>
  