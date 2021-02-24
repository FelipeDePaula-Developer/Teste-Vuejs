<template>
  <div>
    <section>
      <form method="post" @submit.prevent="addCad">
        <b-field label="Email" :label-position="onBorder">
          <b-input v-model="dataUser.email" type="email"></b-input>
        </b-field>
        <b-field label="Senha" :label-position="onBorder">
          <b-input v-model="dataUser.senha" type="password"></b-input>
        </b-field>
        <b-field label="Nome" :label-position="onBorder">
          <b-input v-model="dataUser.nome" type="text"></b-input>
        </b-field>
        <b-button
          native-type="submit"
          name="btn-cadastrar"
          class="is-success"
          outlined
        >
          Cadastrar
        </b-button>
      </form>
    </section>
  </div>
</template>
<script>
import dataUser from "../config/requests.js";

export default {
  data() {
    return {
      dataUser: {
        email: "",
        senha: "",
        nome: "",
      },
      onBorder: "on-border",
    };
  },

  methods: {
    addCad() {
      dataUser.post(this.dataUser).then(() => {
        alert("Salvo?");
      });
    },
  },
};
</script>
<style lang="css" scoped>
section {
  padding: 20px;
}
</style>