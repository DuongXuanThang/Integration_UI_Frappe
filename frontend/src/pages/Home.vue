<template>
  <div style="display: flex; justify-content: end; padding: 10px">
    
    <Dropdown
      :options="[
        {
          label: 'Thêm sản phẩm',
          value: '1',
        },
        {
          label: 'Xóa sản phầm',
          value: '2',
        },
        {
          label: 'In',
          value: '3',
        },
        {
          label: 'Sao chép',
          value: '4',
        },
      ]"
      :button="{ label: '...' }"
      style="margin-right: 10px"
    />
    <Button class="btn-save" @click="handleButtonClick"
      ><i class="fa-solid fa-plus" style="font-size: 11px"></i> Thêm sản
      phẩm</Button
    >
  </div>
  <div style="display: flex;padding-bottom: 10px;">
    <div style="display: flex;padding-right: 10px;"> 
    <TextInput
    style="padding-right: 10px;"
    :type="'text'"
    size="sm"
    variant="outline"
    placeholder="Mã sản phẩm"
    :disabled="false"
    v-model="searchTerm"
    @input="filterList(searchTerm)"
  />
  <TextInput
    :type="'text'"
    size="sm"
    variant="outline"
    placeholder="Tên sản phẩm"
    :disabled="false"
    modelValue=""
    v-model="searchTermName"
    @input="filterListName(searchTermName)"
    
  />
  </div>
  <div>
    <ListFilter 
 :docfields="yourDocFields"
 :modelValue = "modelValueFilter"
 @update:modelValue ="getData"
 />
     
  </div>
  
  </div>
 
 

  <ListView
    class="h-auto"
    :columns="simple_columns"
    :rows="isSearching ? filteredRows : simple_rows"
    @update:selections = "updateSelection"
    @deleteSelection = "deleteSelection"
    :options="{
      getRowRoute: (row) => ({
        name: 'product',
        params: { productId: row.id },
      }),
     
      selectable: selectable,
      showTooltip: showTooltip,
    }"
    row-key="id"
  />
  <p-button label="Click me" @click="handleClick"></p-button>
</template>

<script>
import ListView from '@/components/ListView/ListView.vue'

import Toast from '@/components/Toast.vue'
import TextInput from '@/components/TextInput.vue'
import ListFilter from '@/components/ListFilter/ListFilter.vue'
import { Dropdown, FeatherIcon,createResource,Autocomplete,createListResource } from 'frappe-ui'
export default {
  name: 'Home',
  components: {
    ListView,
    Dropdown,
    Toast,
    TextInput,
    ListFilter,
    Autocomplete
  },
  data: () => ({
    searchTermName:'',
    searchTerm: '',
    filteredRows: [],
    lable: "",
    yourDocFields: [{
		label: 'Name',
		value: 'product_name',
		fieldname: 'product_name',
		fieldtype: 'Data',
	},
    {
      label: 'Ten san pham',fieldname: 'product_name',fieldtype: 'Data',
    },
    {
      label: 'Mo ta',fieldname: 'product_description',fieldtype: 'Data'
    },
    {
      label: 'Loai san pham',fieldname: 'category',fieldtype: 'Data'
    }
  ],
    modelValueFilter: {
      product_name: ['like','']
    },
    posToast:'top-center',
    typeToast: '',
    showToast: false,
    titleToast:'alo 123',
    text: '',
    selectable: true,
    showTooltip: true,
    simple_columns: [
      {
        label: 'Mã sản phẩm',
        key: 'code',
        width: "10%",
      },
      {
        label: 'Tên sản phẩm',
        key: 'name',
        width: '20%',
      },
      {
        label: 'Mô tả',
        key: 'description',
        width: '35%',
      },
      {
        label: 'Loại sản phẩm',
        key: 'category',
        width :"20%"
      },
    ],
    simple_rows: [],
  }),
  async mounted() {
    this.$resources.getListProduct.fetch()
  },
  methods: {
    filterList() {
      if (this.searchTerm !== "") {
        this.filteredRows = this.simple_rows.filter(obj =>
          obj.code.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
        this.isSearching = true; // Đánh dấu là đang tìm kiếm
      } else {
        this.isSearching = false; 
      }
  },
  filterListName() {
      if (this.searchTermName !== "") {
        this.filteredRows = this.simple_rows.filter(obj =>
          obj.name.toLowerCase().includes(this.searchTermName.toLowerCase())
        );
        this.isSearching = true; // Đánh dấu là đang tìm kiếm
      } else {
        this.isSearching = false; 
      }
  },
    getData(data){
      console.log(data);
    },
    async deleteSelection(selected){
      let arrSelected = [...selected]
      const resourceDeleteProduct = createResource({
    url: 'frappeui.api.deleteList',
    method: 'POST',
    params: {
      items:JSON.stringify(arrSelected),
      doctype:"Product"
    },
    onSuccess(data) {
      console.log(data);
      if(data.status =='error'){
        alert(data.message);
      }else{
        alert("Delete succesfully");
      }
     
    },
    onError(error){
      console.log(error)
    },
    
  })
  resourceDeleteProduct.reload();
    },
    updateSelection(data){
      this.showToast = true;
      setTimeout(() => {
      this.showToast = false;
  }, 5000);
    },
    hideToast(){
      this.showToast = false;
    },
    handleButtonClick() {
      this.$router.push('/new-product');
    },
   handleRowClick (row) {
  // Xử lý khi dòng được click
  console.log('Row clicked:', row);
}
  },
  resources: {
    getListProduct() {
      return {
        url: 'frappeui.api.get_product_list',
        params: {},
        onSuccess(data) {
          for (let i = 0; i < data.length; i++) {
            let objrow = {
              id: data[i].name,
              code: data[i].product_code,
              name: data[i].product_name,
              description: data[i].product_description,
              email: 'john@doe.com',
              photo: '/files/img_4.jpg',
              status: 'Active',
              role: 'Developer',
              category : data[i].category,
            }
            this.simple_rows.push(objrow)
          
          }
        },
      }
    },
  },
}

// import router from 'vue-router';
// const state = reactive({
//   selectable: true,
//   showTooltip: true,
// })
// const simple_columns = [
//   {
//     label: 'Mã sản phẩm',
//     key: 'code',
//     width: 3,
//   },
//   {
//     label: 'Tên sản phẩm',
//     key: 'name',
//     width: '200px',
//   },
//   {
//     label: 'Mô tả',
//     key: 'description',
//   },
//   {
//     label: 'Ảnh',
//     key: 'photo',
//   },
// ]

// const simple_rows = [
//   {
//     id: 1,
//     code: 'PD001',
//     name: 'Dove',
//     description: 'This template ',
//     email: 'john@doe.com',
//     photo: '/files/img_4.jpg',
//     status: 'Active',
//     role: 'Developer',
//   },
//   {
//     id: 2,
//     code: 'PD002',
//     name: 'Cocacola',
//     description: 'This template ',
//     email: 'jane@doe.com',
//     status: 'Inactive',
//     role: 'HR',
//     photo: '/files/img_4.jpg'
//   },
//   {
//     id: 3,
//     code: 'PD003',
//     name: 'Custas',
//     description: 'custom frontend',
//     email: 'john@doe.com',
//     status: 'Active',
//     role: 'Developer',
//     photo: '/files/img_4.jpg'
//   },
//   {
//     id: 4,
//     code: 'PD004',
//     name: 'Banh Hoa Cuc',
//     description: 'This template ',
//     email: 'john@doe.com',
//     status: 'Active',
//     role: 'Developer',
//     photo: '/files/img_4.jpg'
//   },
//   {
//     id: 5,
//     code: 'PD005',
//     name: 'Banh Milano',
//     description: 'rors while using the ',
//     email: 'john@doe.com',
//     status: 'Active',
//     role: 'Developer',
//     photo: '/files/img_4.jpg'
//   },
// ]
</script>
<style scoped>
/* Add styling for the about page */
.btn-save {
  background-color: #2490ef;
  color: white;
}
</style>
