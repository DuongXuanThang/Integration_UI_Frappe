<template>
  <header>
    <a class="ml-6 text-3xl font-bold text-gray-50 dark:text-gray-200" href="#">
      VGM Audit App
    </a>
    <div class="header-icons">
      <i class="fas fa-search"></i>
      <i class="fas fa-bell"></i>
      <i class="fas fa-user"></i>
      <!-- <Button
  :variant="'solid'"
  theme="gray"
  size="sm"
  label="Button"
  :loading="false"
  :loadingText="null"
  :disabled="false"
  :link="null"
>
  Click
</Button> -->
<!-- <Dropdown :options="dropdownOptions"  :button="{label: 'Actions', }"  /> -->
    </div>
  </header>
</template>

<script >
import '@fortawesome/fontawesome-free/css/all.css'
import { h } from 'vue';
import { Dropdown,FeatherIcon } from 'frappe-ui';
export default {
  components: {
    Dropdown,
    FeatherIcon
  },
  data() {
    return {
      dropdownOptions: [
        { label: 'Đăng xuất', icon: () => h(FeatherIcon, { name: 'edit' }),onClick: () => {
          console.log('123');
        }},
        { label: 'Thông tin người dùng',icon: () => h(FeatherIcon, { name: 'user' }), },
      ],
    };
  },
  methods: {
    handleDropdownClick(event) {
      console.log('Dropdown clicked!', event);
      // Xử lý logic khi dropdown được click
    },
  },
}
</script>

<style scoped>
/* Add styling for the header */
header {
  display: flex;
  background: linear-gradient(to right, #56ab2f, #6f9f33);
  color: white;
  padding: 10px;
  text-align: left;
  height: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.header-icons {
  margin-left: auto;
}
.header-icons i {
  margin-right: 30px; /* Set margin-right to 10px for each icon */
}
</style>
