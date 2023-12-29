<!-- Navigation.vue -->
<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" class="nav-link" :class="{ 'active': $route.path === '/' }">
          <i class="fa-solid fa-ticket vgm-distance"></i> Sản phẩm
        </router-link>
      </li>
      <li>
        <router-link to="/KichBan" class="nav-link" :class="{ 'active': $route.path === '/KichBan' }">
          <i class="fa-solid fa-list-ol vgm-distance"></i>  Kịch bản
        </router-link>
      </li>
      <li>
        <router-link to="/BieuMau" class="nav-link" :class="{ 'active': $route.path === '/BieuMau' }">
          <i class="fa-solid fa-clipboard vgm-distance"></i>  Biểu mẫu
        </router-link>
      </li>
      <li>
        <router-link to="/Report" class="nav-link" :class="{ 'active': $route.path === '/Report' }">
          <i class="fa-solid fa-chart-bar vgm-distance"></i>  Báo cáo
        </router-link>
      </li>
      <li>
        <router-link to="/user" class="nav-link" :class="{ 'active': $route.path === '/user' }">
          <i class="fas fa-user vgm-distance"></i>  Nhân viên
        </router-link>
      </li>
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
    font-size: 15px;
  }
  
  /* Add hover effect for nav-link */
  .nav-link:hover,
  .nav-link.active {
    background-color: #cccacd; /* Change the background color on hover or when active */
  }
  
  nav {
    background-color: #F9FAFA;
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
  
  .vgm-distance {
    padding-right: 20px;
    padding-left: 20px;
  }
  
  a {
    text-decoration: none;
  }
  </style>
  