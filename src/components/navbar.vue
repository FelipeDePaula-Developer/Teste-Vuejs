<template>
  <div class="bg-img">
    <section class="hero is-transparent is-large">
      <div class="hero-head">
        <b-navbar>
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
                <a class="button is-primary">
                  <strong>Cadastre-se</strong>
                </a>
                <a class="button is-light"> Log in </a>
              </div>
            </b-navbar-item>
          </template>
        </b-navbar>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title has-text-white">Teste</p>
          <p class="subtitle has-text-white">Teste do Teste</p>
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
        background-image: url(../assets/bg-homepage.png) ;
        background-size:  cover;
	}
	
</style>