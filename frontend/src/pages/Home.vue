<template>
  <div> 
    <!-- <ListView
  v-if="$resources.folderContents.data && $resources.folderContents.data.length > 0"
  :folder-contents="$resources.folderContents.data"
  :selected-entities="selectedEntities"
  @entity-selected="(selected) => (selectedEntities = selected)"
  @open-entity="(entity) => openEntity(entity)"
  @show-entity-context="(event) => toggleEntityContext(event)"
  @show-empty-entity-context="(event) => toggleEmptyContext(event)"
  @close-context-menu-event="closeContextMenu"
  @fetch-folder-contents="() => $resources.folderContents.fetch()">
  <template #placeholder>
    <NoFilesSection />
  </template>
</ListView> -->
<div>
  <div class="flex">
    <Button
  :variant="'subtle'"
  theme="gray"
  size="sm"
  label="Button"
  :loading="false"
  :loadingText="null"
  :disabled="false"
  :link="null"
>
Thêm sản phẩm
</Button>
<FileUploader
      :fileTypes="['image/*']"
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
  </div>
 
  <test
      :columns="simple_columns"
      :rows="simple_rows"
      :options="{
        getRowRoute: (row) => ({ name: 'User', params: { userId: row.id } })
      }"
      row-key="id"
    />

    <!-- Các dòng dữ liệu khác -->
  </div>
<!-- <table class="border-collapse w-full ">
    <thead>
        <tr>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Company name</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Country</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                KnobHome
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                German
            </td>
          	<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold">deleted</span>
          	</td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                <a href="#" class="text-blue-400 hover:text-blue-600 underline">Edit</a>
                <a href="#" class="text-blue-400 hover:text-blue-600 underline pl-6">Remove</a>
            </td>
        </tr>
        <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                Squary
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                Schweden
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold">active</span>
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                <a href="#" class="text-blue-400 hover:text-blue-600 underline">Edit</a>
                <a href="#" class="text-blue-400 hover:text-blue-600 underline pl-6">Remove</a>
            </td>
        </tr>
    </tbody>
</table> -->
  </div>
 

  
</template>

<script>
import test from '@/components/test.vue';
import bodytest from '@/components/bodytest.vue';
import ListView from '@/components/ListView.vue';
import { Button ,FileUploader } from 'frappe-ui';
export default {
  name: 'Home',
  components: {
    test,
    ListView,
    bodytest,
    Button,
    FileUploader
  },
  data: () => ({
   custom_columns : [
 
  {
    label: 'Email',
    key: 'email',
    width: '200px',
    icon: 'at-sign',
  },
  {
    label: 'Role',
    key: 'role',
    icon: 'users',
  },
  {
    label: 'Status',
    key: 'status',
    icon: 'check-circle',
  },
],
    simple_columns: [
        { label: "Product Name", field: "name" , width: "20%"},
        { label: "Product Information", field: "infor",width: "20%" },
        { label: "Date Modified", field: "date",width: "20%" },
        { label: "File", field: "file",width: "20%" },
        { label: "Owner", field: "owner",width: "20%" },
        // Thêm các cột khác tùy vào nhu cầu
      ],
      simple_rows: [
        // { id: 1, name: "John Doe", email: "john@example.com" },
        // { id: 2, name: "Jane Doe", email: "jane@example.com" },
        
      ],
    selectedEntities: [],
    previewEntity: null,
    showPreview: false,
    showNewFolderDialog: false,
    showRenameDialog: false,
    showShareDialog: false,
    showRemoveDialog: false,
    showEntityContext: false,
    showEmptyEntityContextMenu: false,
    entityContext: {},
  }),
  methods: {
    // Hàm kiểm tra tệp tin
    validateFileFunction(file) {
      // Thực hiện kiểm tra tệp tin ở đây và trả về true hoặc false
    },

    // Hàm xử lý khi tải lên thành công
    onSuccess(response) {
      // Thực hiện xử lý khi tải lên thành công
    },
  },
  resources: {
    // pasteEntity() {
    //   return {
    //     url: "drive.api.files.call_controller_method",
    //     method: "POST",
    //   };
    // },
    // getHomeID() {
    //   return {
    //     url: "drive.api.files.get_home_folder_id",
    //     onSuccess(data) {
    //       this.$store.commit("setCurrentFolderID", data);
    //       this.$store.commit("setHomeFolderID", data);
    //       localStorage.setItem("HomeFolderID", data);
    //     },
    //   };
    // },

    folderContents() {
      return {
        url: "frappeui.api.get_product_list",
        params: {
          
        },
        onSuccess(data) {
          console.log(data);
          for (let i = 0; i < data.length; i++) {
            
            let obj = {
              id: data[i].name,
              name: data[i].product_name,
              infor:  data[i].product_code,
              date: data[i].modified,
              owner: data[i].owner,
              file: data[i].photos
            }
            this.simple_rows.push(obj)
          }
        },
        auto: true,
      };
    },

    // toggleFavourite() {
    //   return {
    //     url: "drive.api.files.add_or_remove_favourites",
    //     params: {
    //       entity_names: JSON.stringify(
    //         this.selectedEntities?.map((entity) => entity.name)
    //       ),
    //     },
    //     onSuccess() {
    //       this.$resources.folderContents.fetch();
    //       this.selectedEntities = [];
    //     },
    //     onError(error) {
    //       if (error.messages) {
    //         console.log(error.messages);
    //       }
    //     },
    //   };
    // },

    // createDocument() {
    //   return {
    //     url: "drive.api.files.create_document_entity",
    //     onSuccess(data) {
    //       data.modified = formatDate(data.modified);
    //       data.creation = formatDate(data.creation);
    //       this.$store.commit("setEntityInfo", [data]);
    //       this.previewEntity = data;
    //       data.owner = "Me";
    //     },
    //     onError(data) {
    //       console.log(data);
    //     },
    //     auto: false,
    //   };
    // },
  },
}
</script>
<style scoped>
/* Add styling for the about page */
div {
  padding: 10px;
}
</style>