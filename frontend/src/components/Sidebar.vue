<template>
 
  <div
  style="width: 280px;"
    class="border-r bg-gray-50 transition-all relative block">
    <div
      class="absolute right-0 z-10 h-full w-1 cursor-col-resize bg-gray-400 opacity-0 transition-opacity hover:opacity-100"
      :class="{ 'opacity-100': sidebarResizing }"
/>
<Dropdown :options="settingsItems" class="px-2">
    <template v-slot="{ open }">
      <button
        class="flex items-center rounded-md text-left px-1 py-2"
        :class="open ? 'bg-white shadow-sm' : 'hover:bg-transparent'"
        :style="{
          width: '250px',
        }">
        <FrappeDriveLogo class="w-8 h-8 rounded" />
        <div  class="ml-2 flex flex-col">
          <div class="text-lg font-semibold text-gray-900 leading-none">
            VGM Audit App
          </div>
          <div class="mt-1 hidden text-sm text-gray-700 sm:inline leading-none">
            Administrator
          </div>
        </div>
        <FeatherIcon
          
          name="chevron-down"
          class="ml-auto hidden h-4 w-4 sm:inline" />
      </button>
    </template>
  </Dropdown>

    <div class="py-1">
      <div ondragstart="return false;" ondrop="return false;" class="p-3">
        <router-link
          v-for="item in sidebarItems"
          :key="item.label"
          v-slot="{ href, navigate }"
          :to="item.route">
          <a
            class="sidebar-animate flex justify-start text-gray-800 text-sm w-full mb-1 h-7 px-2 gap-3 rounded focus:outline-none"
            :class="[
              item.highlight()
                ? 'bg-white shadow-sm border-[0.5px] border-gray-300'
                : ' hover:bg-gray-100',
            ]"
            :href="href"
            @click="navigate && $emit('toggleMobileSidebar')">
            <FeatherIcon
              :name="item.icon"
              class="stroke-1.5 self-center w-4 h-4 text-gray-800" />
            <span class="self-center">{{ item.label }}</span>
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { FeatherIcon ,  Dropdown } from "frappe-ui";
import FrappeDriveLogo from './FrappeDriveLogo.vue';
export default {
  name: "Sidebar",
  components: { FeatherIcon , FrappeDriveLogo , Dropdown},
  emits: ["toggleMobileSidebar"],
  data() {
    return {
      sidebarResizing: false,
    };
  },
  computed: {
    currentRoute() {
    return this.$route.path; // Lấy địa chỉ hiện tại từ Vue Router
  },
    sidebarItems() {
      return [
        {
          label: "Sản phẩm",
          route: "/product",
          icon: "shopping-bag",
          highlight: () => {
            return this.currentRoute === "/product";
           // return this.$store.state.currentBreadcrumbs[0].label === "Home";
          },
        },
        {
          label: "Kịch bản",
          route: "/KichBan",
          icon: "list",
          highlight: () => {
            return this.currentRoute === "/KichBan";
            // return this.$store.state.currentBreadcrumbs[0].label === "Recents";
          },
        },
        {
          label: "Biểu mẫu",
          route: "/BieuMau",
          icon: "clipboard",
          highlight: () => {
            return this.currentRoute === "/BieuMau";
            // return (
            //   this.$store.state.currentBreadcrumbs[0].label === "Favourites"
            // );
          },
        },
        {
          label: "Báo cáo",
          route: "/Report",
          icon: "bar-chart",
          highlight: () => {
            return this.currentRoute === "/Report";
           // return this.$store.state.currentBreadcrumbs[0].label === "Shared";
          },
        },
        {
          label: "Nhân viên",
          route: "/user",
          icon: "users",
          highlight: () => {
            return this.currentRoute === "/user";
           // return this.$store.state.currentBreadcrumbs[0].label === "Trash";
          },
        },
      ];
    },
    settingsItems() {
        return [
          {
            icon: "settings",
            label: "Tùy chỉnh",
            onClick: () => (this.showSettings = true),
          },
          {
            icon: "log-out",
            label: "Đăng xuất",
            onClick: () => this.logout(),
          },
        ];
      
    
    },
  },
  methods: {
    // toggleExpanded() {
    //   console.log("test");
    //   return this.$store.commit(
    //     "setIsSidebarExpanded",
    //     this.isExpanded ? false : true
    //   );
    // },
    // startResize() {
    //   document.addEventListener("mousemove", this.resize);
    //   document.addEventListener("mouseup", () => {
    //     document.body.classList.remove("select-none");
    //     document.body.classList.remove("cursor-col-resize");
    //     this.sidebarResizing = false;
    //     document.removeEventListener("mousemove", this.resize);
    //   });
    // },
    // resize(e) {
    //   this.sidebarResizing = true;
    //   document.body.classList.add("select-none");
    //   document.body.classList.add("cursor-col-resize");
    //   let sidebarWidth = e.clientX;
    //   let range = [60, 180];
    //   if (sidebarWidth > range[0] && sidebarWidth < range[1]) {
    //     sidebarWidth = 60;
    //     this.$store.commit("setIsSidebarExpanded", false);
    //   }
    //   if (sidebarWidth > 180) {
    //     this.$store.commit("setIsSidebarExpanded", true);
    //   }
    //   /* if (sidebarWidth < 100) {
    //     this.$store.commit("setIsSidebarExpanded", false )
    //   }
    //   if (sidebarWidth > 100) {
    //     this.$store.commit("setIsSidebarExpanded", true )
    //   } */
    // },
  },
  resources: {
    // getRootFolderSize() {
    //   return {
    //     url: "drive.api.files.get_user_directory_size",
    //     onError(error) {
    //       console.log(error);
    //     },
    //     auto: false,
    //   };
    // },
  },
};
</script>

<style scoped>
.sidebar-animate:active {
  transform: scaleX(0.985) scaleY(0.985) translateY(0.5px);
}
</style>
