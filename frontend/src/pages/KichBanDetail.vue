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
      label="Tên kịch bản"
      v-model="state.modelValue"
      class="pdd-class"
    />
    <FormControl
      :type="'textarea'"
      size="sm"
      variant="subtle"
      placeholder="Nhập mô tả"
      :disabled="false"
      label="Mô tả"
      v-model="state.modelValue"
      class="pdd-class"
    />
    <FormControl
      :type="'date'"
      size="sm"
      variant="subtle"
      placeholder="Nhập mã sản phẩm"
      :disabled="false"
      label="Ngày chỉnh sửa"
      class="pdd-class"
    />
    <FormControl
      :type="'text'"
      size="sm"
      variant="subtle"
      placeholder="Nhập nhân viên"
      :disabled="false"
      label="Nhân viên"
      v-model="state.valueName"
      class="pdd-class"
    />
    <label class="text-gray-600 text-xs">Sản phẩm</label>
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

        <label class="text-gray-600 text-xs">Danh sách câu hỏi</label>
    <ListView
          class="h-auto pdd-class"
          :columns="simple_columns2"
          :rows="simple_rows"
          :options="{
            selectable: state.selectable,
            showTooltip: state.showTooltip,
          }"
          row-key="id"
          
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
    modelValue: 'Giám sát 1',
    valueName:'xuanthang@doe.com',
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
      label: 'Tên sản phẩm',
      key: 'photo',
    }
  ]
  const simple_columns2 = [
    {
      label: 'STT',
      key: 'code',
      width: 3,
    },
    {
      label: 'Câu hỏi',
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
      photo: 'Custas',
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
      photo: 'Custas'
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