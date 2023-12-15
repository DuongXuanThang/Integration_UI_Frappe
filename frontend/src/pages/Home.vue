<script setup>
import { ref, onMounted } from 'vue';
const data = ref(null);
// Import hàm gọi API từ Frappe UI
import { call } from 'frappe-ui';

// Sử dụng hàm gọi API
// call({
//   method: 'GET',
//   url: 'https://dummy.restapiexample.com/api/v1/employees',
//   // Thêm các thông số khác nếu cần
// })
//   .then(response => {
//     // Xử lý dữ liệu trả về từ API
//     console.log('API Response:', response);
//   })
//   .catch(error => {
//     // Xử lý lỗi khi gọi API
//     console.error('API Error:', error);
//   });
const fetchData = async () => {
  try {
    const response = await fetch('http://mbw.ts:8000/api/method/frappeui.api.get_product_list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Thêm các headers khác nếu cần thiết
      },
      // Thêm các tùy chọn request khác nếu cần thiết
    });

    const result = await response.json();
    data.value = result.message;
  } catch (error) {
    console.error('Error calling API:', error);
  }
};

onMounted(() => {
  fetchData();
});
</script>
<template>
   <div>
     <h2>{{ data }}</h2>
      <!-- Add about page content -->
    </div>
   
</template>
<style scoped>
/* Add styling for the about page */
div {
  background-color: #ecf0f1;
  padding: 10px;
  height: 100%;
}
</style>