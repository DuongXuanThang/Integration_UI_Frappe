<template>
  <header>
    <h1>VGM APP</h1>
    <div class="header-icons">
      <i class="fas fa-search"></i>
      <i class="fas fa-bell"></i>
      <i class="fas fa-user"></i>
    </div>
  </header>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
export default {
  // Add component logic here
}
</script>

<style scoped>
/* Add styling for the header */
header {
  display: flex;
  background-color: #811af7;
  color: white;
  padding: 10px;
  text-align: left;
  height: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
.header-icons {
  margin-left: auto;
}
.header-icons i {
  margin-right: 30px; /* Set margin-right to 10px for each icon */
}
</style>
