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
      <FileUploader class="pdd-class"
      :fileTypes="['image/*']"
      :uploadArgs="objUploadArgs"
      :validateFile="validateFileFunction"
      @success="onSuccess"
    >
      <template
        v-slot="{
          file,
          uploading,
          progress,
          uploaded,
          message,
          error,
          total,
          success,
          openFileSelector,
        }"
      >
        <Button @click="openFileSelector" :loading="uploading">
          {{ uploading ? `Uploading ${progress}%` : 'Upload Image' }}
        </Button>
      </template>
    </FileUploader>
    <ListView
     v-if="state.simple_rows.length > 0"
        class="h-auto pdd-class"
        :columns="simple_columns"
        :rows="state.simple_rows"
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
  
  <script setup >
 import FormControl from '../components/FormControl.vue'
 import ListView from '../components/ListView/ListView.vue';
 import FileUploader from './../components/FileUploader.vue'
 import Button from '../components/Button.vue'
 import { reactive } from 'vue'
 import { onMounted, ref } from 'vue';
 import { useRouter } from 'vue-router';
 import { h } from 'vue';
import { Dropdown,FeatherIcon, createListResource,createResource } from 'frappe-ui';
const validateFileFunction = (fileObject) => {
}

 const state = reactive({
  modelValuebarcode:'',
  modelValuecode: '',
  modelValue: '',
  valueName:'',
  valueDescription:"",
  simple_rows: [],
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
    label: 'Đường dẫn ảnh',
    key: 'uri_image',
    width: '30%',
  }
]

  // Code bạn muốn chạy khi component được mounted
  const router = useRouter();
  const resource = createListResource({
  doctype: 'Product',
  })
const handleButtonClick = () => {
 
  let objparam = {
    "docstatus": 0,
    "doctype": "Product",
    category: "Thực phẩm nhanh",
    barcode : state.modelValuebarcode,
    product_code : state.modelValuecode,
    product_name : state.valueName,
    product_description : state.valueDescription,
    photos : state.simple_rows
  }
  
  const resourceProductImage = createResource({
    url: 'frappe.desk.form.save.savedocs',
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
  },
    params: {
      doc:JSON.stringify(objparam),
      action:"Save"
    },
    onSuccess(data) {
      console.log(data);
      alert("Add succesfully");
    },
    onError(error){
      console.log(error)
    }
  })
  resourceProductImage.reload();
  // resource.insert.submit(newproduct)
  resource.reload();
  router.push('/');
  router.afterEach(() => {
        location.reload();
      });
}
const objUploadArgs = {
  'doctype': "Product_Image",
  'fieldname': "uri_image",
  'docname': "new-product-jrxairrkzl"
}
const onSuccess = (file) => {
  let obj =  {  
  "docstatus": 0,
  "doctype": "Product_Image",
  "name": "new-product_image-buhawsuxpf",
  "owner": file.owner,
  "parent": "new-product-xjwkkysins",
  "parentfield": "photos",
  "parenttype": "Product",
  "uri_image": file.file_url
  }
  state.simple_rows.push(obj)
  console.log(state.simple_rows);
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