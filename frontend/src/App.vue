<!-- App.vue -->
<template>
  <div id="app">
    <Header />
    <div class="app-container">
      <Navigation />
      <Content />
    </div>
  </div>
</template>

<script>
import Header from './pages/Header.vue';
import Navigation from './pages/Navigation.vue';
import Content from './pages/Content.vue';

export default {
  components: {
    Header,
    Navigation,
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
  height: calc(100% - 50px); /* Subtract header height */
}
</style>
