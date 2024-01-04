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
    v-model="state.typeProduct"
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
    v-model="state.valueDescription"
    class="pdd-class"
  />

 
</div>
  </template>
  
  <script setup>
 import FormControl from '../components/FormControl.vue'
 import ListView from '../components/ListView/ListView.vue';
 import { reactive } from 'vue'
 import { onMounted, ref } from 'vue';
 import { useRouter } from 'vue-router';
 import { h } from 'vue';
import { Dropdown,FeatherIcon, createDocumentResource, createListResource ,createResource} from 'frappe-ui';
 const state = reactive({
  size: 'sm',
  variant: 'subtle',
  placeholder: 'Placeholder',
  disabled: false,
  label: 'Label',
  modelValuebarcode:'',
  modelValuecode: 'PD001',
  modelValue: '',
  valueName:'Dover',
  valueDescription:"",
  selectable: true,
  showTooltip: true,
  typeProduct:  {
        label: 'Thực phẩm nhanh',
        value: '1',
      }
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
    width: '20%',
  },
  {
    label: 'Đường dẫn ảnh',
    key: 'photo',
    width: '40%',
  }
]

const simple_rows = ref([])

  // Code bạn muốn chạy khi component được mounted
  const router = useRouter();
  const idProduct = router.currentRoute.value.params.productId
 
  const resource = createDocumentResource({
  doctype: 'Product',
  name: idProduct,
  onSuccess(data) {
    const datItem = data
    console.log(datItem);
    state.modelValuebarcode = datItem.barcode
    state.modelValuecode = datItem.product_code
    state.valueName = datItem.product_name
    state.valueDescription = datItem.product_description
    let rows = [] 
    for(let i = 0; i < datItem.photos.length;i++){
      let obj = {
        code : i + 1,
        photo: datItem.photos[i].uri_image
      }
      rows.push(obj)
    }
    simple_rows.value = rows
  }
})
resource.reload();

const handleButtonClick = () => {
  resource.setValue.submit({
       'name': idProduct,
       'product_code': state.modelValuecode,
       'barcode': state.modelValuebarcode,
       'product_name': state.valueName,
        product_description: state.valueDescription,
      onSuccess(){
        resource.load() 
      }
      
},
)
alert("Update succesfully")
  // Thêm logic xử lý khác nếu cần
};
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