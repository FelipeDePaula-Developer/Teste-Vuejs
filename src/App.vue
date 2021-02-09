<template>
  <div id="app">
    <Navbar/>
    <Homepage/>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import Homepage from './components/homepage.vue'

export default {
  name: 'App',
  components:{
    Navbar,
    Homepage
  }
}
</script>

<style scoped>

</style>
