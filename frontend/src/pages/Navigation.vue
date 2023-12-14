<!-- Navigation.vue -->
<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <!-- Add other navigation links as needed -->
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    // Add component logic here
  };
  </script>
  
  <style scoped>
  /* Add styling for the navigation */
  nav {
    background-color: #D0CED0;
    color: white;
    padding: 10px;
    width: 20%; /* Set width to 20% for 1:4 ratio */
    min-height: 100%; /* Set minimum height to 100% viewport height */
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  </style>
  