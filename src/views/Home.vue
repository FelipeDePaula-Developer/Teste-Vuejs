<template>
  <div class="bg-img">
    <section class="hero is-large">
      <div class="hero-head">
        <b-navbar class="is-transparent is-size-6">
          <template #brand>
            <b-navbar-item tag="a" :to="{ path: '/' }">
              <img src="../assets/logo.png" />
            </b-navbar-item>
          </template>
          <!-- <template #start>
            
          </template> -->
          <template #end>
            <b-navbar-item class="has-text-white">Home</b-navbar-item>
            <b-navbar-item class="has-text-white">Projetos</b-navbar-item>
            <b-navbar-item class="has-text-white">Contato</b-navbar-item>
            <b-navbar-item tag="div">
              <div class="buttons">
                <router-link to="/register" class="button is-primary">
                  Cadastre-se
                </router-link>
                <router-link to="/login" class="button is-light">
                  Log in
                </router-link>
              </div>
            </b-navbar-item>
          </template>
        </b-navbar>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="has-text-white marck-title">Firefly</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-img {
  background-image: url(../assets/bg-homepage.png);
  background-size: cover;
}
.marck-title {
  font-family: "Marck Script", cursive !important;
  font-size: 96px;
  filter: drop-shadow(6px 5px 4px #000000);
}
</style>