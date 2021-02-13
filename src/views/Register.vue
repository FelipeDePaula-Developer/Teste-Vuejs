<template>
  <div>
      <section>
          <b-field label="Email" :label-position="onBorder">
              <b-input type="email"></b-input>
          </b-field>
          <b-field label="Senha" :label-position="onBorder">
              <b-input type="password"></b-input>
          </b-field>
          <b-field label="Nome" :label-position="onBorder">
              <b-input></b-input>
          </b-field>
      </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      onBorder: "on-border",
    };
  },
};
</script>
<style lang="css" scoped>
section {
  padding: 20px;
}
</style>