<template>
    <div style="display: flex; justify-content: end;padding: 10px;">
        <Dropdown  :options="[
      {
        label: 'Thêm sản phẩm',
        value: '1',
      },
      {
        label: 'Xoa san pham',
        value: '1',
      },
      {
        label: 'In',
        value: '1',
      },
      {
        label: 'Sao chep',
        value: '1',
      },
    ]"  :button="{label: '...', }"  style="margin-right: 10px;" />
        <Button class="btn-save" ><i class="fa-solid fa-plus" style="font-size: 11px;"></i> Thêm sản phẩm</Button>
    </div>
 <ListView
        class="h-auto"
        :columns="simple_columns"
        :rows="simple_rows"
        :options="{
          getRowRoute: (row) => ({ name: 'product', params: { productId: row.id } }),
          selectable: state.selectable,
          showTooltip: state.showTooltip,
        }"
        row-key="id"
      />
  
</template>

<script setup>
import ListView from '@/components/ListView/ListView.vue';
import { Dropdown,FeatherIcon } from 'frappe-ui';
import { reactive } from 'vue'
// import router from 'vue-router';
const state = reactive({
  selectable: true,
  showTooltip: true,
})
const simple_columns = [
  {
    label: 'Mã sản phẩm',
    key: 'code',
    width: 3,
  },
  {
    label: 'Tên sản phẩm',
    key: 'name',
    width: '200px',
  },
  {
    label: 'Mô tả',
    key: 'description',
  },
  {
    label: 'Ảnh',
    key: 'photo',
  },
]

const simple_rows = [
  {
    id: 1,
    code: 'PD001',
    name: 'Dove',
    description: 'This template ',
    email: 'john@doe.com',
    photo: '/files/img_4.jpg',
    status: 'Active',
    role: 'Developer',
  },
  {
    id: 2,
    code: 'PD002',
    name: 'Cocacola',
    description: 'This template ',
    email: 'jane@doe.com',
    status: 'Inactive',
    role: 'HR',
    photo: '/files/img_4.jpg'
  },
  {
    id: 3,
    code: 'PD003',
    name: 'Custas',
    description: 'custom frontend',
    email: 'john@doe.com',
    status: 'Active',
    role: 'Developer',
    photo: '/files/img_4.jpg'
  },
  {
    id: 4,
    code: 'PD004',
    name: 'Banh Hoa Cuc',
    description: 'This template ',
    email: 'john@doe.com',
    status: 'Active',
    role: 'Developer',
    photo: '/files/img_4.jpg'
  },
  {
    id: 5,
    code: 'PD005',
    name: 'Banh Milano',
    description: 'rors while using the ',
    email: 'john@doe.com',
    status: 'Active',
    role: 'Developer',
    photo: '/files/img_4.jpg'
  },
]
// const redirectToCreateProduct = () => {
//   // Sử dụng Vue Router để chuyển route đến trang tạo sản phẩm
//   router.push('/product'); // Thay đổi '/create-product' thành route mà bạn muốn chuyển đến
// };
</script>
<style scoped>
/* Add styling for the about page */
.btn-save{
    background-color: #2490EF;
    color: white;
  }
</style>