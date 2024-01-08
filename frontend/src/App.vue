<!-- App.vue -->
<template>
  <!-- <div id="app">
    <Header />
    <div class="app-container">
      <Navigation />
      <Content />
    </div>
  </div> -->
  <div
    class="flex w-screen h-screen antialiased overflow-hidden"
    @contextmenu="handleDefaultContext($event)">
    <!-- Main container with scroll -->
    <div class="h-full w-full flex flex-col">
      <div
        class="flex h-full overflow-hidden">
        <Sidebar />
        <div class="h-full w-full overflow-hidden">
          <div
              class="flex w-full h-[calc(100vh-52px)]">
              <Content />
            </div>
          
        </div>
        
      </div>
    
    </div>
  </div>
</template>

<script>
// import Header from './pages/Header.vue';
// import Navigation from './pages/Navigation.vue';
import Content from './pages/Content.vue';
import Sidebar from "./components/Sidebar.vue";
export default {
  components: {
    Sidebar,
    // Header,
    // Navigation,
     Content,
  },
};
</script>

<style>
/* Add global styling for the app */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.app-container {
  display: flex;
  height: calc(100vh - 50px); /* Subtract header height */
}
</style>
