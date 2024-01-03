<!-- Navigation.vue -->
<template>
  <!-- <nav>
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
    
    </ul>
  </nav> -->
  <aside
        class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0"
      >
        <div class="text-gray-500 dark:text-gray-400">
          <ul >
            <li class="relative px-6 py-3" :class="{ 'active': $route.path === '/' }">
              <router-link to="/" 
               class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <i class="fa-solid fa-barcode"></i>
                <span class="ml-4">Sản phẩm</span>
              </router-link>
            </li>
          </ul>
          <ul>
            <li class="relative px-6 py-3" :class="{ 'active': $route.path === '/KichBan' }">
              <router-link to="/KichBan"
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" >
                <i class="fa-solid fa-list-ol"></i> 
                <span class="ml-4">Kịch bản</span>
              </router-link>
            </li>
            <li class="relative px-6 py-3" :class="{ 'active': $route.path === '/BieuMau' }">
              <router-link to="/BieuMau" 
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              >
              <i class="fa-solid fa-clipboard"></i> 
                <span class="ml-4">Biểu mẫu</span>
              </router-link>
            </li>
            <li class="relative px-6 py-3" :class="{ 'active': $route.path === '/Report' }">
              <router-link to="/Report"
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              >
              <i class="fa-solid fa-chart-bar"></i>
                <span class="ml-4">Báo cáo</span>
              </router-link>
            </li>
            <li class="relative px-6 py-3" :class="{ 'active': $route.path === '/user' }">
              <router-link  to="/user"
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              >
                <i class="fas fa-user"></i>
                <span class="ml-4">Nhân viên</span>
              </router-link>
            </li>
          </ul>
          <div class="px-6 my-6">
            <button
              class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            >
            Thêm mới sản phẩm
              <span class="ml-2" aria-hidden="true">+</span>
            </button>
          </div>
        </div>
      </aside>
</template>

  <script>
  export default {
    components: {
  },
  data() {
    return {
      selectedItem: null,
    };
  },
  methods: {
    handleItemSelected(item) {
      this.selectedItem = item;
    },
  },
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
  .active {
  border-left: 3px solid #3490dc; /* Màu sắc tùy chọn */
  background-color: #f0f4f8; /* Màu sắc tùy chọn */
  color: #3490dc; /* Màu sắc tùy chọn */
}
  </style>
  