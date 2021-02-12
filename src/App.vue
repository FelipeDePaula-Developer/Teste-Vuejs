<template>
  <div id="app">
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
};
</script>

<style scoped>
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'),
      url("fonts/Roboto/Roboto-Regular.ttf") format("truetype")
  }
  @font-face {
    font-family: 'Marck Script';
    src: local('Marck Script'),
      url("fonts/Marck_Script/MarckScript-Regular.ttf") format("truetype")
  }
  #app{
    font-family: 'Roboto', sans-serif; 
  }
</style>
