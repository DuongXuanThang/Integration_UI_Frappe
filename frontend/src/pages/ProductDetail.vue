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
        <Button class="btn-save">Save</Button>
    </div>
   
  <FormControl
    :type="'text'"
    size="sm"
    variant="subtle"
    placeholder="Nhập mã sản phẩm"
    :disabled="false"
    label="Mã sản phẩm (Bar code)"
    v-model="state.modelValue"
    class="pdd-class"
  />
  <FormControl
    :type="'text'"
    size="sm"
    variant="subtle"
    placeholder="Nhập mã sản phẩm"
    :disabled="false"
    label="Mã sản phẩm"
    v-model="state.modelValue"
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
    v-model="state.valueName"
    class="pdd-class"
  />
  <ListView
        class="h-auto pdd-class"
        :columns="simple_columns"
        :rows="simple_rows"
        :options="{
          selectable: state.selectable,
          showTooltip: state.showTooltip,
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
    v-model="state.modelValue"
    class="pdd-class"
  />

 
</div>
  </template>
  
  <script setup lang="ts">
 import FormControl from '../components/FormControl.vue'
 import ListView from '../components/ListView/ListView.vue';
 import { reactive } from 'vue'
 import { h } from 'vue';
import { Dropdown,FeatherIcon } from 'frappe-ui';
 const state = reactive({
  size: 'sm',
  variant: 'subtle',
  placeholder: 'Placeholder',
  disabled: false,
  label: 'Label',
  modelValue: 'PD001',
  valueName:'Dover',
  selectable: true,
  showTooltip: true,
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