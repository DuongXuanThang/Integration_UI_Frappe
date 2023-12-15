<!-- Navigation.vue -->
<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" class="nav-link"><i class="fa-solid fa-location-dot vgm-distance"></i> Place</router-link>
      </li>
      <li>
        <router-link to="/user" class="nav-link"><i class="fas fa-user vgm-distance"></i>  User</router-link>
      </li>
      <!-- Add other navigation links as needed -->
    </ul>
  </nav>
</template>

<style scoped>
/* Add styling for the navigation */


ul {
  list-style-type: none;
  padding: 0;
}

/* Add styling for router-link */
.nav-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Add transition for smooth effect */
}

/* Add hover effect for nav-link */
.nav-link:hover {
  background-color: #ece9ee; /* Change the background color on hover */
}
</style>
  <script>
  export default {
    // Add component logic here
  };
  </script>
  
  <style scoped>
  /* Add styling for the navigation */
  nav {
    background-color: #D0CED0;
    width: 20%; /* Set width to 20% for 1:4 ratio */
    min-height: 100%; /* Set minimum height to 100% viewport height */
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
    height: 50px;
  }
  .vgm-distance{
    padding-right: 20px;
    padding-left: 20px;
  }
  a {
    text-decoration: none;
  }
  </style>
  