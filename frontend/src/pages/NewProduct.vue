<template>
  <div class="p-2" style="padding: 10px;text-align: left;">
    <div style="display: flex; justify-content: end;">
        <Dropdown  :options="[
      {
        label: 'Thêm sản phẩm',
        value: '1',
      },
      {
        label: 'Xóa sản phẩm',
        value: '1',
      },
      {
        label: 'In',
        value: '1',
      },
      {
        label: 'Sao chép',
        value: '1',
      },
    ]"  :button="{label: '...', }"  style="margin-right: 10px;" />
        <Button @click="handleButtonClick" class="btn-save">Save</Button>
    </div>
   
  <FormControl
    :type="'text'"
    size="sm"
    variant="subtle"
    placeholder="Nhập mã sản phẩm"
    :disabled="false"
    label="Mã sản phẩm (Bar code)"
    v-model="state.modelValuebarcode"
    class="pdd-class"
  />
  <FormControl
    :type="'text'"
    size="sm"
    variant="subtle"
    placeholder="Nhập mã sản phẩm"
    :disabled="false"
    label="Mã sản phẩm"
    v-model="state.modelValuecode"
    class="pdd-class"
  />
  <FormControl
    :type="'text'"
    size="sm"
    variant="subtle"
    placeholder="Nhập tên sản phẩm"
    :disabled="false"
    label="Tên sản phẩm"
    v-model="state.valueName"
    class="pdd-class"
  />
  <FormControl
    :type="'select'"
    size="sm"
    variant="subtle"
    placeholder="Nhập loại sản phẩm"
    :disabled="false"
    label="Loại sản phẩm"
    :options="[
      {
        label: 'Thực phẩm nhanh',
        value: '1',
      },
    ]"
    class="pdd-class"
  />
  <ListView
        class="h-auto pdd-class"
        :columns="simple_columns"
        :rows="simple_rows"
        :options="{
          selectable: true,
          showTooltip: true,
        }"
        row-key="id"
        
      />
  <FormControl
    :type="'textarea'"
    size="sm"
    variant="subtle"
    placeholder="Nhập mô tả sản phẩm"
    :disabled="false"
    label="Mô tả"
    v-model="state.valueDescription"
    class="pdd-class"
  />

 
</div>
  </template>
  
  <script setup lang="ts">
 import FormControl from '../components/FormControl.vue'
 import ListView from '../components/ListView/ListView.vue';
 import { reactive } from 'vue'
 import { onMounted, ref } from 'vue';
 import { useRouter } from 'vue-router';
 import { h } from 'vue';
import { Dropdown,FeatherIcon, createListResource } from 'frappe-ui';
 const state = reactive({
  modelValuebarcode:'',
  modelValuecode: '',
  modelValue: '',
  valueName:'',
  valueDescription:"",
})

const inputTypes = [
  'text',
  'number',
  'email',
  'date',
  'password',
  'search',
  'textarea',
]
const sizes = ['sm', 'md', 'lg', 'xl']
const variants = ['subtle', 'outline']
const simple_columns = [
  {
    label: 'STT',
    key: 'code',
    width: 3,
  },
  {
    label: 'Đường dẫn ảnh',
    key: 'photo',
  }
]

const simple_rows = [
  {
    id: 1,
    code: '1',
    name: 'Dove',
    description: 'This template ',
    email: 'john@doe.com',
    photo: '/files/img_4.jpg',
    status: 'Active',
    role: 'Developer',
  },
  {
    id: 2,
    code: '2',
    name: 'Cocacola',
    description: 'This template ',
    email: 'jane@doe.com',
    status: 'Inactive',
    role: 'HR',
    photo: '/files/img_4.jpg'
  },
]

  // Code bạn muốn chạy khi component được mounted
  const router = useRouter();
  
  const resource = createListResource({
  doctype: 'Product',
  })
const handleButtonClick = () => {
 
  const newproduct = reactive({
    barcode : state.modelValuebarcode,
    product_code : state.modelValuecode,
    product_name : state.valueName,
    product_description : state.valueDescription
  })
  resource.insert.submit(newproduct)
  resource.reload();
  router.push('/');
}
  </script>
  <style scoped>
  /* Add styling for the about page */

  .btn-save{
    background-color: #2490EF;
    color: white;
  }
  .pdd-class{
    padding-bottom: 20px;
  }
  </style>